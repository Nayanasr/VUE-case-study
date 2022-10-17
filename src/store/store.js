import { createStore } from "vuex";
let store = createStore({
    state() {
        return {
            isAuthenticated: false,
            cart: [],
        }
    },
   

    mutations: {
        login(state) {
            state.isAuthenticated = true
        },

        logout(state) {
            state.isAuthenticated = false
        },
        
     },
   
})

export default store