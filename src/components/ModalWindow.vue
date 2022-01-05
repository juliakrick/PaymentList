<template  >
<div>
    <div class="wrapper" @click.stop="hideDialod">
      <div @click.stop class="content">
        <div class="header">{{ settings.header }}</div>

        <components
          :is="settings.name"
          :property="settings"
          @sendEdit="methodEdit"
          :getEditer="settings"
        />
        <div class="footer">
          <button @click="$modal.hide()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
 


<script>
import AddCost from "@/components/AddCost.vue";
// import ChangeCost from "@/components/ChangeCost.vue";
// import ChangeCost from './ChangeCost.vue';

export default {
  name: "ModalWindow",
  components: {
    AddCost,
  },
  props: {
    settings: Object,
  },
  data() {
    return {
      getEditer: false,
    };
  },

  methods: {
    methodEdit(data) {
      this.getEditer = data;
      console.log("Это то что попадает в итог", this.getEditer);
    },

    hideDialod() {
      this.$modal.hide();
    },
  },
};
</script>

<style  scoped>

.modal_window {
  position: relative !important;
  width: 100% !important;
  height: 100vh !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: 0 !important;
  z-index: 9999;
  background: rgb(66, 65, 65, 0.8) !important;
  position: flex !important; 
  display: block !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding-bottom: 250px !important;
  z-index: 9999;
 }

.content {
  z-index: 10000;
  position: absolute !important;
  margin: 0 auto !important;
  background: white !important;
  border-radius: 12px !important;
  max-height: 50px !important;
  /* max-width: 600px !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: 0 !important;  */
  padding: 20px !important;

}
</style>