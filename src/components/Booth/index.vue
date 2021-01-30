<template>
  <div class="body">
    <Title v-if="Booths.info.isProduct" :Title="Booths.info"></Title>
    <Information v-if="Booths.info.isProduct" :info="Booths.info"></Information>
    <Content :Products="Products" v-for="(Products, idx) in Booths.Products" :key="idx"></Content>
    <Continue v-if="Booths.info.isProduct" :Booths="Booths"></Continue>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Information from '@/components/Information'
import Content from '@/components/Content'
import Continue from '@/components/Continue'

export default {
  // name: "Content"
  components: {
    Title,
    Information,
    Content,
    Continue,
  },
  // created() {
  //   console.log(this.Booths)
  // },
  props: {
    Booths: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Booth/Booth.scss" scoped/>