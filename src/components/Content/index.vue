<template>
  <div class="content">
    <div>
      <h1>
        <!--        {{getSalePrice}}-->
      </h1>
    </div>
    <div class="product">
      <div>
        <img :src="Products.img" alt="">
      </div>
      <div class="info">
        <div class="name"><span>{{ Products.name }}</span></div>
        <br>
        <div class="price"><span class="sale">{{ Products.price }}</span><span>{{ Products.sale }}<span
            class="space">تومان</span></span>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="second">
        <button type="submit" @mousedown="decrease" @mouseup="cleartime" @mouseleave="cleartime"
                class="btn">
          <img src="@/assets/Images/Content/min.svg" alt="submit"/>
        </button>
        <span class="input">{{ Products.quantity }}</span>
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
        this.$store.dispatch('increaseProduct', this.Products.id);
        this.increase()
        --this.delay
      }, this.delay)
    },
    decrease() {
      this.timer = setTimeout(() => {
        this.$store.dispatch('decreaseProduct', this.Products.id);
        this.decrease()
        --this.delay
      }, this.delay)
    },
    deleteProduct() {
      this.$store.dispatch('deleteProduct', this.Products.id)
    },
    cleartime() {
      clearTimeout(this.timer)
      this.delay = 120;
    }
  },
  props: {
    Products: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Content/Content.scss" scoped/>