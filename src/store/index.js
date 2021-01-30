import Vue from 'vue'
import Vuex from 'vuex'
import Booths from '@/store/posts.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: Booths,

    getters: {
        getAllProducts: (state) => {
            let Products = 0;
            state.forEach((Booths) => {
                Products += Booths.Products.length
            })
            return Products
        },
        //temp code !
        isProduct: (state) => {
            console.log(state)
        },
        //temp code !
        footerContinueBuy: (state) => {
            return state.length
        },
        footerTotalPrice: (state) => {
            let temp, TotalPrice = null;
            state.forEach((Booths) => {
                temp = Booths.Products;
                temp.find((Products) => {
                    TotalPrice += Products.sale
                })
            })
            return TotalPrice
        }
    },
    mutations: {
        deleteProduct(state, id) {
            let product, productIndex = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id == id);
                productIndex = Booth.Products.findIndex((foundedProduct) => foundedProduct == product);
                if (product) {
                    Booth.Products.splice(productIndex, 1)
                }
            });
        },

        increaseProduct(state, id) {
            let product = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    ++product.quantity;
                    product.price = product.firstPrice * product.quantity;
                    product.sale = product.price * product.percent;
                }
            });
        },
        decreaseProduct(state, id) {
            let product = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    product.quantity > 1 ? --product.quantity : true;
                    product.price = product.firstPrice * product.quantity;
                    product.sale = product.price * product.percent;
                }
            });
        }
    },
    actions: {
        deleteProduct(context, id) {
            context.commit('deleteProduct', id)
        },
        increaseProduct(context, id) {
            context.commit('increaseProduct', id)
        },
        decreaseProduct(context, id) {
            context.commit('decreaseProduct', id)
        }
    },
})

