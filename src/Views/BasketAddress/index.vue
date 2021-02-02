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
    <Comment></Comment>
    <Comment></Comment>
    <FooterBasket></FooterBasket>
  </div>

</template>

<script>
import Comment from '@/components/Comment'
import FooterBasket from '@/components/FooterBasket'

export default {
  components: {
    Comment,
    FooterBasket
  },
  data() {
    return {

    }
  },
  computed: {}
}
</script>

<style lang="scss" src="@/Views/BasketAddress/BasketAddress.scss" scoped/>