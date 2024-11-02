<template>
  <NavBar />
  <div class="h-20 w-full"></div>
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import NavBar from "./components/navBar.vue";
import Footer from "./components/footer.vue";
</script>