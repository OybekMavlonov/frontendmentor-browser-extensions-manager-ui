<script setup>
import {ref, defineProps, defineEmits, watch} from 'vue'
import Switch from './Switch.vue'

const props = defineProps({
  extension: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:activeState'])

const isOn = ref(props.extension.isActive)

watch(isOn, (newVal) => {
  emit('update:activeState', props.extension.name, newVal);
});

const removeExtension = () => {
  emit('remove', props.extension.name);
}
</script>

<template>
  <div class="flex flex-col justify-between rounded-lg bg-white dark:bg-neutral-800 border p-4">
    <div class="flex gap-3">
      <img :src="extension.logo" :alt="extension.name">
      <div>
        <h2 class="font-bold text-lg text-neutral-900 dark:text-neutral-100">{{ extension.name }}</h2>
        <p class="text-neutral-600 dark:text-neutral-200">{{ extension.description }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between mt-6">
      <button
          class="border bg-white dark:bg-neutral-800 text-neutral-800 hover:bg-red-500 hover:text-white
          dark:text-neutral-100 dark:hover:bg-red-700 dark:hover:text-neutral-800
          dark:hover:border-red-700 font-semibold rounded-full py-2 px-4"
          @click="removeExtension">
        Remove
      </button>
      <Switch v-model="isOn"/>
    </div>
  </div>
</template>


