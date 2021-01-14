<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <Title/>
    <Information/>
    <Content/>
    <Continue/>
    <Title/>
    <Information/>
    <Content/>
    <Total />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Title from '@/components/Title'
import Information from '@/components/Information'
import Continue from '@/components/Continue'
import Total from '@/components/Total'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Content,
    Title,
    Information,
    Continue,
    Footer,
    Total
  }
}
</script>

<style lang="scss" src="@/assets/Styles/_app.scss" />