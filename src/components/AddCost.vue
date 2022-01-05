
<template>
  <!-- <v-app> -->
    <!-- <v-btn>Add new cost</v-btn> -->
    <v-form >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="date" label="Date" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="category"
              label="Category"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="value" label="Value" required></v-text-field>
          </v-col>
          <v-btn color="teal" dark @click.prevent="submit">Add</v-btn>
          <SelectCategory @addcategory="setNewCategory" />
        </v-row>
      </v-container>
    </v-form>
  <!-- </v-app> -->

  <!-- <div> -->
  <!-- <button @click="getShowAdder">Add new cost</button> -->
  <!-- <form action=""  @submit.prevent="submit">
      <input type="text" v-model.trim="date" placeholder="date" />
      <input
        type="text"
        v-model.trim="category"
        ref="category"
        placeholder="category"
      />
      <input type="text" v-model.number="value" placeholder="value" />
      <br />
      <SelectCategory @addcategory="setNewCategory" />
      <button>Add</button>
    </form> -->
  <!-- <div>Длина{{ getLength }}</div> -->
  <!-- </div> -->
</template>

<script>
import SelectCategory from "@/components/SelectCategory.vue";
import { mapMutations, mapGetters } from "vuex";
// import { eventBus } from "../main.js";

export default {
  name: "AddCost",
  components: {
    SelectCategory,
  },
  props: {
    property: Object,
    getEditer: Object,
    openCon: Boolean,
    // showAdder: Boolean
    // id: Number,
    // date: null,
    // category: null,
    // value: null,
  },
  data() {
    return {
      key: null,
      id: null,
      date: null,
      category: null,
      value: null,
      ggetEditer: true,
    };
  },

  methods: {
    ...mapMutations([
      "UpdateCosts",
      "InsertNewCosts",
      "EditerCosts",
      "EditCosts",
      "EditerState",
    ]),

    setNewCategory(newCategory) {
      this.category = newCategory;
    },

    submit(event) {
      event.preventDefault();

      // для редактировавния

      if (this.getListEditCost.length > 0) {
        const comparisonItem = this.getListEditCost[0];
        const editedItem = {
          id: comparisonItem.id,
          date: this.date,
          category: this.category,
          value: this.value,
        };

        this.EditCosts(editedItem);
        this.date = this.category = this.value = null;
      } else {
        this.InsertNewCosts({
          id: 7,
          date: this?.date || this.getCurrentDate,
          category: this.category,
          value: this.value,
        });
        this.date = this.category = this.value = null;
      }

      this.date = this.category = this.value = null;
      this.$modal.hide();
    },

    // getShowAdder() {
    //   this.showAdder = true;
    // },
  },

  computed: {
    ...mapGetters([
      "allCosts",
      "getLength",
      "getListEditerState",
      "getListEditCost",
    ]),

    getCurrentDate() {
      const today = new Date();
      const dayEl = today.getDate();
      const mouthEl = today.getMonth() + 1;
      const yearEl = today.getFullYear();
      return `${dayEl}.${mouthEl}.${yearEl}.`;
    },
  },
  created() {
    if (this.getListEditCost.length) {
      this.date = this.getListEditCost[0]?.date;
      this.category = this.getListEditCost[0]?.category;
      this.value = this.getListEditCost[0]?.value;
    }
    // eventBus.$on("edit", () => {
    //   console.log("событие эвент баса произошло!");
    //   this.date = "00.00.0000";
    //   this.category = "razvod";
    //   this.value = 99999;
    //   debugger;
    // });
    // if (this.EditerState[0].option == "edit") {
    //   debugger;
    //   this.showAdder = true;
    //   // const editItem = this.getListEditCost[0];
    //   this.date = this.this.getListEditCost[0].date;
    //   this.category = "razvodov";
    //   this.value = this.getListEditCost[0].value;
    // }
  },
};
</script>

<style>
</style>