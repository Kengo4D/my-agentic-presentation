<script setup lang="ts">
/**
 * @file app.vue
 * @description Entry point ensuring Layout and Global State.
 */

// Initialize global state at the root level
useSliderState()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>