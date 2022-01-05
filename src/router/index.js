import Vue from 'vue'
import Router  from 'vue-router'

// import Contacts from "@/views/Contacts.vue";
// import Dashboard from "@/views/Dashboard.vue";
// import NotFound from "@/views/NotFound.vue";
// import App from "@/App.vue";


Vue.use(Router )



export default new Router ({
  mode: 'history',
     routes:[
      {
        path:'/',
        // component: App,
        // name:'app'
      },
      {
        path:'/dashboard',
        component: ()=>import(/*webpackChunkName:'Dashboard' */ '@/views/Dashboard.vue'),
        name:'dashboard',
        // components: { default: dashboard },
        // props: {
        //   settings: Object,
        // },
      },
      {
        path:'/dashboard/:numbers',
        component: ()=>import(/*webpackChunkName:'Dashboard' */ '@/views/Dashboard.vue'),
        name:'dashboard_num'
      },
       {
       path:'/contacts*',
       component: ()=>import(/*webpackChunkName:'Contacts' */ '@/views/Contacts.vue'),
       name:'contacts'
     },
     {
      path:'*',
      component: ()=>import(/*webpackChunkName:'NotFound' */ '@/views/NotFound.vue'),
      name:'notfound'
    },
    // {
    //   path:'*',
    //   component: NotFound,
    //   name:'notfound'
    // },

    // {
    //   path: '*',
    //   redirect: { name: 'notfound' }
    // }
    
    ]
})
