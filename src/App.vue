<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import NavBar from "./components/navBar.vue";
import Footer from "./components/footer.vue";
</script>