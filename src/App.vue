<template>
  <div id="app">
      <Header/>
      <Navbar/>
      <Title />
      <Information />
      <Content/>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Title from '@/components/Title'
import Information from '@/components/Information'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Content,
    Title,
    Information,
    Footer
  }
}
</script>

<style>
@import url('assets/fonts/fontiran.css');

@media screen and (max-width: 576px) {
  * {
    font-family: IRANSans;
    margin: 0;
    padding: 0;
  }

  *:not(#app) {
    background-color: white;
  }

  #app {
    min-width: 320px !important;
    font-weight: 300;
    font-size: 14px;
    direction: rtl;
    padding: 0;
    background-color: #eee;
    z-index: -1;
    margin: 0 0 100px 0;
  }

  .text-bold {
    font-weight: bold;
  }

  .text-small {
    font-size: 0.8em;
  }
}
</style>
