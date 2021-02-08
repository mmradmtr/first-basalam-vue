<template>
  <div v-if="vendors" class="body">
    <!--  <div>-->
    <!--    <Booth :Booths="BoothData" v-for="(BoothData,index) in posts.data.vendors" :key="index"/>-->
    <!--    <Footer/>-->
  </div>
</template>

<script>

// import Booth from "@/components/Booth";
// import Footer from "@/components/Footer";
import {mapState} from 'vuex'

export default {
  name: "Shopcart",
  components: {
    // Booth,
    // Footer,
  },
  data() {
    return {
      // posts: null,
    }
  },
  computed: {
    ...mapState('vendors', ['vendors'])
  },
  created() {
    this.$store.dispatch('vendors/loadVendors')
    console.log(this.vendors)
  }
}
</script>

<style lang="scss" src="@/Views/Shopcart/Shopcart.scss" scoped/>