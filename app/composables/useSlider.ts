import { computed, onMounted, onUnmounted, ref, type ComputedRef, type Ref } from 'vue'

export interface SliderControls {
  currentIndex: Ref<number>
  progressPercent: ComputedRef<number>
  isFirstSlide: ComputedRef<boolean>
  isLastSlide: ComputedRef<boolean>
  goToSlide: (index: number) => void
  nextSlide: () => void
  previousSlide: () => void
}

export interface UseSliderOptions {
  totalSlides: number
  initialIndex?: number
}

export const useSlider = (options: UseSliderOptions): SliderControls => {
  const totalSlides = Math.max(1, options.totalSlides)
  const initialIndex = Math.min(Math.max(options.initialIndex ?? 0, 0), totalSlides - 1)
  const currentIndex = ref(initialIndex)

  const progressPercent = computed(() => ((currentIndex.value + 1) / totalSlides) * 100)
  const isFirstSlide = computed(() => currentIndex.value === 0)
  const isLastSlide = computed(() => currentIndex.value === totalSlides - 1)

  const goToSlide = (index: number): void => {
    if (!Number.isInteger(index)) return
    if (index < 0 || index >= totalSlides) return
    currentIndex.value = index
  }

  const nextSlide = (): void => {
    if (!isLastSlide.value) currentIndex.value += 1
  }

  const previousSlide = (): void => {
    if (!isFirstSlide.value) currentIndex.value -= 1
  }

  const handleKeydown = (event: KeyboardEvent): void => {
    const target = event.target as HTMLElement | null
    const isEditableTarget =
      target?.tagName === 'INPUT' ||
      target?.tagName === 'TEXTAREA' ||
      target?.tagName === 'SELECT' ||
      target?.isContentEditable === true

    if (isEditableTarget) return

    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
      event.preventDefault()
      nextSlide()
      return
    }

    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault()
      previousSlide()
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      goToSlide(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      goToSlide(totalSlides - 1)
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    currentIndex,
    progressPercent,
    isFirstSlide,
    isLastSlide,
    goToSlide,
    nextSlide,
    previousSlide
  }
}