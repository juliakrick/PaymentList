<template>
  <v-app>
    <v-main>
      <h1 class="text-h5 text-sm-h3 header-title">My personal costs</h1>
      <v-app-bar app flat>
        <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
        <v-btn plain :ripple="false" to="/about">About</v-btn>
      </v-app-bar>
      <!-- <transition name="fade">
      <modal-window v-if="ModalSettings.name" :settings="ModalSettings" />
    </transition> -->

      <!-- <v-app id="inspire"> -->
      <!-- <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" max-width="500">
            <template v-slot:activator="{ on, attrs }"> -->
      <!-- <v-btn color="primary" v-bind="attrs" v-on="on"
                  >From the bottom</v-btn
                > -->
      <!-- <v-col> -->

      <!-- </v-col>
                <v-btn class="left" v-bind="attrs" v-on="on" color="teal" dark>
                  ADD NEW COST <v-icon>mdi-plus</v-icon>
                </v-btn> -->

      <!-- </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar class="text-h2 pa-12" color="teal" dark
                  >Add new cost</v-toolbar
                >
                <v-card-text>
                  <div class="text-h4">
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
      </v-row> -->
      <!-- </v-app> -->

      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>

  <!-- 
  <div id="app">
    <div class="header">
      <h1 class="header-title">My personal costs</h1>
    </div>
    <div>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/notfound">NotFound</router-link>
    </div>
    <router-view></router-view> -->

  <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <transition name="fade">
      <modal-window v-if="ModalSettings.name" :settings="ModalSettings" />
    </transition>
  </div>  -->
</template>

<script>
// import ModalWindow from "@/components/ModalWindow.vue";
// import Dashboard from "@/views/Dashboard.vue";
// import NotFound from "@/views/NotFound.vue";
// import { mapGetters} from "vuex";
// import AddCost from "@/components/AddCost.vue";

export default {
  name: "App",
  components: {
    // AddCost,
    // ModalWindow: () =>
    //   import(
    //     /*webpackChunkName:'ModalWindow' */ "./components/ModalWindow.vue"
    //   ),
  },
  data() {
    return {
      ModalOpenClose: false,
      ModalSettings: {},
      Edit: false,
    };
  },

  methods: {
    onShow(settings) {
      this.ModalSettings = settings;
      // console.log("это сеттингс", settings);
    },

    onHide() {
      this.ModalSettings = {};
    },
  },

  mounted() {
    this.$modal.EventBus.$on("shown", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },

  beforeDestroy() {
    this.$modal.EventBus.$off("shown", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
/* .item {
  color: blue;
} */

/* .header-block {
  display: flex;
  flex-direction: column;
} */

.header-title {
  padding-top: 80px;
}
/* .btn_position{
  display: flex;
  align-items: flex-start;
  background-color: blue !important;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
