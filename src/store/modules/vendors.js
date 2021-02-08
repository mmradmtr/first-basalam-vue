import axios from "axios";

const vendors = {
    namespaced: true,
    state: {
        vendors: []
    },
    mutations: {
        set_vendors(state, data) {
            state.vendors = data;
        }
    },
    actions: {
        async loadVendors({commit}) {
            const {data} = await axios.get('https://run.mocky.io/v3/cdf4d9ab-64ab-4bce-b766-7ca8e068cb51')
            commit('set_vendors', data.vendors)
        }
    }
}

export default vendors