<template>
  <div class="body">
    <Booth :Booths="Data" v-for="(Data,index) in data" :key="index"/>
    <Total/>
    <Footer/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";
import Total from "@/components/Total";
// import Data from "@/../Data.json"

export default {
  components: {
    Booth,
    Footer,
    Total
  },
  data() {
    return {
      data: {
        Booth: {
          Title: {
            title: "خوشمزه های خاتون"
          },
          Information: {
            name: "مینو هنگام",
            from_: "از سعادت شهر"
          },
          Products: {
            Product1: {
              name: "سوسیس آلمانی پنیری",
              price: "۸۵,۰۰۰",
              sale: "۷۵,۰۰۰",
              img: require('@/assets/Images/Content/sosis_almani_paniri_pic.svg')
            },
            Product2: {
              name: "کالباس پسته",
              price: "۳۵,۰۰۰",
              sale: "۱۵,۰۰۰",
              img: require('@/assets/Images/Content/kalbas_peste_pic.svg')
            }
          }
        }
      }
    }
  },
}
</script>

<style lang="scss" src="@/components/Shopcart/Shopcart.scss" scoped/>