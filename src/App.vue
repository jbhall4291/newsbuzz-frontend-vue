<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <!-- <header class="sticky top-0 left-0 right-0 bg-white flex items-center">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
<Header/>

  <RouterView />
  

  
</template>

<style scoped>


</style>
