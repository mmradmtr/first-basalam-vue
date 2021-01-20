<template>
  <div class="body">
    <ul>
      <li><a href="#" @click="active" class="active">سبد خرید</a></li>
      <li><a href="#" @click="active" class="">لیست خرید بعدی</a></li>
    </ul>
    <div class="line">
      <div class="inline"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    active() {

    }
  }
}
</script>

<style lang="scss" src="@/components/Navbar/Navbar.scss" scoped/>