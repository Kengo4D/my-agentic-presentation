<script setup lang="ts">
/**
 * Slide Orchestrator
 * Pure logic for rendering slides without IndexList.
 */
import { storeToRefs } from 'pinia'
import { usePresentationStore } from '~/stores/presentation'
import slideData from '~/assets/data/slides.json'
import type { SlideData } from '~/types/presentation'

definePageMeta({ layout: 'presentation' })

const store = usePresentationStore()
const { currentIndex, currentSlide, slides } = storeToRefs(store)

const data = slideData as unknown as SlideData

if (slides.value.length === 0) {
  const filteredSlides = data.slides.filter(s => s.layout !== 'index')
  store.setSlides(filteredSlides)
}

const slide = computed(() => currentSlide.value)

const next = () => store.nextSlide()
const prev = () => store.prevSlide()

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next()
    if (e.key === 'ArrowLeft') prev()
  })
})
</script>

<template>
  <div class="h-full w-full flex-1 min-h-0 relative bg-[#020617] overflow-hidden">
    <Transition name="slide-fade" mode="out-in">
      <div v-if="slide" :key="currentIndex" class="h-full w-full">
        
        <SlidesHero 
          v-if="slide.layout === 'hero'" 
          :content="slide.content" 
        />

        <SlidesMain 
          v-else-if="slide.layout === 'main'" 
          :content="slide.content"
          :slide-number="currentIndex + 1"
          :total-slides="slides.length"
        />

        <SlidesGraph 
          v-else-if="slide.layout === 'graph'" 
          :content="slide.content" 
        />

        <SlidesTestimonial 
          v-else-if="slide.layout === 'testimonial'" 
          :content="slide.content" 
        />

        <SlidesSummary 
          v-else-if="slide.layout === 'summary'" 
          :content="slide.content" 
        />
        
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active { 
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
}
.slide-fade-enter-from { opacity: 0; transform: scale(0.98); }
.slide-fade-leave-to { opacity: 0; transform: scale(1.02); }
</style>