<script setup lang="ts">
type QuoteContent = {
  quote: {
    text: string
    speaker: string
    title?: string
    organization?: string
  }
}

defineProps<{ content: QuoteContent }>()
</script>

<template>
  <section class="h-full min-h-0 w-full flex flex-col items-center justify-center px-8 md:px-20 bg-[#020617] text-center relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[22rem] text-blue-900/10 font-serif opacity-20 italic">“</div>
    
    <div class="relative z-10 max-w-3xl space-y-8">
      <h2 class="text-white font-light leading-relaxed italic tracking-tight"
          style="font-size: clamp(1.2rem, 3vw, 2.5rem);">
        "{{ content.quote.text }}"
      </h2>
      
      <div class="flex flex-col items-center gap-2">
        <div class="w-10 h-px bg-blue-600 mb-2"></div>
        <div class="text-lg md:text-xl font-bold text-white uppercase tracking-wider italic">
          {{ content.quote.speaker }}
        </div>
        <div class="text-[9px] font-mono text-blue-500 tracking-[0.3em] uppercase font-black">
          {{ content.quote.title || 'Executive_Lead' }} // {{ content.quote.organization || 'Strategic' }}
        </div>
      </div>
    </div>
  </section>
</template>