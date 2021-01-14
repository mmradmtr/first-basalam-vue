<template>
  <div class="body">
    <div class="content" v-for="Booth in Booths" :key="Booth">
      <div class="product">
        <div>
          <img src="@/assets/Images/Content/sosis_almani_paniri_pic.svg" alt="">
        </div>
        <div class="info">
          <div class="name"><span>{{ Booth.name }}</span></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="price"><span class="sale">{{ Booth.price }}</span><span>{{ Booth.sale }}<span
              class="text-bold">تومان</span></span>
          </div>
          <div class="price sale"></div>
        </div>
      </div>
      <div class="tools">
        <div class="tools--second">
          <button type="submit" class="btn Min">
            <img src="@/assets/Images/Content/min.svg" alt="submit"/>
          </button>
          <input class="tools--input" value="3" type="text"/>
          <button type="submit" class="btn Add">
            <img src="@/assets/Images/Content/plus.svg" alt="submit"/>
          </button>
          <button type="submit" class="btn trash">
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
  components: {},
  data() {
    return {
      Booths: [
        {
          name: "سوسیس آلمانی پنیری",
          price: "۸۵,۰۰۰",
          sale: "۷۵,۰۰۰",
          img: ""
        },

      ]
    }
  }
}
</script>

<style lang="scss" src="@/components/Content/Content.scss" scoped/>