<template>
  <div class="body">
    <Title v-if="deleteProduct"  :Title="Booths.info"></Title>
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

    }
  },
  computed: {
    deleteProduct() {
      return this.Booths.products.length!=0
    }
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