<template>
  <div class="relative mx-auto flex min-h-[190px] w-full max-w-6xl items-center justify-center md:min-h-[360px]">
    <div class="absolute hidden h-68 w-68 rounded-full border border-emerald-400/20 md:block lg:h-92 lg:w-92"></div>
    <div class="absolute hidden h-46 w-46 rounded-full border border-cyan-400/15 md:block lg:h-68 lg:w-68"></div>
    <div
      class="absolute h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
    ></div>
    <div class="absolute h-full max-h-96 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>

    <div
      class="skill-float skill-float-center relative z-10 w-full max-w-[320px] cursor-pointer rounded-2xl border border-emerald-400/25 bg-slate-950/90 px-5 py-4 text-center shadow-2xl shadow-emerald-950/30 backdrop-blur transition-colors duration-200 hover:border-sky-300/90 hover:shadow-sky-500/20 md:max-w-[340px] md:px-7 md:py-6"
    >
      <div
        class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 md:mb-4 md:h-11 md:w-11"
      >
        <span class="i-fa-solid-cube h-5 w-5"></span>
      </div>
      <p class="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">primary stack</p>
      <div class="mt-4 flex flex-nowrap justify-center gap-2">
        <span
          v-for="item in primaryStack"
          :key="item"
          class="rounded-lg bg-emerald-400 px-3 py-2 font-mono text-sm font-black text-slate-950 md:px-4"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <div
      v-for="node in nodes"
      :key="node.title"
      class="skill-float absolute hidden w-52 cursor-pointer rounded-xl border border-slate-700 bg-slate-950/85 p-4 shadow-xl shadow-black/20 backdrop-blur transition-colors duration-200 hover:border-sky-300/90 hover:shadow-sky-500/20 md:block lg:w-56"
      :class="[node.position, node.floatClass]"
    >
      <div class="mb-3 flex h-9 w-9 items-center justify-center rounded-lg" :class="node.iconBg">
        <span :class="[node.icon, node.iconColor]" class="h-4 w-4"></span>
      </div>
      <h3 class="font-semibold text-white">{{ node.title }}</h3>
      <p class="mt-1 text-sm leading-5 text-slate-400">{{ node.desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryStack = ['Vue3', 'Nuxt', 'UniApp']

const nodes = [
  {
    title: '响应式 UI',
    desc: 'TailwindCSS / UnoCSS',
    icon: 'i-fa-solid-layer-group',
    iconBg: 'bg-cyan-400/10',
    iconColor: 'text-cyan-300',
    position: '-left-6 top-4 lg:-left-10',
    floatClass: 'skill-float-a'
  },
  {
    title: 'SSR / SSG',
    desc: 'Nuxt 渲染与性能优化',
    icon: 'i-fa-solid-bolt',
    iconBg: 'bg-blue-400/10',
    iconColor: 'text-blue-300',
    position: '-right-6 top-4 lg:-right-10',
    floatClass: 'skill-float-b'
  },
  {
    title: '跨端交付',
    desc: 'H5 / 小程序 / App',
    icon: 'i-fa-solid-cubes',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-300',
    position: 'bottom-4 left-4 lg:left-12',
    floatClass: 'skill-float-c'
  },
  {
    title: '业务扩展',
    desc: 'Web3 / IM / AI 语音',
    icon: 'i-fa-solid-code-branch',
    iconBg: 'bg-violet-400/10',
    iconColor: 'text-violet-300',
    position: 'bottom-4 right-4 lg:right-12',
    floatClass: 'skill-float-d'
  }
]
</script>

<style scoped>
.skill-float {
  animation: skill-float 6.8s ease-in-out infinite;
}

.skill-float-center {
  animation-duration: 7.6s;
}

.skill-float-a {
  animation-duration: 6.2s;
  animation-delay: -0.8s;
}

.skill-float-b {
  animation-duration: 7.1s;
  animation-delay: -1.9s;
}

.skill-float-c {
  animation-duration: 8.2s;
  animation-delay: -2.7s;
}

.skill-float-d {
  animation-duration: 6.9s;
  animation-delay: -3.4s;
}

@keyframes skill-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-float,
  .skill-float-center {
    animation: none;
  }
}
</style>
