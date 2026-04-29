/**
 * Composable to manage slide data fetching and navigation state.
 */
import type { Slide } from '~/types/slide'

export const useSlidesData = () => {
  // Global states for slides and error tracking
  const slides = useState<Slide[]>('slides-list', () => [])
  const hasError = useState('slides-has-error', () => false)
  const errorMessage = useState('slides-error-message', () => '')
  const currentIndex = useState('slides-current-index', () => 0)

  /**
   * Fetch slide data from JSON with robust error handling.
   */
  const fetchSlides = async () => {
    try {
      // Use $fetch for stable execution in both SSR and Client environments
      const data = await $fetch<{ slides: Slide[] }>('/data/slides.json')
      
      if (!data || !data.slides || data.slides.length === 0) {
        throw new Error('Slide data is empty or invalid format.')
      }

      slides.value = data.slides
      hasError.value = false
    } catch (err: any) {
      hasError.value = true
      errorMessage.value = err.message || 'Failed to fetch /data/slides.json'
      console.error('[SlideSystem Error]:', err)
    }
  }

  // Navigation actions
  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) currentIndex.value++
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  return {
    slides,
    hasError,
    errorMessage,
    currentIndex,
    fetchSlides,
    nextSlide,
    prevSlide
  }
}