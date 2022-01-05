<template>
  <div>
    <canvas ref="canvas" id="diagram" class="diagram"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  name: "Diagram",
  extends: Pie,
  data() {
    return {
      // chartData: {},
    };
  },

  computed: {
    ...mapGetters(["allCosts"]),
    diagdata() {
      return this.getDiagramData();
    },
  },

  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["UpdateCosts"]),
    getDiagramData() {
      let catArr = {};
      for (let i in this.allCosts) {
        let listr = this.allCosts[i];

        if (Object.prototype.hasOwnProperty.call(catArr, listr.category)) {
          catArr[listr.category] = +catArr[listr.category] + (+listr.value);
        } else {
          catArr[listr.category] = listr.value;
        }
      }
      return {
        values: Object.values(catArr),
        categories: Object.keys(catArr),
        size: Object.keys(catArr).length,
      };
    },
    getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getColors(listlenght) {
      let colors = [];
      let i = 0;
      while (i < listlenght) {
        colors.push(this.getRandomColor());
        i++;
      }
      return colors;
    },
    renderDiagramm: function () {
      this.renderChart({
        labels: this.diagdata?.categories,
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: this.getColors(this.diagdata?.size),
            data: this.diagdata?.values,
          },
        ],
      });
    },
  },
  created() {},

  watch: {
    diagdata(newData, oldData) {
      if (JSON.stringify(newData) != JSON.stringify(oldData)) {
        this.renderDiagramm();
      }
    },
  },

  async mounted() {
    if (!this.allCosts.length) {
      await this.fetchData();
    }
    this.renderDiagramm();
  },
};
</script>

<style>
canvas {
  width: 200px;
  height: 200px;
}
</style>