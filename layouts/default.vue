<template>
  <div id="app">
    <client-only> </client-only>
    <AppHeaderVue />
    <Nuxt />
  </div>
</template>

<script>
import AppHeaderVue from "../components/views/AppHeader.vue";

export default {
  components: {
    AppHeaderVue,
  },
};
</script>

<style>
.container {
  max-width: 1300px;
  margin: auto;
  /* padding: 0 2rem; */
}
</style>