<template>
  <div class="content">
    <div class="product">
      <div>
        <img class="product_image" :src="typeof products.image === 'string' ? products.image : products.image.url" alt="">
      </div>
      <div class="info">
        <div class="name"><span>{{ products.name }}</span></div>
        <p class="name">{{products.quantity}} عدد</p>
        <br>
        <div class="price"><span class="sale">{{fMoney( products.price * products.quantity)}}</span><div class="toman">{{fMoney(products.primaryPrice *products.quantity)}}
          <img class="" src="@/assets/Images/toman.svg" alt=""></div>
        </div>
      </div>
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
    myData() {
      return this.$store.state.dataCart;
    },
    // ...mapGetters(['getSalePrice'])
  },
  methods: {
    increase() {
      this.$emit("countOrder",this.product_index,"increase")
      /*this.timer = setTimeout(() => {
        console.log("hi")
        this.$emit("countOrder",this.product_index,"increase")
        // this.$store.dispatch('increaseProduct', this.products.id);
        this.increase()
        --this.delay
      }, this.delay)*/
    },
    decrease() {
      this.$emit("countOrder",this.product_index,"decrease")
      /*this.timer = setTimeout(() => {
        this.$store.dispatch('decreaseProduct', this.products.id);
        this.decrease()
        --this.delay
      }, this.delay)*/
    },
    deleteProduct() {
      // this.$store.dispatch('deleteProduct', this.products.id)
      this.$emit("deleteProduct",this.product_index)
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
    },
    product_index: {
      type: Number,
      required: true
    },
    boothIndex: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" src="@/components/Products/Products.scss" scoped/>