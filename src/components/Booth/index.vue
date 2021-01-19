<template>
  <div class="body">
    <Title :Title="Booths.Title"></Title>
    <Information :Information="Booths.Information"></Information>
    <Content :Products="Products" v-for="(Products, idx) in Booths.Products" :key="idx"></Content>
<!--    <Continue :Products="Booths.Products"></Continue>-->
  </div>
</template>

<script>
import Title from '@/components/Title'
import Information from '@/components/Information'
import Content from '@/components/Content'
// import Continue from '@/components/Continue'

export default {
  // name: "Content"
  components: {
    Title,
    Information,
    Content,
    // Continue,
  },
  props: {
    Booths: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Booth/Booth.scss" scoped/>