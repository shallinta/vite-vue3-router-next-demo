<template>
  <Header></Header>
  <main class="container main">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './common/components/header/Header.vue';
import Footer from './common/components/footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style src="./common/styles/index.css"></style>
<style lang="scss" src="./common/materialize/materialize.scss"></style>