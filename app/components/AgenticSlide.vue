<script setup lang="ts">
export interface SlideMetric {
  label: string
  value: string
}

export interface SlideInsight {
  title: string
  description: string
}

export interface AgenticSlideData {
  eyebrow: string
  title: string
  subtitle: string
  narrative: string
  metrics: SlideMetric[]
  insights: SlideInsight[]
  accentClass: string
}

interface AgenticSlideProps extends AgenticSlideData {
  slideNumber: number
  totalSlides: number
}

defineProps<AgenticSlideProps>()
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white sm:px-10 lg:px-16">
    <div class="pointer-events-none absolute inset-0 opacity-80">
      <div class="absolute -left-32 top-8 h-96 w-96 rounded-full blur-3xl" :class="accentClass" />
      <div class="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
    </div>

    <div class="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col">
      <header class="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            {{ eyebrow }}
          </p>
          <p class="mt-2 text-sm text-slate-400">
            Agentic Nuxt-Slide Architect
          </p>
        </div>

        <div class="text-right">
          <p class="text-sm font-medium text-slate-300">
            {{ String(slideNumber).padStart(2, '0') }} / {{ String(totalSlides).padStart(2, '0') }}
          </p>
          <p class="text-xs uppercase tracking-[0.25em] text-slate-500">
            Executive Brief
          </p>
        </div>
      </header>

      <main class="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <h1 class="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {{ title }}
          </h1>

          <p class="mt-6 max-w-3xl text-xl leading-8 text-cyan-100/90 sm:text-2xl">
            {{ subtitle }}
          </p>

          <p class="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {{ narrative }}
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="metric in metrics"
              :key="metric.label"
              class="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <p class="text-3xl font-semibold text-white">
                {{ metric.value }}
              </p>
              <p class="mt-2 text-sm leading-5 text-slate-400">
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>

        <aside class="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="text-lg font-semibold text-white">
              Strategic Signals
            </h2>
            <span class="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
              Board Lens
            </span>
          </div>

          <div class="space-y-4">
            <article
              v-for="insight in insights"
              :key="insight.title"
              class="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
            >
              <h3 class="text-base font-semibold text-white">
                {{ insight.title }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                {{ insight.description }}
              </p>
            </article>
          </div>
        </aside>
      </main>
    </div>
  </section>
</template>