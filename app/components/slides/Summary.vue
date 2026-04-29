<script setup lang="ts">
/**
 * Summary Slide: FINAL (Screen + Print safe)
 */

interface SlideMetric {
  label: string
  value: string
}

interface SummaryContent {
  title: string
  body: string[]
  metrics?: SlideMetric[]
}

defineProps<{ content: SummaryContent }>()
</script>

<template>
  <section class="summary-root w-full h-full bg-[#020617] px-8 py-10 text-white lg:px-16 flex flex-col">

    <div class="max-w-6xl mx-auto w-full grid flex-1 gap-10 lg:grid-cols-2 overflow-hidden">

      <!-- LEFT -->
      <div class="left-col flex flex-col h-full">

        <h2 class="title mb-6">
          {{ content.title }}
        </h2>

        <ul class="left-inner space-y-5 pr-4">
          <li v-for="item in content.body" :key="item"
              class="flex gap-4 text-base text-slate-300 leading-relaxed">
            <span class="text-blue-500 font-mono flex-none">>></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- RIGHT -->
      <div class="flex flex-col gap-6 justify-center">

        <div v-for="m in content.metrics" :key="m.label"
             class="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
          <p class="text-[10px] text-blue-500 uppercase tracking-widest mb-1">
            {{ m.label }}
          </p>
          <p class="text-3xl font-black italic">
            {{ m.value }}
          </p>
        </div>

        <!-- CTA -->
        <div class="cta-box p-6 bg-blue-600 rounded-2xl text-center">
          <p class="cta-text font-black uppercase italic">
            Strategic Summary Complete
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

/* Typography */
.title {
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
}

.cta-text {
  font-size: 1.2rem;
}

/* SCREEN: allow scroll */
.left-inner {
  overflow-y: auto;
}

/* PRINT FIX */
@media print {

  .left-inner {
    overflow: visible !important;
  }

  .title {
    font-size: 1.6rem !important;
  }

  li {
    font-size: 0.8rem !important;
    line-height: 1.4 !important;
  }

  .cta-box {
    padding: 0.5rem !important;
  }

  .cta-text {
    font-size: 0.8rem !important;
  }
}
</style>