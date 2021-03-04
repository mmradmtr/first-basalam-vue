import Vue from 'vue'
import Vuex from 'vuex'
import Booths from '@/store/posts.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Booths,
        dataCart: []
    },
    getters: {
        dataCart(state) {
            return state.dataCart
        },
        getAllProducts: (state) => {
            let p = 0;
            for (let key in state.dataCart) {
                p += state.dataCart[key].products.length
            }
            return p
        },
        footerContinueBuy: (state) => {
            return state.Booths.length
        },
        footerTotalPrice: (state) => {
            let p = 0;
            //ghorfa
            for (let key in state.dataCart) {
                //product in ghorfa
                for (let t = 0; t < state.dataCart[key].products.length; t++) {
                    p += state.dataCart[key].products[t].primaryPrice * state.dataCart[key].products[t].quantity;
                }
            }
            return p
        },
        getProductCount: (state) => {
            state.Booths.forEach((Booths) => {
                return Booths.info.productsCount = Booths.products.length;
            })
        },
        getProductPrice: (state) => {
            state.Booths.forEach((Booths) => {
                Booths.info.factorPrice = Booths.products.reduce((total, item) => {
                    return total + item.sale
                }, 0)
            })
        }
    },
    mutations: {
        deleteProduct(state, payload) {
            if (state.dataCart[payload.booth].products.length === 1) {
                delete state.dataCart[payload.booth]
                state.dataCart = Object.assign({},state.dataCart)
            } else
                state.dataCart[payload.booth].products.splice(payload.idProduct, 1)
        },
        dataCart(state, {data, firstLoad}) {
            // or read from cookie
            if (firstLoad) {
                let obj = {}
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].products.length; j++) {
                        data[i].products[j].quantity = 1
                    }
                    obj[data[i].id] = data[i]
                }
                state.dataCart = obj
            }
        },
        increaseProduct(state, id) {
            let product = null;
            state.Booths.forEach(Booth => {
                product = Booth.products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    ++product.quantity;
                    product.price = product.firstPrice * product.quantity;
                    product.sale = product.price * product.percent;
                }
            });
        },
        decreaseProduct(state, id) {
            let product = null;
            state.Booths.forEach(Booth => {
                product = Booth.products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    product.quantity > 1 ? --product.quantity : true;
                    product.price = product.firstPrice * product.quantity;
                    product.sale = product.price * product.percent;
                }
            });
        },
        countOrder(state, payload) {
            state.dataCart[payload.booth].products[payload.idProduct].quantity = payload.count;
            Vue.set(state.dataCart, payload.booth, state.dataCart[payload.booth])

        }
    },
    actions: {
        deleteProduct({commit}, id) {
            commit('deleteProduct', id);
        },
        countOrder({commit}, payload) {
            commit('countOrder', payload);
        },
        increaseProduct({commit}, id) {
            commit('increaseProduct', id)
        },
        decreaseProduct({commit}, id) {
            commit('decreaseProduct', id)
        },
        dataCart({commit}, payload) {
            commit('dataCart', payload)
        }
    },
})