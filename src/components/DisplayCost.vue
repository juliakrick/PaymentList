<template>
  <v-container>
    <v-row>
      <v-col :cols="1">№</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="2">Delete/Edit</v-col>
    </v-row>
    <v-row v-for="costs of currentList" :key="costs.key">
      <v-col :cols="1">{{ costs.str_num }} </v-col>
      <v-col :cols="3">{{ costs.date }}</v-col>
      <v-col :cols="4">{{ costs.category }}</v-col>
      <v-col :cols="2">{{ costs.value }}</v-col>
      <v-col :cols="2">
        <button
          @click="getEditItem(costs, $event), (showDropDown = !showDropDown)"
        >
          ***
        </button>
      </v-col>
    </v-row>
    <!-- <ChangeCost v-show="showDropDown" /><br /> -->
    <v-row>
      <v-col>
        <v-pagination
          :curPage="CurrentPage"
          :routP="routePage"
          @paginate="onChangePage"
          :length="getPages"
          v-model="CurrentPage"
        >
        </v-pagination>

        <!-- <Pagination
          :curPage="CurrentPage"
          :routP="routePage"
          @paginate="onChangePage"
        /> -->
      </v-col>
    </v-row>
  </v-container>

  <!-- <div>
    <div>
      <div v-for="costs of currentList" :key="costs.key">
        <span v-bind="(currentCost = costs)">
          №{{ costs.str_num }} {{ costs.date }}-{{ costs.category }}-{{
            costs.value
          }} -->

  <!-- showEditor() -->

  <!-- <button @click="getEditItem(costs, $event), showDropDown = !showDropDown">***</button> -->
  <!-- showDropDown = !showDropDown; -->

  <!-- <br /> -->
  <!-- <ChangeCost v-show="showDropDown" /><br /> -->
  <!-- </span>
        <br />
      </div>
      <Pagination
        :curPage="CurrentPage"
        :routP="routePage"
        @paginate="onChangePage"
      /> -->

  <!-- <br />
      <span>Total {{ costsValues }}</span>
      <br />
    </div>
  </div> -->
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
// import Vue from "vue";
// import Pagination from "@/components/Pagination.vue";
// import Vue from "vue";
// import ChangeCost from "@/components/ChangeCost.vue";

export default {
  name: "DisplayCost",
  components: {
    // Pagination,
    // ChangeCost,
  },
  props: {
    EditCost: Object,
  },
  data() {
    return {
      Page: "",
      CurrentPage: 1,
      Size: 3,
      routePage: this.$route.params.numbers || 1,
      currentCost: null,
      showDropDown: true,
      // item: null,
      point: null,
      // pointState: null,
      // currentPointState: null,
    };
  },
  computed: {
    ...mapGetters([
      "allCosts",
      "costsValues",
      "getPages",
      "getLength",
      "getListEditCost",
      "getNumberItem",
    ]),

    currentList() {
      const { Size, CurrentPage } = this;
      const end = Size * CurrentPage;
      let start = end - Size;
      // console.log(this.allCosts.slice(start, end));
      // let List = this.allCosts.map((elem, idx) => {
      //   console.log(elem);
      //   this.allCosts["idx"] = idx;
      // });

      let listWithNumeration = this.allCosts.slice(start, end);
      for (let i = 0; i < listWithNumeration.length; i++) {
        listWithNumeration[i]["str_num"] = i + start + 1;
      }
      // let listWithNumeration = this.allCosts.slice(start, end);

      return listWithNumeration;
    },
  },

  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["InsertNewCosts", "EditerCosts"]),

    onChangePage(p) {
      this.CurrentPage = p;
    },

    getEditItem(cost, event) {
      const position = event.target;
      console.log(position);
      this.point = position.getBoundingClientRect();
      this.EditerCosts(cost);
      // this.point = c
      // this.$emit(
      //   "showcontext",
      //   {
      //     left: this.point.left,
      //     top: this.point.top,
      //   },

      //   this.showDropDown
      // );
    },

    // ДЛЯ РЕДАКТИРОВАНИЯ

    // showEditor(costs) {
    //   this.$modal.show("ChangeCost", { header: "Edit costs" });
    //   this.currentCost = costs;
    //   console.log("currentCosts", this.currentCost);
    // },
    // closeEditor() {
    //   this.$modal.hide();
    // },

    // ДЛЯ РЕДАКТИРОВАНИЯ
  },

  created() {},

  watch: {
    CurrentPage(NewPage) {
      if (NewPage) {
        this.$emit("hideDownDrop", false);
      }
    },
    point(newPoint, oldPoint) {
      if (newPoint?.left == oldPoint?.left && newPoint?.top == oldPoint?.top) {
        if (!this.showDropDown) {
          this.$emit("hideDownDrop", false);
          //  this.showDropDown = !this.showDropDown;
        } else {
          this.$emit(
            "showcontext",
            {
              left: newPoint.left,
              top: newPoint.top - 225,
            },
            true
          );
        }
      } else {
        this.showDropDown = true;
        this.$emit(
          "showcontext",
          {
            left: newPoint.left,
            top: newPoint.top - 225,
          },
          true
        );
      }

      // if (newPoint) {
      //   console.log("newPoint");
      //   this.$emit(
      //     "showcontext",
      //     {
      //       left: newPoint.left,
      //       top: newPoint.top,
      //     },
      //     this.showDropDown
      //   );
      // }
      // if (oldPoint) {
      //   console.log(oldPoint);
      //   // this.$emit("closeContextMenu", false);
      //   this.$emit("hideDownDrop", false);
      // } else {
      //   console.log(newPoint);
      //   this.$emit(
      //     "showcontext",
      //     {
      //       left: newPoint.left,
      //       top: newPoint.top,
      //     },
      //     this.showDropDown
      //   );
      // }
    },
  },

  async mounted() {
    if(!this.allCosts.length){
      await this.fetchData();
    }
    this.CurrentPage = Number(this.routePage);
  },

};
</script>

<style scoped>
</style>