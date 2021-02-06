<template>
  <div>
    <div class="address">
      <div class="sendAddress">
        <img src="@/assets/Images/BasketAddress/Icon.svg" alt=""/>
        <div class="send">برداخت</div>
      </div>
    </div>
    <div class="discount">
      <div class="discount_if">اگر کد تخفیف دارید وارد کنید</div>
      <div class="discount_box">
        <div class="discount_code"><input placeholder="کد تخفیف" type="text"></div>
        <div class="confirm">
          تایید
        </div>
      </div>
      <div class="use_credit">
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <div class="use">استفاده از اعتبار</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Payment",
  data() {
    return {}
  },
}

</script>

<style lang="scss" src="@/Views/Payment/Payment.scss" scoped/>