<!-- <template>
  <div id="app">
    <client-only> </client-only>
    <AppHeaderVue />
    <Nuxt />
  </div>
</template> -->
<template>
  <div class="main-app-container">
    <client-only> </client-only>
    <AppHeaderVue />
    <Nuxt class="page-container" />
    <AppFooter />
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
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto+Mono:ital,wght@1,100&family=Roboto:ital,wght@0,400;0,500;0,900;1,300;1,400;1,500&display=swap");
.container {
  max-width: 1300px;
  margin: auto;
  /* padding: 0 2rem; */
}
.main-app-container {
  height: 100%;
  margin-top: 4rem;
}
.page-container {
  min-height: calc(100vh - 138px);
  padding: 0;
}
</style>
