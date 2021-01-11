<template>
  <div class="body">
    <ul class="menu">
      <li><a href="#" @click="active" class="active">سبد خرید</a></li>
      <li><a href="#" @click="active" class="">لیست خرید بعدی</a></li>
    </ul>
    <div class="line">

      <div class="inline">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Navbar"
  data() {
    return {
      // class: 'active',
    }
  },
  methods: {
    active() {

      // console.log();
      // this.setAttribute('class', 'active');
    },
  }
}

// - End - Switch Tab Script
</script>

<style lang="scss" src="@/components/Navbar/Navbar.scss" scoped/>