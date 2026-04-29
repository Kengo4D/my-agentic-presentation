<script setup lang="ts">
/**
 * Main Slide: FINAL (Screen + Print safe)
 * Screen: scroll allowed
 * Print: no scroll, auto fit
 */

interface SlideMetric {
  label: string
  value: string
}

interface MainContent {
  title: string
  subtitle?: string
  keyPoints: string[]
  metrics?: SlideMetric[]
}

defineProps<{
  content: MainContent
  slideNumber?: number
  totalSlides?: number
}>()
</script>

<template>
  <section class="main-root w-full h-full bg-slate-950 px-8 py-10 text-white lg:px-16 flex flex-col">

    <!-- Header -->
    <div class="max-w-7xl mx-auto w-full border-b border-white/10 pb-6 flex justify-between">
      <p class="text-xs font-bold uppercase tracking-[0.35em] text-blue-400">
        // Strategic_Transformation
      </p>

      <p v-if="slideNumber" class="text-sm text-slate-500 font-mono">
        {{ String(slideNumber).padStart(2, '0') }} /
        {{ String(totalSlides).padStart(2, '0') }}
      </p>
    </div>

    <!-- Body -->
    <div class="max-w-7xl mx-auto w-full grid flex-1 gap-10 pt-8 lg:grid-cols-2 overflow-hidden">

      <!-- LEFT -->
      <div class="left-col flex flex-col h-full">

        <div class="left-inner space-y-6 pr-4">

          <h1 class="title text-white font-black italic uppercase tracking-tight">
            {{ content.title }}
          </h1>

          <p class="subtitle text-blue-100/80 font-light italic border-l-2 border-blue-900/40 pl-6">
            {{ content.subtitle }}
          </p>

          <div v-if="content.metrics" class="metrics-grid grid grid-cols-2 gap-4 pt-4">
            <div v-for="m in content.metrics" :key="m.label"
                 class="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                {{ m.label }}
              </p>
              <p class="text-2xl font-bold text-white tracking-tight italic">
                {{ m.value }}
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- RIGHT -->
      <div class="space-y-4">
        <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">
          Strategic_Execution_Matrix
        </span>

        <div v-for="(point, idx) in content.keyPoints" :key="idx"
             class="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div class="flex gap-4">
            <span class="text-blue-500 font-mono text-sm font-bold pt-1">
              {{ String(idx + 1).padStart(2, '0') }}
            </span>
            <p class="text-slate-300 text-sm leading-6">
              {{ point }}
            </p>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* Base */
.title {
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1.1;
}

.subtitle {
  font-size: 1rem;
  line-height: 1.5;
}

/* SCREEN ONLY: allow scroll */
.left-inner {
  overflow-y: auto;
}

/* PRINT: disable scroll + fit everything */
@media print {

  .left-inner {
    overflow: visible !important;
  }

  .title {
    font-size: 1.8rem !important;
  }

  .subtitle {
    font-size: 0.85rem !important;
  }

  .metrics-grid {
    gap: 0.5rem !important;
  }

  .metrics-grid div {
    padding: 0.5rem !important;
  }
}
</style>