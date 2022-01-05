<template>
  <select
    name="category"
    id="category"
    v-model="selected"
    @change="onChandeSelected"
  >
    <option v-for="(item, idx) of getCostCategory" :key="idx">
      {{ item }}
    </option>
  </select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectCategory",
  props: ["category"],
  data() {
    return {
      selected: null,
    };
  },

  methods: {
    onChandeSelected() {
      const newCategory = this.selected;
      this.$emit("addcategory", newCategory);
    },
    
  },

  computed: {
    ...mapGetters(["getCostCategory"]),
  },
};
</script>

<style>
</style>