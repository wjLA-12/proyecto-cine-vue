import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        token:"",
        datos:{},
        action:[]

    },

    mutations:{
        setToken(state, value){
            state.token=value
        },
        setDatos(state, value){
            state.datos=value
        },
        setAction(state,v){
            state.action.push(v);
        },
        
    },
    actions:{
        setToken(context, value){
            context.commit("setToken", value)
        },
        setDatos(context,value){
            context.commit("setDatos", value)
        }

    }

    
})