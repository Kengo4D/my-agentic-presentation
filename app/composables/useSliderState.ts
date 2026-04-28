/**
 * @file composables/useSliderState.ts
 * @description Global state management for synchronization between Page and Layout.
 */
export const useSliderState = () => {
  const currentIndex = useState('slider-index', () => 0)
  const totalSlides = useState('slider-total', () => 0)

  const progressPercent = computed(() => 
    totalSlides.value > 0 ? ((currentIndex.value + 1) / totalSlides.value) * 100 : 0
  )

  const syncTotalSlides = (count: number) => { totalSlides.value = count }
  const nextSlide = () => { if (currentIndex.value < totalSlides.value - 1) currentIndex.value++ }
  const previousSlide = () => { if (currentIndex.value > 0) currentIndex.value-- }

  return {
    currentIndex,
    totalSlides,
    progressPercent,
    isFirstSlide: computed(() => currentIndex.value === 0),
    isLastSlide: computed(() => currentIndex.value === totalSlides.value - 1),
    syncTotalSlides,
    nextSlide,
    previousSlide
  }
}