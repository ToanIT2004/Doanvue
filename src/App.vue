<template>
  <header-vue/>
  <router-view></router-view>
  <home-vue/>
  <footer-vue/>
</template>

<script>
import FooterVue from './components/Footer.vue'
import HeaderVue from './components/Header.vue'
// import HomeVue from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
    // HomeVue
  }
}
</script>

<style>

</style>
