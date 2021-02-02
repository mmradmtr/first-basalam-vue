<template>
  <div class="body">
    <Booth :Booths="BoothData" v-for="(BoothData,index) in allBooths.Booths" :key="index"/>
    <Footer />
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

<style lang="scss" src="@/Views/Shopcart/Shopcart.scss" scoped/>