<template>
  <div>
    <button
      :class="{ active: isActive[res] }"
      type="button"
      v-for="res in getPages"
      :key="res.inx"
      @click="onclick(res), selectTag(res)"
    >
      {{ res }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      isActive: { 1: true },
    };
  },
  props: {
    CurPage: Number,
    routP: null,
  },

  computed: {
    ...mapGetters(["getPages", "allCosts"]),
  },

  methods: {
    onclick(inx) {
      this.$emit("paginate", inx);
    },

    selectTag(inx) {
      console.log("это routP", this.routP);
      this.isActive = {};
      this.$set(this.isActive, inx, !this.isActive[inx]);
      console.log(!this.isActive[inx]);
    },
  },




  mounted() {
     console.log("это rPage:", this.routP);
      this.isActive = {};
      this.$set(this.isActive, this.routP, !this.isActive[this.routP]);
      // console.log(!this.isActive[this.routP]);
      this.selectTag(Number(this.routP));
  },
};
</script>

<style>
.active {
  background-color: brown;
}
</style>