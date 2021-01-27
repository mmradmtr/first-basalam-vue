import Vue from 'vue'
import Vuex from 'vuex'
import Booths from '@/store/posts.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: Booths,

    getters: {
        getQuantitiesInputs: () => {
        }
    },

    mutations: {
        deleteProduct(state, id) {
            let product,productIndex = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id == id);
                productIndex = Booth.Products.findIndex((foundedProduct) => foundedProduct == product);
                if (product) {
                    Booth.Products.splice(productIndex,1)
                }
            });
        },

        increaseProduct(state, id) {
            let product = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    ++product.quantity;
                }
            });
        },
        decreaseProduct(state, id) {
            let product = null;
            state.forEach(Booth => {
                product = Booth.Products.find((foundedProduct) => foundedProduct.id === id);
                if (product) {
                    product.quantity > 1 ? --product.quantity : true;
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

