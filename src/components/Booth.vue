<template>
  <div class="body">
    <Title v-if="deleteProduct" :Title="Booths.name"></Title>
    <Information v-if="deleteProduct" :info="Booths"></Information>
    <Products :products="product" @countOrder="countOrderProductEvent" @deleteProduct="deleteProductEvent"
              :product_index="idx" :boothIndex="booths_index" v-for="(product, idx) in Booths.products" :key="idx"></Products>
    <Continue v-if="deleteProduct" :Booths="Booths.products"></Continue>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Information from '@/components/Information'
import Products from '@/components/Products'
import Continue from '@/components/Continue'
import axios from "axios";

export default {
  name: "TheBooth",
  components: {
    Title,
    Information,
    Products,
    Continue,
  },
  methods: {
    deleteProductEvent(idProduct) {
      this.$store.dispatch('deleteProduct', {idProduct, booth: this.booths_index})
    },
    countOrderProductEvent(idProduct, action) {
      // {idProduct,booth:this.booths_index,count}
      let q = action === "increase" ? 1+ this.$store.state.dataCart[this.booths_index].products[idProduct].quantity : this.$store.state.dataCart[this.booths_index].products[idProduct].quantity - 1
      if (q > this.$store.state.dataCart[this.booths_index].products[idProduct].stock || q <= 0)return
      this.$store.dispatch('countOrder', {
        idProduct, booth: this.booths_index,
        count: q
      })
    }
  },
  data() {
    return {
      posts: null
    }
  },
  computed: {
    deleteProduct() {
      return this.Booths.products.length != 0
    }
  },
  mounted() {
    axios.get('https://run.mocky.io/v3/cdf4d9ab-64ab-4bce-b766-7ca8e068cb51')
        .then((response) => this.posts = response)
  },
  props: {
    Booths: {
      type: Object,
      required: true
    },
    booths_index: {
      type: String,
      required: true
    }
  }
}
</script>