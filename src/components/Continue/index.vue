<template>
  <div class="body">
    <div class="content--second">
      <div class="free--info">
        <span>هورا ارسال از این غرفه برای شما <span style="font-weight: bold">رایگان شد</span></span>
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
            <span>جمع مبلغ برای <span>{{ Object.keys(Booths.Products).length }}</span> کالا</span>
          </div>
          <div class="content--third--price">
            <span class="text-bold">۷۵۰۰۰ تومان</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Content"
  data() {
    return {
      // sale_status: true

    }
  },
  props: {
    Booths: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Continue/Continue.scss" scoped/>