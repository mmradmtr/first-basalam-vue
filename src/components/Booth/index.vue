<template>
  <div class="body">
    <Title v-if="deleteProduct" :Title="Booths.info"></Title>
    <Information v-if="deleteProduct" :info="Booths.info"></Information>
    <Products :products="products" v-for="(products, idx) in Booths.products" :key="idx"></Products>
    <Continue v-if="deleteProduct" :Booths="Booths"></Continue>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Information from '@/components/Information'
import Products from '@/components/Products'
import Continue from '@/components/Continue'
import axios from "axios";

export default {
  // name: "Products"
  components: {
    Title,
    Information,
    Products,
    Continue,
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
    }
  }
}
</script>

<style lang="scss" src="@/components/Booth/Booth.scss" scoped/>