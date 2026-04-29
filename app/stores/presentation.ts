import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Slide } from '~/types/presentation'

/**
 * Presentation Store: Uses centralized Slide type for strict consistency.
 */
export const usePresentationStore = defineStore('presentation', () => {
  const currentIndex = ref(0)
  const slides = ref<Slide[]>([])

  const currentSlide = computed(() => slides.value[currentIndex.value] ?? null)

  const setSlides = (data: Slide[]) => {
    slides.value = data
    currentIndex.value = 0
  }

  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) {
      currentIndex.value++
    }
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  return {
    currentIndex,
    slides,
    currentSlide,
    setSlides,
    nextSlide,
    prevSlide,
  }
})