<script setup lang="ts">
/**
 * Layout: Strategic Presentation
 * Restored navigation controls and ensured layout stability with min-h-0.
 */
import { usePresentationStore } from '~/stores/presentation'
import { storeToRefs } from 'pinia'
 
const store = usePresentationStore()
const { slides, currentIndex } = storeToRefs(store)

const handlePrint = () => {
  if (import.meta.client) window.print()
}
</script>

<template>
  <div class="h-screen w-screen bg-[#020617] text-slate-50 overflow-hidden font-sans flex flex-col p-4 select-none">
    
    <div class="flex-1 min-h-0 flex flex-col border border-white/10 relative overflow-hidden">
      
      <header class="h-20 flex-none flex justify-between items-center px-10 border-b border-white/5 bg-slate-950/80 backdrop-blur-md z-[100]">
        <div class="flex items-center gap-6">
          <div class="w-2 h-8 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          <div class="flex flex-col">
            <span class="text-blue-500 font-mono text-[10px] tracking-[0.7em] uppercase font-black leading-none">Strategic_Intelligence_v5.5</span>
            <span class="text-slate-600 font-mono text-[8px] uppercase tracking-widest mt-2 italic font-bold">2026_Global_Report // Connection: Secure</span>
          </div>
        </div>
        
        <button @click="handlePrint" class="px-6 py-2 bg-slate-900 border border-slate-800 text-[9px] text-blue-400 font-mono tracking-[0.4em] uppercase hover:bg-blue-600 hover:text-white transition-all">
          GENERATE_REPORT_PDF
        </button>
      </header>

      <main class="flex-1 min-h-0 relative overflow-hidden flex items-center justify-center">
        <slot />
      </main>

      <footer class="h-16 flex-none px-10 border-t border-white/5 bg-slate-950/80 backdrop-blur-md z-[100] flex justify-between items-center">
        <div class="flex items-center gap-10">
          <div class="text-[14px] font-mono text-slate-500 tracking-[0.4em] uppercase">
            PAGE <span class="text-white font-bold">{{ String(currentIndex + 1).padStart(2, '0') }}</span> / {{ slides.length }}
          </div>
          <div class="w-64 h-1 bg-slate-900 relative overflow-hidden hidden md:block">
            <div class="h-full bg-blue-600 transition-all duration-700 ease-out"
                 :style="{ width: `${((currentIndex + 1) / slides.length) * 100}%` }"></div>
          </div>
        </div>

        <div class="flex gap-4">
          <button 
            @click="store.prevSlide" 
            :disabled="currentIndex === 0" 
            class="px-6 py-2 border border-slate-800 text-[10px] font-mono text-slate-500 hover:text-blue-400 disabled:opacity-10 transition-all uppercase tracking-widest"
          >
            PREV
          </button>
          <button 
            @click="store.nextSlide" 
            :disabled="currentIndex === slides.length - 1" 
            class="px-6 py-2 border border-slate-800 text-[10px] font-mono text-slate-500 hover:text-blue-400 disabled:opacity-10 transition-all uppercase tracking-widest"
          >
            NEXT
          </button>
        </div>
      </footer>

    </div>
  </div>
</template>