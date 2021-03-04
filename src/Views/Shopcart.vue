<template>
  <div class="body">
    <Booth :Booths="item" :booths_index="item.id" v-for="item in myData" :key="item.id"/>
    <Footer :data="myData"/>
  </div>
</template>

<script>
import Booth from "@/components/Booth";
import Footer from "@/components/Footer";

export default {
  name: "TheShopcart",
  components: {
    Booth,
    Footer,
  },
  computed: {
    myData() {
       return this.$store.state.dataCart;
    },
  }
}
</script>