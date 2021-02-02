<template>
  <div class="body">
    <div class="content--second">
      <div class="free--info">
        <div>هورا ارسال از این غرفه برای شما <span style="font-weight: bold">رایگان شد</span></div>
      </div>
      <div class="sale--code" v-if="Booths.sale_status === true">
        <span><img src="@/assets/Images/Continue/ticket.svg" alt="">ثبت کد تخفیف غرفه</span>
      </div>
      <div class="content--third">
        <div class="continue--buy">
          <span>ادامه خرید فقط از این غرفه</span>
        </div>
        <div class="content--third--tools">
          <div>
            <span>جمع مبلغ برای <span>{{ Booths.info.productsCount }}</span> کالا</span>
          </div>
          <div class="content--third--price">
            <span class="text-bold">{{ Booths.info.factorPrice }} تومان</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // name: "Products"
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getProductCount', 'getProductPrice'])
  },
  props: {
    Booths: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" src="@/components/Continue/Continue.scss" scoped/>