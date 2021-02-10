<template>
  <div class="body">
<!--    <Booth :Booths="BoothData" v-for="(BoothData,index) in allBooths.Booths" :key="index"/>-->
    <Booth :Booths="item" :booths_index="index" v-for="(item,index) in myData" :key="index"/>
    <Footer :data="myData"/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";
// import axios from "axios";
// import { mapGetters } from 'vuex'

export default {
  components: {
    Booth,
    Footer,
  },
  data() {
    return {}
  },
  computed: {
    myData() {
       return this.$store.state.dataCart;
    },
  }/*,
  mounted() {

  }*/
}
</script>

<style lang="scss" src="@/Views/Shopcart/Shopcart.scss" scoped/>