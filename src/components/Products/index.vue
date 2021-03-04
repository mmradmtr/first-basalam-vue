<template>
  <div class="content">
    <div class="product">
      <div>
        <img class="product_image" :src="typeof products.image === 'string' ? products.image : products.image.url" alt="">
      </div>
      <div class="info">
        <div class="name"><span>{{ products.name }}</span></div>
        <br>
        <div class="price"><span class="sale">{{ fMoney(products.price * selfQuantity)}}</span><div class="toman">{{ fMoney(products.primaryPrice *selfQuantity)}}
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
        <span class="input">{{ selfQuantity }}</span>
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

export default {
  data() {
    return {
      delay: 120,
      timer: null,
    }
  },
  computed: {
    selfQuantity()
    {
      return this.$store.state.dataCart[this.boothIndex].products[this.product_index].quantity
    }
  },
  methods: {
    increase() {
      this.$emit("countOrder",this.product_index,"increase")
    },
    decrease() {
      this.$emit("countOrder",this.product_index,"decrease")
    },
    deleteProduct() {
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