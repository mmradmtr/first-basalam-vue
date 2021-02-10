<template>
  <div class="body">
    <div class="content--second">
      <div class="free--info">
        <div>هورا ارسال از این غرفه برای شما <span style="font-weight: bold">رایگان شد</span></div>
      </div>
      <div class="sale--code" v-if="false">
        <span><img src="@/assets/Images/Continue/ticket.svg" alt="">ثبت کد تخفیف غرفه</span>
      </div>
      <div class="content--third">
        <div class="continue--buy">
          <span>ادامه خرید فقط از این غرفه</span>
        </div>
        <div class="content--third--tools">
          <div>
            <span>جمع مبلغ برای <span>{{ Booths.length }}</span> کالا</span>
          </div>
          <div class="content--third--price">
            <span class="text-bold">{{fMoney (priceSum)}} <span
                class="space"><img src="@/assets/Images/toman.svg" alt=""></span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  // name: "Products",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getProductCount', 'getProductPrice']),
    priceSum() {
      let p = 0;
      for (let i = 0; i < this.Booths.length; i++) {
        p += this.Booths[i].primaryPrice * this.Booths[i].quantity ;
      }
      return p
    }
  },
  props: {
    Booths: {
      type: Array,
      required: true
    },
  },
  methods: {
    /*    priceSum()
        {

        }*/
  }
}
</script>

<style lang="scss" src="@/components/Continue/Continue.scss" scoped/>