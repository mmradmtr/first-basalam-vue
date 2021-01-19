<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <Shopcart></Shopcart>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Shopcart from '@/components/Shopcart'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Shopcart
  }
}
</script>

<style lang="scss" src="@/assets/Styles/_app.scss"/>