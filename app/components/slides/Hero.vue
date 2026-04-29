<script setup lang="ts">
defineProps<{
  content: {
    title: string
    subtitle?: string
    message?: string
    metrics?: { label: string; value: string }[]
  }
}>()
</script>

<template>
  <section class="h-full min-h-0 w-full flex flex-col justify-center px-12 md:px-20 bg-[#020617] relative">
    <div class="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
    <div class="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

    <div class="relative z-10 space-y-8 max-w-6xl">
      <div class="text-blue-500 font-mono text-sm md:text-base uppercase tracking-[0.5em] opacity-80">
        // {{ content.subtitle }}
      </div>
      
      <h1 class="text-white font-black italic uppercase leading-[0.85] tracking-tighter"
          style="font-size: clamp(2rem, 6vw, 6.5rem);">
        {{ content.title }}
      </h1>
      
      <p class="text-xl md:text-2xl text-slate-400 font-light max-w-4xl leading-relaxed italic border-l-2 border-blue-900/50 pl-8">
        {{ content.message }}
      </p>

      <div v-if="content.metrics" class="flex gap-12 pt-10">
        <div v-for="m in content.metrics" :key="m.label" class="space-y-2">
          <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{{ m.label }}</div>
          <div class="text-4xl font-black text-blue-500 tracking-tighter italic">{{ m.value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>