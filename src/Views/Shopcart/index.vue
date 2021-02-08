<template>
  <div class="body">
<!--    <Booth :Booths="BoothData" v-for="(BoothData,index) in allBooths.Booths" :key="index"/>-->
    <Booth :Booths="item" v-for="(item,index) in myData" :key="index"/>
    <Footer :data="myData"/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";
import axios from "axios";
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
    allBooths() {
       return this.$store.state;
    },
    myData() {
       return this.$store.state.dataCart;
    },
  },
  mounted() {
    axios.get(process.env.VUE_APP_BASE_URL_API).then((res) => {
      this.$store.dispatch("dataCart",res.data.vendors)
      console.log("1111111",res.data.vendors)
    })
  }
}
</script>

<style lang="scss" src="@/Views/Shopcart/Shopcart.scss" scoped/>