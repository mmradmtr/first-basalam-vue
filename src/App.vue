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
import axios from'axios';
export default {
  name: 'App',
  components: {
    Header,
    Navbar,

  },
  created() {
    axios.get('https://run.mocky.io/v3/cdf4d9ab-64ab-4bce-b766-7ca8e068cb51').then((res)=> console.log(res.data))
  }
}
//
// String.prototype.toPersianDigits = function () {
//   var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
//   return this.replace(/[0-9]/g, function (w) {
//     return id[+w]
//   });
// }

</script>

<style lang="scss" src="@/assets/Styles/_app.scss"/>