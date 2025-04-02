<script setup>
import {ref, computed} from 'vue'
import ExtensionItem from "./ExtensionItem.vue"
import data from "../../data.json"

const extensions = ref([...data])
const filterMode = ref('all')

const filteredExtensions = computed(() => {
  if (filterMode.value === 'active') {
    return extensions.value.filter(item => item.isActive)
  } else if (filterMode.value === 'inactive') {
    return extensions.value.filter(item => !item.isActive)
  } else {
    return extensions.value
  }
})

const filterExtensions = (val) => {
  filterMode.value = val
}

const updateExtensionState = (name, newState) => {
  const extension = extensions.value.find(item => item.name === name)
  if (extension) {
    extension.isActive = newState
  }
}
const removeExtension = (name) => {
  const index = extensions.value.findIndex(item => item.name === name)
  extensions.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
      <h1 class="text-neutral-900 dark:text-neutral-100 text-3xl font-bold">Extensions List</h1>
      <div class="flex items-center gap-2">
        <button
            class="border dark:border-neutral-200 rounded-full bg-white text-neutral-900 font-semibold
            dark:bg-neutral-700 dark:text-neutral-100 py-2 px-4 focus:border-red-400 hover:border-neutral-100 hover:text-neutral-600"
            :class="{'!bg-red-700 !text-white dark:!text-neutral-700 hover:!bg-red-500 dark:!border-red-700': filterMode === 'all'}"
            @click="filterExtensions('all')">All
        </button>
        <button
            class="border dark:border-neutral-200 rounded-full bg-white text-neutral-900 font-semibold dark:hover:bg-neutral-600
             dark:bg-neutral-700 dark:text-neutral-100 py-2 px-4 focus:border-red-400 hover:border-neutral-100 hover:text-neutral-600"
            :class="{'!bg-red-700 !text-white dark:!text-neutral-700 hover:!bg-red-500 dark:!border-red-700': filterMode === 'active'}"
            @click="filterExtensions('active')">Active
        </button>
        <button
            class="border dark:border-neutral-200 rounded-full bg-white text-neutral-900 font-semibold dark:hover:bg-neutral-600
            dark:bg-neutral-700 dark:text-neutral-100 py-2 px-4 focus:border-red-400 hover:border-neutral-100 hover:text-neutral-600"
            :class="{'!bg-red-700 !text-white dark:!text-neutral-700 hover:!bg-red-500 dark:!border-red-700': filterMode === 'inactive'}"
            @click="filterExtensions('inactive')">Inactive
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <ExtensionItem v-for="item in filteredExtensions" :key="item.name" :extension="item"
                     @update:activeState="updateExtensionState" @remove="removeExtension" />
    </div>
  </div>
</template>