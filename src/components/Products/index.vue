<template>
  <div class="content">
    <div class="product">
      <div>
        <img class="product_image" :src="typeof products.image === 'string' ? products.image : products.image.url" alt="">
      </div>
      <div class="info">
        <div class="name"><span>{{ products.name }}</span></div>
        <br>
        <div class="price"><span class="sale">{{ products.price }}</span><div class="toman">{{ products.primaryPrice }}
          <img class="" src="@/assets/Images/toman.svg" alt=""></div>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="second">
        <button type="submit" @mousedown="decrease" @mouseup="cleartime" @mouseleave="cleartime"
                class="btn">
          <img src="@/assets/Images/Content/min.svg" alt="submit"/>
        </button>
        <span class="input">{{ products.stock }}</span>
        <button type="submit" @mousedown="increase" @mouseup="cleartime" @mouseleave="cleartime"
                class="btn">
          <img src="@/assets/Images/Content/plus.svg" alt="submit"/>
        </button>
        <button type="submit" class="btn trash" @click="deleteProduct">
          <img src="@/assets/Images/Content/Trash.svg" alt="submit"/>
        </button>
      </div>
      <div class="text-small"><a href="#">ذخیره در لیست خرید بعدی</a></div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      delay: 120,
      timer: null,
    }
  },
  computed: {
    // ...mapGetters(['getSalePrice'])
  },
  methods: {
    increase() {
      this.timer = setTimeout(() => {
        this.$store.dispatch('increaseProduct', this.products.id);
        this.increase()
        --this.delay
      }, this.delay)
    },
    decrease() {
      this.timer = setTimeout(() => {
        this.$store.dispatch('decreaseProduct', this.products.id);
        this.decrease()
        --this.delay
      }, this.delay)
    },
    deleteProduct() {
      this.$store.dispatch('deleteProduct', this.products.id)
    },
    cleartime() {
      clearTimeout(this.timer)
      this.delay = 120;
    }
  },
  props: {
    products: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Products/Products.scss" scoped/>