<script setup lang="ts">
/**
 * @file pages/index.vue
 * @description Ensuring the slider synchronizes with fetched data.
 */
import type { AgenticSlideData } from '~/components/AgenticSlide.vue'

// 1. Fetch data (Wait for resolution)
const { data: slides } = await useAsyncData<AgenticSlideData[]>('slides', async () => {
  try {
    return await $fetch<AgenticSlideData[]>('/data/slides.json')
  } catch (e) {
    const backup = await import('~/assets/data/slides.json')
    return backup.default as AgenticSlideData[]
  }
})

// 2. Initialize and sync state
const { currentIndex, syncTotalSlides } = useSliderState()

// Ensure total count is updated once slides are loaded
watchEffect(() => {
  if (slides.value) {
    syncTotalSlides(slides.value.length)
  }
})

// 3. Active slide reference
const currentSlide = computed(() => slides.value?.[currentIndex.value] ?? null)
</script>

<template>
  <main v-if="currentSlide">
    <AgenticSlide
      v-bind="currentSlide"
      :slide-number="currentIndex + 1"
      :total-slides="slides?.length || 0"
    />
  </main>
  <div v-else class="flex min-h-screen items-center justify-center bg-slate-950 text-white text-2xl font-light tracking-widest">
    LOADING ASSETS...
  </div>
</template>