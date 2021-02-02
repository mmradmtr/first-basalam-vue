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

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
  },
}

String.prototype.toPersianDigits = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w]
  });
}


if (window.scrollY >= 6) {
  alert(5)
}

</script>

<style lang="scss" src="@/assets/Styles/_app.scss"/>