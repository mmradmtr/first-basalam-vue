<template>
  <div class="body">
    <div class="address">
      <div class="sendAddress">
        <router-link to="/">
          <img src="@/assets/Images/BasketAddress/Icon.svg" alt=""/>
        </router-link>
        <div class="send">آدرس ارسال</div>
      </div>
      <div class="newAddress">
        <img class="plus" src="@/assets/Images/BasketAddress/plus.svg" alt="">
        <div class="new">آدرس جدید</div>
      </div>
    </div>
    <div class="comment">
      <div class="title">
        <div>به: <span>مهدی خدادادی</span></div>
        <img src="@/assets/Images/edit/edit.svg" alt="">
      </div>
      <div class="text">
        <label for="One" class="container">
          <input type="radio" name="radioComment" checked="checked" id="One"/>
          <span class="checkmark"></span>
          <span class="text"> قم بردیسان خیابان دانشگاه بعد از میدان علوم رو به روی بایانه ساختمان شرکت توسعه و تدبیر جوامع
        سلام</span>
          <br>
        </label>
      </div>
      <div>
        <div class="title">
          <div>به: <span>مهدی خدادادی</span></div>
          <img src="@/assets/Images/edit/edit.svg" alt="">
        </div>
        <div class="text">
          <label for="Two" class="container">
            <input type="radio" name="radioComment" id="Two"/>
            <span class="checkmark"></span>
            <span class="text"> قم بردیسان خیابان دانشگاه بعد از میدان علوم رو به روی بایانه ساختمان شرکت توسعه و تدبیر جوامع
        سلام</span>
            <br>
          </label>
        </div>
      </div>
    </div>
    <FooterBasket></FooterBasket>
  </div>

</template>

<script>
// import Comment from '@/components/Comment'
import FooterBasket from '@/components/FooterBasket'

export default {
  name: "BasketAddress",
  components: {
    // Comment,
    FooterBasket
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" src="@/Views/BasketAddress/BasketAddress.scss" scoped/>