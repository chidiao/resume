<template>
  <div class="relative mx-auto w-full max-w-[620px]">
    <div class="console-orbit console-orbit-a absolute -left-5 top-12 h-24 w-24 rounded-full border border-emerald-400/20"></div>
    <div class="console-orbit console-orbit-b absolute -right-4 bottom-8 h-32 w-32 rounded-full border border-blue-400/20"></div>

    <div
      class="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1120]/95 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div class="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
        <div class="flex items-center gap-2">
          <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        </div>
        <span class="font-mono text-xs text-slate-500">portfolio.config.ts</span>
      </div>

      <div class="grid md:grid-cols-[1fr_190px]">
        <pre
          class="overflow-hidden p-5 font-mono text-[13px] leading-7 text-slate-300 sm:text-sm"
        ><code><span class="text-slate-500">01</span> <span class="text-purple-300">export default</span> defineEngineer({
<span class="text-slate-500">02</span>   name: <span class="text-emerald-300">'孙颖洲'</span>,
<span class="text-slate-500">03</span>   role: <span class="text-emerald-300">'Frontend Engineer'</span>,
<span class="text-slate-500">04</span>   stack: [<span class="text-cyan-300">'Vue3'</span>, <span class="text-cyan-300">'Nuxt'</span>, <span class="text-cyan-300">'UniApp'</span>],
<span class="text-slate-500">05</span>   features: {
<span class="text-slate-500">06</span>     web3: <span class="text-blue-300">true</span>,
<span class="text-slate-500">07</span>     im: <span class="text-blue-300">true</span>,
<span class="text-slate-500">08</span>     aiVoice: <span class="text-blue-300">true</span>,
<span class="text-slate-500">09</span>     flutterHybrid: <span class="text-blue-300">true</span>
<span class="text-slate-500">10</span>   }
<span class="text-slate-500">11</span> })</code></pre>

        <div class="border-t border-slate-800 p-4 md:border-l md:border-t-0">
          <p class="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">project types</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <div
              v-for="type in projectTypes"
              :key="type.label"
              class="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2"
            >
              <span class="h-1.5 w-1.5 rounded-full" :class="type.dot"></span>
              <span class="font-mono text-sm font-semibold text-slate-200">{{ type.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute -bottom-5 left-5 right-5 rounded-xl border border-emerald-400/25 bg-slate-950 px-4 py-3 shadow-xl shadow-black/30"
    >
      <HeroCodingTypewriter />
    </div>
  </div>
</template>

<script setup lang="ts">
const projectTypes = [
  { label: 'H5', dot: 'bg-emerald-400' },
  { label: '小程序', dot: 'bg-cyan-400' },
  { label: 'App', dot: 'bg-blue-400' },
  { label: '官网', dot: 'bg-violet-400' },
  { label: 'DApp', dot: 'bg-amber-400' },
  { label: '管理后台', dot: 'bg-rose-400' }
]
</script>

<style scoped>
.console-orbit {
  transform-origin: center;
  animation: console-orbit-pulse 7.8s ease-in-out infinite;
  will-change: transform, opacity;
}

.console-orbit-b {
  animation-duration: 9.6s;
  animation-delay: -2.4s;
}

@keyframes console-orbit-pulse {
  0%,
  100% {
    opacity: 0.62;
    transform: scale(0.92);
  }

  50% {
    opacity: 1;
    transform: scale(1.18);
  }
}

@media (prefers-reduced-motion: reduce) {
  .console-orbit {
    animation: none;
  }
}
</style>
