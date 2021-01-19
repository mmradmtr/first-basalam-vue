<template>
  <div class="body">
    <div class="content">
      <div class="product">
        <div>
          <img :src="Products.img" alt="">
        </div>
        <div class="info">
          <div class="name"><span>{{ Products.name }}</span></div>
          <br>
          <div class="price"><span class="sale">{{ Products.price }}</span><span>{{ Products.sale }}<span
              class="text-bold space">تومان</span></span>
          </div>
          <div class="price sale"></div>
        </div>
      </div>
      <div class="tools">
        <div class="tools--second">
          <button type="submit" @mousedown="decrease()" @mouseup="cleartime()" @mouseleave="cleartime()"
                  class="btn Min">
            <img src="@/assets/Images/Content/min.svg" alt="submit"/>
          </button>
          <span class="tools--input">{{ input }}</span>
          <button type="submit" @mousedown="increase()" @mouseup="cleartime()" @mouseleave="cleartime()"
                  class="btn Add">
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
      input: 1,
      timer: null,
      delay: 150
    }
  },
  methods: {
    increase() {
      ++this.input
      --this.delay
      this.timer = setTimeout(() => {
        this.increase()
      }, this.delay)
    },
    decrease() {
      --this.input
      --this.delay
      this.timer = setTimeout(() => {
        this.decrease()
        this.input < 1 ? this.input = 1 : this.input;
      }, this.delay)
    },
    cleartime() {
      clearTimeout(this.timer)
      this.delay = 150
    },
    Delete() {

    }
  },
  props: {
    Products: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" src="@/components/Content/Content.scss" scoped/>