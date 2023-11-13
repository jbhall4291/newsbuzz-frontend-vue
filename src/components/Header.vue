<template>
  <div class="bg-white sticky top-0 left-0 right-0 py-1 px-6  shadow-sm flex justify-between">

    <a href="/" class="flex flex-row items-center	gap-2 ">
      <img src="@/assets/images/logo.png" class="w-12 h-12" />
      <p class="font-luckiest-guy text-5xl">NewsBuzz</p>
    </a>
    <form>home dropdown

      <select>options</select>

    </form>
    <form @submit.prevent="handleSearch">
      <input v-model="searchTerm" class="bg-purple-300 w-[750px] py-2 px-6 border-black border-2 rounded-3xl" placeholder="Search Newsbuzz">
    </form>
    <div>five icons</div>
    <div>user profile</div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchTerm = ref("")

const handleSearch = () => {  
  alert(`Searching for: ${searchTerm.value}`);
}

</script>
