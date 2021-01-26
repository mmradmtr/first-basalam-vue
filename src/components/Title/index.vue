<template>
    <div class="first">از غرفه: <span>{{ Title.title }}</span></div>
</template>

<script>
export default {
  props: {
    Title: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Title/Title.scss" scoped />