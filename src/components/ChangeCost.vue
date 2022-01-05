<template>
  <v-container class="dropdown" :style="stylus">
    <v-select
      @change="editRow"
      v-model="act"
      class="selector"
      dense
      :items="item"
      single-line
      value="item"
   
   
    >
      <!-- <v-option value="edit" class="select">Edit</v-option>
      <v-option value="delete" class="select">Delete</v-option> -->
    </v-select>
  </v-container>

  <!-- <div class="dropdown"  :style="stylus" >
    <select @change="editRow" v-model="act" class="selector">
      <option class="select"></option>
      <option value="edit" class="select">Edit</option>
      <option value="delete" class="select">Delete</option>
    </select>
    <br />
  </div> -->
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { eventBus } from "../main.js";

export default {
  name: "ChangeCost",
  props: {
    property: Object,
    caller: Object,
  },
  data() {
    return {
      EditableState: false,
      act: "",
      item: ["delete", "edit"],
    };
  },
  methods: {
    ...mapMutations(["EditerState", "DeleteCosts", "EditerCosts"]),
    editRow() {
      if (this.act == "edit") {
        // const edState = { stateE: true, option: this.act };
        // this.EditerState(edState);
        console.log("редактирование!");
        // this.EditableState = true;
        // const EditItem = this.getListEditCost[0];
        eventBus.$emit("edit");
        // console.log("подписка на событие эвент бас");
        this.$modal.show("AddCost", { header: "Add costs" });
        //  this.$modal.show('ChangeCost', { header: "Edit costs"});
      }
      if (this.act == "delete") {
        console.log("удаление!");
        const DeleteItem = this.getListEditCost[0];
        console.log("ДелитАйтем:", DeleteItem);
        this.DeleteCosts(DeleteItem);
        this.$modal.hide();
      }

      // вариант через вьюкс
      const edState = { stateE: true, option: this.act };
      this.EditerState(edState);
      // вариант через вьюкс

      console.log("последнее", this.EditerState);
      console.log("это эдитссс", this.EditableState);
      this.$emit("sendEdit", this.EditableState);
    },
  },
  computed: {
    ...mapGetters(["getListEditCost"]),

    stylus() {
      return {
        top: `${this.caller?.top}px`,
        left: `${this.caller?.left + 50}px`,
      };
    },
  },
  mounted() {},
};
</script >

<style scoped>
.dropdown {
  position: absolute;
  

}

.selector {
  position: absolute;
  width: 130px;
 
}

.select {
  width: 150px;
  cursor: pointer;
  display: block;
  padding: 10px;
  font-size: 14px;
  color: #888;
  transition: all 0.3s ease-in-out;
  line-height: 20px;
}
</style>