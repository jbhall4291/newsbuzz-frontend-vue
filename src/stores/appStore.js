import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('counter', () => {
  const loggedInUser = ref("cooljmessy")

  return { loggedInUser, }
})
