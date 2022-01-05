<template>
  <!-- модальное окно -->
  <!-- <v-app id="inspire"> -->
  <v-row justify="space-around">
    <!-- <v-col cols="auto"> -->
    <v-col class="position_flex">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <!-- <v-card class="d-flex justify-start mb-6" flat tile> -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="teal" dark>
            ADD NEW COST <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="teal" dark>Add new cost</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">
                <AddCost />
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
  <!-- </v-app> -->

  <!-- модальное окно -->
</template>

<script>
import AddCost from "@/components/AddCost.vue";
export default {
  components: {
    AddCost,
  },
  props: {
    openCon: Boolean,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
<style scoped>
.position_flex {
  display: flex;
}
</style>
