<template >
 
     <v-row cols="8">
    
    <ChangeCost v-if="openCon" :caller="caller" />
    <v-col>
      <v-row>
         <ModalWindowVuetify/>
      </v-row>
        <v-row>
          <DisplayCost
        @showcontext="openContext"
        @hideDownDrop="closeContextMenu"
      />

      </v-row>
      
      <!-- <ChangeCost v-if="openCon" :caller="caller" /> -->
    </v-col>
    <v-col>
      <Diagram />
    </v-col>
  </v-row>

 
 
</template>

<script>
import Diagram from "@/components/Diagram.vue";
import DisplayCost from "@/components/DisplayCost.vue";
import ChangeCost from "@/components/ChangeCost.vue";
import ModalWindowVuetify from "@/components/ModalWindowVuetify.vue";

import { mapMutations } from "vuex";

export default {
  name: "Dashboard",
  components: {
    ChangeCost,
    DisplayCost,
    Diagram,
    ModalWindowVuetify,
    // ModalWindow,
  },
  props: {
    settings: Object,
  },
  data() {
    return {
      btnText: "ADD NEW COST +",
      openCon: false,
      caller: null,
    };
  },
  methods: {
    // ...mapActions(["fetchData"]),
    ...mapMutations(["EditerCosts", "DeleterCosts"]),

    showPaymentForm() {
      this.$modal.show("AddCost", { header: "Add costs" });
      this.DeleterCosts();
      this.openCon = false;
    },
    closeModalWindow() {
      this.$modal.hide();
    },

    openContext(position, OpenContext) {
      this.openCon = OpenContext;
      this.caller = position;
      return this.openCon
    },
    closeContextMenu(stage) {
      this.openCon = stage;
    },
    changeContextMenu(stag){
      console.log(stag)
      this.openCon = stag;
    }
  },
  computed: {
    //   btnText() {
    //     if (this.closeModalWindow) {
    //       return "ADD NEW COST +";
    //     }
    //     return "Hide";
    //   },
  },
  // async mounted() {
  //   await this.fetchData();
  // }
};
</script>

<style scoped>
h1 {
  color: white;
  background-color: black;
}
</style>