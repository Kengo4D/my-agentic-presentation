<script setup lang="ts">
/**
 * Component: Index List Slide (Agenda)
 * Fixed: Map 'points' from JSON to local 'items' props for rendering.
 */
interface IndexContent {
  title: string
  items: string[] // Mapped from 'points' in slides.json
}

defineProps<{ content: IndexContent }>()
const formatIndex = (idx: number) => String(idx + 1).padStart(2, '0')
</script>

<template>
  <section class="h-full min-h-0 w-full flex flex-col justify-center bg-[#020617] p-8 md:p-14 overflow-hidden">
    <h2 class="text-blue-500 font-mono text-sm tracking-[0.6em] uppercase mb-10 flex items-center gap-6 flex-none">
      <span class="w-10 h-px bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span> Agenda
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-5xl min-h-0 overflow-y-auto custom-scrollbar pr-4">
      <div v-for="(item, idx) in content.items" :key="item" 
           class="flex items-center gap-6 border-b border-slate-900 pb-5 group hover:border-blue-500/50 transition-colors">
        <span class="text-blue-600 font-mono text-lg font-bold italic flex-none">{{ formatIndex(idx) }}</span>
        <span class="text-xl md:text-2xl font-light text-slate-200 group-hover:text-white transition-colors uppercase italic tracking-tight flex-grow">
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.2); border-radius: 10px; }
</style>