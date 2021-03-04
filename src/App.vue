<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,

  },
  mounted() {
    axios.get(process.env.VUE_APP_BASE_URL_API).then((res) => {
      this.$store.dispatch("dataCart",{data:res.data.vendors,firstLoad:true})
    })
  }
}

</script>
<style>
@font-face {
  font-family: 'IRANSansWeb';
  src: url("assets/fonts/newIran/IRANSans(FaNum)_Light.ttf") format("truetype");
  font-style: normal;
}
body{
  font-family: "IRANSansWeb"!important;
}
</style>
<style lang="scss" src="@/assets/Styles/_app.scss"/>