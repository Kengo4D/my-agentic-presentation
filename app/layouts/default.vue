<script setup lang="ts">
/**
 * @file layouts/default.vue
 * @description Master layout for slide navigation and common UI.
 */

// Inject shared slider state
const { 
  currentIndex, 
  progressPercent, 
  isFirstSlide, 
  isLastSlide, 
  nextSlide, 
  previousSlide,
  totalSlides 
} = useSliderState()
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <slot />

    <nav v-if="totalSlides > 0" class="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center gap-4">
        <button type="button" class="nav-btn" :disabled="isFirstSlide" @click="previousSlide">
          Previous
        </button>
        <div class="progress-container">
          <div
            class="h-full rounded-full bg-cyan-300 transition-all duration-300"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
        <button type="button" class="nav-btn" :disabled="isLastSlide" @click="nextSlide">
          Next
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-btn { @apply rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/10 disabled:opacity-40; }
.progress-container { @apply h-2 flex-1 overflow-hidden rounded-full bg-white/10; }
</style>