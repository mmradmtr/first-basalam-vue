<template>
    <div class="first">از غرفه: <span>{{ Title }}</span></div>
</template>

<script>
export default {
  props: {
    Title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="@/components/Title/Title.scss" scoped />