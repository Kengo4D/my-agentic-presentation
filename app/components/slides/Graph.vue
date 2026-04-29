<script setup lang="ts">
/**
 * Graph Slide: FINAL STABLE VERSION (PDF-safe)
 * Use absolute pixel height instead of percentage
 */

import { computed } from 'vue'

interface GraphContent {
  title: string
  subtitle?: string
  chartData: number[]
  labels: string[]
  source?: string
}

const props = defineProps<{ content: GraphContent }>()

/**
 * Normalize values
 */
const max = computed(() => Math.max(...props.content.chartData))

/**
 * Convert to pixel height (FIX)
 */
const heights = computed(() => {
  const MAX_HEIGHT = 260 // px (safe for PDF)
  return props.content.chartData.map(v => (v / max.value) * MAX_HEIGHT)
})
</script>

<template>
  <section class="w-full h-full bg-[#020617] px-10 py-10 text-white flex flex-col">

    <div class="max-w-7xl mx-auto w-full grid flex-1 gap-10 lg:grid-cols-12">

      <!-- LEFT -->
      <div class="lg:col-span-4 flex flex-col justify-center space-y-6">
        <h2 class="title">
          {{ content.title }}
        </h2>

        <p class="subtitle">
          {{ content.subtitle }}
        </p>

        <div v-if="content.source" class="text-xs text-slate-500 font-mono uppercase pt-6">
          // {{ content.source }}
        </div>
      </div>

      <!-- RIGHT -->
      <div class="lg:col-span-8 flex flex-col justify-center">

        <div class="chart flex items-end gap-10 border-l border-b border-slate-800 p-10 h-[320px]">

          <div
            v-for="(val, i) in content.chartData"
            :key="i"
            class="flex-1 flex flex-col items-center justify-end"
          >

            <!-- VALUE -->
            <div class="value mb-2">
              {{ val }}%
            </div>

            <!-- BAR -->
            <div
              class="bar w-full rounded-t-xl"
              :style="{ height: heights[i] + 'px' }"
            ></div>

          </div>

        </div>

        <!-- LABELS -->
        <div class="flex justify-around pt-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <span v-for="l in content.labels" :key="l">
            {{ l }}
          </span>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

.title {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.5;
}

.bar {
  background: linear-gradient(to top, #1e3a8a, #3b82f6, #60a5fa);
}

.value {
  font-size: 0.9rem;
  font-weight: 700;
  color: #e2e8f0;
}

/* PRINT SAFE */
@media print {
  .chart {
    height: 280px !important;
  }

  .title {
    font-size: 2rem !important;
  }

  .value {
    font-size: 0.8rem !important;
  }
}
</style>