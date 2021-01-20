<template>
  <div class="body">
    <Booth :Booths="BoothData" v-for="(BoothData,index) in dataPost" :key="index"/>
    <Footer :data="dataPost"/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";
import posts from "@/posts.json";

export default {
  components: {
    Booth,
    Footer,
  },
  data() {
    return {
      dataPost: posts
    }
  },
}
</script>

<style lang="scss" src="@/components/Shopcart/Shopcart.scss" scoped/>