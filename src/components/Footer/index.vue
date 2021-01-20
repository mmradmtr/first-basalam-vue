<template>
  <div class="body">
    <div class="content">
      <div class="continue--buy">
        <span class="buy text-bold">ادامه خرید از <span>{{ Object.keys(data).length }}</span> غرفه</span>
      </div>
      <div class="content--third--tools">
        <div class="content--third--2product">
          <span>مبلغ قابل پرداخت <span>{{ Object.keys(data).length }}</span> قرفه</span>
        </div>
        <div class="price">
          <span class="text-bold">۷۵۰۰۰ تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss" src="@/components/Footer/Footer.scss" scoped/>

