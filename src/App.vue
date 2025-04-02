<script setup>
import {ref, watchEffect} from 'vue'
import ExtensionsList from "./components/ExtensionsList.vue"

const isDarkMode = ref(false)

// Toggle dark mode
watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark') // Adds 'dark' class to <html>
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="bg-light-gradient dark:bg-dark-gradient">
    <div class="container mx-auto py-10 px-5">
      <div
          class="flex items-center justify-between bg-white dark:bg-neutral-700 rounded-lg border dark:border-neutral-700 p-3 mb-12">
        <img src="../src/assets/images/logo.svg" alt="logo" v-if="!isDarkMode">
        <img src="../src/assets/images/logo-dark.svg" alt="logo-dark" v-else>
        <button class="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg cursor-pointer"
                @click="isDarkMode = !isDarkMode">
          <img src="../src/assets/images/icon-moon.svg" alt="moon" v-if="!isDarkMode">
          <img src="../src/assets/images/icon-sun.svg" alt="sun" v-else>
        </button>
      </div>
      <ExtensionsList/>
    </div>
  </div>
</template>
