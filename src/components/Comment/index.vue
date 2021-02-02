<template>
  <div class="body">
    <div class="info">
      <div class="title">
        به: <span>مهدی خدادادی</span>
      </div>
      <img src="@/assets/Images/edit/edit.svg" alt="">
    </div>
    <div class="text">
      <label for="One">
        <input type="radio" id="One" value="One" v-model="picked"/>
        <span> قم بردیسان خیابان دانشگاه بعد از میدان علوم رو به روی بایانه ساختمان شرکت توسعه و تدبیر جوامع
        سلام</span>
      </label>
      <br>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      picked: false,
    }
  },
  computed: {},
}
</script>

<style lang="scss" src="@/components/Comment/Comment.scss" scoped/>