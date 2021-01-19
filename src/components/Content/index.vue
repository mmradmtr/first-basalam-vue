<template>
  <div class="body">
<!--    <div class="content" >-->
    <div class="content">
      <div class="product">
        <div>
          <img :src="Product.img" alt="">
        </div>
        <div class="info">
          <div class="name"><span>{{ Product.name }}</span></div><br>
          <div class="price"><span class="sale">{{ Product.price }}</span><span>{{ Product.sale }}<span
              class="text-bold space">تومان</span></span>
          </div>
          <div class="price sale"></div>
        </div>
      </div>
      <div class="tools">
        <div class="tools--second">
          <button type="submit" class="btn Min">
            <img src="@/assets/Images/Content/min.svg" alt="submit"/>
          </button>
          <span class="tools--input" >{{ input }}</span>
          <button type="submit" @mousedown="increase()" @mouseup="cleartime()" class="btn Add">
            <img src="@/assets/Images/Content/plus.svg" alt="submit"/>
          </button>
          <button type="submit" class="btn trash" @click="Delete()">
            <img src="@/assets/Images/Content/Trash.svg" alt="submit"/>
          </button>
        </div>
        <div class="buy-list text-small"><a href="#">ذخیره در لیست خرید بعدی</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Content"
  data() {
    return {
      input: 0,
      timer: null,
      delay: 0
    }
  },
  methods: {
    increase() {
      console.log(this.input)
        this.timer = setTimeout(() => {
          ++this.input;
        }, 120)
    },
    cleartime() {

    },
    Delete() {

    }
  },
  props: {
    Product: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" src="@/components/Content/Content.scss" scoped/>