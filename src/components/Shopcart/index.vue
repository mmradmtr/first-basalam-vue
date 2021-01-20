<template>
  <div class="body">
    <Booth :Booths="Data" v-for="(Data,index) in data" :key="index"/>
    <Footer :data="data"/>
  </div>
</template>

<script>

import Booth from "@/components/Booth";
import Footer from "@/components/Footer";

export default {
  components: {
    Booth,
    Footer,
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
            from_: "سعادت شهر",
            pic: require('@/assets/Images/information/avatar1.png')
          },
          sale_status: true,
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
        },
        Booth2: {
          Title: {
            title: "محصولات غذایی ولیک"
          },
          Information: {
            name: "سارا خوشدل",
            from_: "بوشهر",
            pic: require('@/assets/Images/information/avatar2.png')
          },
          sale_status: false,
          Products: {
            Product1: {
              name: "سوسیس آلمانی پنیری",
              price: "۸۵,۰۰۰",
              sale: "۷۵,۰۰۰",
              img: require('@/assets/Images/Content/sosis_almani_paniri_pic.svg')
            },
          }
        }
      }
    }
  },
}
</script>

<style lang="scss" src="@/components/Shopcart/Shopcart.scss" scoped/>