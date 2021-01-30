<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
  },
}
</script>

<style lang="scss" src="@/assets/Styles/_app.scss"/>