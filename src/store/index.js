import Vue from 'vue'
import Vuex from 'vuex'
import Booths from '@/store/posts.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Booths,

    },

    getters: {
        getAllProducts: (state) => {
            let Products = 0;
            state.Booths.forEach((Booths) => {
                Products += Booths.products.length
            })
            return Products
        },
        footerContinueBuy: (state) => {
            return state.Booths.length
        },
        footerTotalPrice: (state) => {
            let temp, TotalPrice = null;
            state.Booths.forEach((Booths) => {
                temp = Booths.products;
                temp.find((products) => {
                    TotalPrice += products.sale
                })
            })
            return TotalPrice
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
        deleteProduct(state, id) {
            let product, productIndex = null;
            state.Booths.forEach(Booth => {
                product = Booth.products.find((foundedProduct) => foundedProduct.id == id);
                productIndex = Booth.products.findIndex((foundedProduct) => foundedProduct == product);
                if (product) {
                    Booth.products.splice(productIndex, 1)
                }
            });
        },
        deleteInfo() {
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
        }
    },
    actions: {
        deleteProduct(context, id) {
            context.commit('deleteProduct', id);
            context.commit('deleteInfo', id);

        },
        increaseProduct(context, id) {
            context.commit('increaseProduct', id)
        },
        decreaseProduct(context, id) {
            context.commit('decreaseProduct', id)
        }
    },
})

