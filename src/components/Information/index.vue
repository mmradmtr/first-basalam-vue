<template>
  <div class="body">
    <div class="profile">
      <div class="avatar">
        <img :src="Information.pic" alt="">
      </div>
      <div class="title">
        <span>{{ Information.name }}</span><br>
        <img src="@/assets/Images/information/location_icon.svg" alt="">
        <span class="text-light">از {{ Information.from_ }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Information: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Information/Information.scss" scoped />