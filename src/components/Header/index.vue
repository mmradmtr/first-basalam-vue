<template>
  <div class="body">
    <div class="header">
      <div class="first">
        <img class="basalam" src="@/assets/Images/header/Logo.svg" style="margin-right: -5px" alt="">
        <img class="basalam" src="@/assets/Images/header/Type.svg" alt="">
        <img class="basalam" src="@/assets/Images/header/arrow.svg" alt="">
      </div>

      <div class="second">
        <button>فروش در باسلام</button>
        <img src="@/assets/Images/header/bag.svg" alt="">
        <span class="numberCart">{{ getAllProducts }}</span>
      </div>
    </div>

    <div class="search">
      <input type="text" placeholder="جستجو در صدها هزار محصول خانگی و محلی ...">
      <img class="magnifier--search" src="@/assets/Images/header/Magnifier.svg" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      allProducts: 0
    }
  },
  computed: {
    ...mapGetters(['getAllProducts'])
  }
}
</script>

<style lang="scss" src="@/components/Header/Header.scss" scoped/>