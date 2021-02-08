<template>
  <div class="body">
    <div class="profile">
      <div class="avatar">
        <img :src="info.logo.url" alt="">
      </div>
      <div class="title">
        <span>{{ info.owner }}</span><br>
        <img src="@/assets/Images/information/location_icon.svg" alt="">
        <span class="text-light">از {{ info.city }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Information/Information.scss" scoped />