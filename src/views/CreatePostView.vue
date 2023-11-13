<template>
  <div class="flex p-6  bg-[#dae0e6] justify-center">
    <p>
      *** create a post page ***
    </p>
    <p>
      this will create a new Post from the current user: 
      <b>{{ appStore.loggedInUser }}</b>

    </p>

    <!-- <div class="flex flex-col  w-[840px] lg:w-[640px] gap-4">
        <div class="bg-white p-4 w-full border-[#cccccc] border-[1px] rounded-md">COMPONENT PLACEHOLDER Create post</div>
        <div class="bg-white p-4  border-[#cccccc] border-[1px] rounded-md">COMPONENT PLACEHOLDER icons for best, hot, new,
          top sorting</div>
  
        <div v-if="articles">
          <ol class="gap-4  flex flex-col justify-center items-center mt-1 ">
            <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
          </ol>
        </div>
        <div v-else>
          <p class="bg-black text-white">Loading Articles...</p>
        </div>
      </div>
  
      <div class=" text-black ml-6 w-[310px] lg:flex flex-col gap-4 hidden">
        <div class="flex flex-col gap-4 bg-white p-4 border-[#cccccc] border-[1px] rounded-md">
          <p>Home</p>
          <p>Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
          <hr />
          <button class="bg-blue-300 text-white rounded-xl">Create Post</button>
          <button class="text-blue-300 bg-white rounded-xl border-blue-300 border-2">Create Community</button>
        </div>
  
        <div class="bg-white p-4 border-[#cccccc] border-[1px] rounded-md">PLACEHOLDER Recent Posts</div>
  
        <div class="flex flex-col gap-4 bg-white p-4 text-sm border-[#cccccc] border-[1px] rounded-md">
          <div class="flex">
            <div class="flex flex-col w-1/2 ">
              <p>User Agreement</p>
              <p>Privacy Policy</p>
            </div>
            <div class="flex flex-col w-1/2">
              <p>Content Policy</p>
              <p> Moderator Code Of Conduct</p>
            </div>
  
          </div>
          <hr />
          <div class="flex">
            <div class="flex flex-col w-1/2">
              <p>English</p>
              <p>Français</p>
              <p>Italiano</p>
            </div>
            <div class="flex flex-col w-1/2">
              <p>Deutsch</p>
              <p>Español</p>
              <p>Português</p>
            </div>
          </div>
          <hr />
          Johnny Hall © 2023. All rights reserved.
        </div>
      </div> -->
  </div>
</template>
  
  
<script setup>
import { useAppStore } from '../stores/appStore'
const appStore = useAppStore()
</script>