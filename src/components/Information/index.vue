<template>
  <div class="body">
    <div class="profile">
      <div class="avatar">
        <img src="@/assets/Images/information/avatar1.png" alt="">
      </div>
      <div class="title">
        <span>{{ Information.name }}</span><br>
        <img src="@/assets/Images/information/location_icon.svg" alt="">
        <span class="text-small-px">{{ Information.from_ }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "index"
  // data() {
  //   return {
  //     name: '',
  //     from_: 'از سعادت شهر'
  //   }
  // },
  props: {
    Information: {
      type: Object
    }
  }
}
</script>

<style lang="scss" src="@/components/Information/Information.scss" scoped />