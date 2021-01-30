<template>
  <div class="body">
    <div class="content">
      <div class="continue--buy">
        <span class="buy text-bold">ادامه خرید از <span>{{ footerContinueBuy }}</span> غرفه</span>
      </div>
      <div class="content--third--tools">
        <div class="content--third--2product">
          <span>مبلغ قابل پرداخت <span>{{ footerContinueBuy }}</span> قرفه</span>
        </div>
        <div class="price">
          <span class="text-bold">{{ footerTotalPrice }} تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['footerContinueBuy','footerTotalPrice'])
  },
  props: {
    Footer: {
      type: Array,
      required: true
    }
  },
}

</script>

<style lang="scss" src="@/components/Footer/Footer.scss" scoped/>

