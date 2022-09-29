import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: '谁家哥哥',
        age: 18
    },
    getters: {},
    mutations: {
        updateName(state, name) {
            state.name = name
        },
        //错误写法（导致浏览器vue工具中数据不同步），正确写法用action
        /*updateServeName(state) {
            //发送请求
            axios.get('api/user').then(res => {
                const {name, age} = res.data.data
                state.name = name
                state.age = age
            })
        }*/
        updateServeName(state,user) {
            state.name=user.name
            state.age=user.age
        }
    },
    actions: {
        updateServeName(context){
            axios.get('api/user').then(res => {
                context.commit('updateServeName',res.data.data)
            })
        }
    },
    modules: {}
})






