<template>
  <div class="body shadow">
    <div class="content">
      <div class="continue--buy">
        <router-link tag="span" to="/BasketAddress">
        <span class="buy text-bold" >ادامه خرید از <span>{{ footerContinueBuy }}</span> غرفه</span></router-link>
      </div>
      <div class="content--third--tools">
        <div class="content--third--2product">
          <span>مبلغ قابل پرداخت <span>{{ footerContinueBuy }}</span> غرفه</span>
        </div>
        <div class="price">
          <span class="text-bold">{{ footerTotalPrice }} <span
              class="space"><img src="@/assets/Images/toman.svg" alt=""></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['footerContinueBuy', 'footerTotalPrice'])
  },
  // nextpage(){
    // return this.$router.push({name:'BasketAddress'})
  // }
  // props: {
  //   Footer: {
  //     type: Array,
  //     required: true
  //   }
  // },
}

</script>

<style lang="scss" src="@/components/Footer/Footer.scss" scoped/>

