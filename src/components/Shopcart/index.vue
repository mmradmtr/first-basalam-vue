<template>
  <div class="body">
    <Booth :Booths="BoothData" v-for="(BoothData,index) in allBooths" :key="index"/>
    <Footer :Footer="allBooths"/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";
// import { mapGetters } from 'vuex'

export default {
  components: {
    Booth,
    Footer,
  },
  data() {
    return {

    }
  },
  computed: {
    allBooths() {
      return this.$store.state;
    },
  }
}
</script>

<style lang="scss" src="@/components/Shopcart/Shopcart.scss" scoped/>