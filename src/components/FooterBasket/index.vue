<template>
  <div class="body shadow">
    <div class="content">
      <div class="continue--buy">
        <router-link tag="span" to="/BasketAddress">
          <span class="buy">ادامه فرایند خرید</span>
        </router-link>
      </div>
      <div class="content--third--tools">
        <div>
          <span>مبلغ قابل برداخت</span>
        </div>
        <div class="price">
          <span class="text-bold">{{ footerTotalPrice }} تومان</span>
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
}

</script>

<style lang="scss" src="@/components/FooterBasket/FooterBasket.scss" scoped/>

