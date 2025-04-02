<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        class="sr-only peer"
    />
    <div
        class="w-14 h-6 h-8 bg-neutral-400 rounded-3xl peer peer-checked:bg-red-400 transition-all duration-300"
    />
    <div
        class="absolute size-6 bg-neutral-50 rounded-full left-1 top-1 peer-checked:translate-x-6 transform transition-all duration-300"
    />
  </label>
</template>

<script setup>
import { defineModel } from 'vue'

const checked = defineModel()
</script>
