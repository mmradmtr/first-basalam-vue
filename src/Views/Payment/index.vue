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
    <div class="choose_payment">
      <div>
        انتخاب درگاه برداخت
      </div>
      <div>
        <div class="comment">
          <div class="text">
            <label for="One" class="container">
              <input type="radio" name="radioComment" checked="checked" id="One"/>
              <span class="checkmark"></span>
              <span class="text">بانک سامان</span>
            </label>
          </div>
          <div class="text">
            <label for="Two" class="container">
              <input type="radio" name="radioComment" id="Two"/>
              <span class="checkmark"></span>
              <span class="text">بانک باسارگاد</span>
            </label>
          </div>
          <div class="text">
            <label for="Three" class="container">
              <input type="radio" name="radioComment" id="Three"/>
              <span class="checkmark"></span>
              <span class="text">آسان برداخت</span>
            </label>
          </div>
        </div>
      </div>
      <div class="bank">

      </div>
    </div>
    <FooterPayment></FooterPayment>
  </div>
</template>

<script>
import FooterPayment from '@/components/FooterPayment'


export default {
  name: "Payment",
  components: {
    FooterPayment
  },
  data() {
    return {}
  },
}

</script>

<style lang="scss" src="@/Views/Payment/Payment.scss" scoped/>