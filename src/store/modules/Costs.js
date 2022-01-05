// import Vue from "vue";


export default{
    actions: {
        async fetchData({commit}){
          const res = await fetch(
            "https://raw.githubusercontent.com/juliakrick/JsonStorage/master/data.json"
          );
          const data = await res.json()
            commit('UpdateCosts', data)            
        },       
    },
    mutations: {
         UpdateCosts(state, data ){
           state.Costs = data
        }, 
         EditCosts(state, payload){
            let index = state.Costs.findIndex(c => c.id == payload.id);
            state.Costs[index].id = payload.id
            state.Costs[index].date = payload.date         
            state.Costs[index].category = payload.category
            state.Costs[index].value = payload.value
            
        },

       DeleteCosts(state, payload){
          var index = state.Costs.findIndex(c => c.id == payload.id);
          state.Costs.splice(index, 1);  
        },

       InsertNewCosts(state, payload){
           state.Costs.push(payload)
        },

        getListCategory(state, payload){
           state.ListCategory = payload
        },

        EditerCosts(state, payload){
          state.ListEditCost = []
          state.ListEditCost.push(payload)
        },

        DeleterCosts(state){
          state.ListEditCost = []
        },

        EditerState(state, payload){
          state.ListEditerState = []
          state.ListEditerState.push(payload)          
        }

      },

    state: {
       Costs:[],
       ListCategory:['Education', 'Sport', 'Entertaiment', 'Food', 'Navigation'],     
       ListEditCost:[],
       ListEditerState:[]
      }, 

     getters:{
        allCosts:state=>{
          return state.Costs
        } ,
        getLength: state =>{
          return state.Costs.length
        },
        getPages: state => {
          return Math.ceil(state.Costs.length/3)
        },      
        getCostCategory: state =>{
          return state.ListCategory
        },
        costsValues:state => {
          let count = state.Costs.reduce((res, cur) => res + cur.value, 0)
          return count
        },  
        getListEditCost: state =>{
          return state.ListEditCost
        },
        getListEditerState: state => {
          return state.ListEditerState
        },
    }
}