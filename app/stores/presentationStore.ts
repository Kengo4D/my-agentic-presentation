import { defineStore } from 'pinia'

/**
 * presentationStore: Central engine for slide state management.
 * Strictly adheres to the Nuxt 4 directory structure and Pinia naming conventions.
 */
export const presentationStore = defineStore('presentation', () => {
  const currentIndex = ref(0)
  const slides = ref<any[]>([])

  const currentSlide = computed(() => slides.value[currentIndex.value] || null)

  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) currentIndex.value++
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  const setSlides = (data: any[]) => {
    slides.value = data
  }

  return { 
    currentIndex, 
    slides, 
    currentSlide, 
    nextSlide, 
    prevSlide, 
    setSlides 
  }
})