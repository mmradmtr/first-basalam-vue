<template>
  <div class="body">
    <ul>
      <li><a href="#" @click="active('Shopcart')" :class="ShopcartStatus">
        <router-link to="/Shopcart">سبد خرید</router-link>
      </a></li>
      <li><a href="#" @click="active('NextShoppingList')" :class="NextShoppingListStatus">
        <router-link to="/NextShoppingList">لیست خرید بعدی</router-link>
      </a></li>
    </ul>
    <div class="line">
      <div class="inline" :style="inline"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      ShopcartStatus: 'active right0',
      NextShoppingListStatus: 'deactive',
      inline: 'right: 0'
    }
  },
  methods: {
    active(nav) {
      if (nav === 'Shopcart') {
        this.ShopcartStatus = 'active';
        this.NextShoppingListStatus = 'deactive';
        this.inline = 'right: 0';
      } else if (nav === 'NextShoppingList') {
        this.ShopcartStatus = 'deactive';
        this.NextShoppingListStatus = 'active';
        this.inline = 'left: 0';
      }
    }
  }
}
</script>

<style lang="scss" src="@/components/Navbar/Navbar.scss" scoped/>