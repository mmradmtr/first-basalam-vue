<template>
  <div class="body">
    <div class="first">از غرفه: <span class="title">{{ Title.title }}</span></div>
  </div>
</template>

<script>
export default {
  // name: "index"
  data() {
    return {}
  },
  props: {
    Title: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Title/Title.scss" scoped>

</style>