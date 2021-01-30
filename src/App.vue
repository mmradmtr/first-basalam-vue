<template>
  <div id="app">
    <Header/>
    <Navbar/>
<!--    <Shopcart></Shopcart>-->
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
// import Shopcart from '@/components/Shopcart'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    // Shopcart
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" src="@/assets/Styles/_app.scss"/>