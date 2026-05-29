<template>
  <div class="mx-auto grid w-full max-w-5xl grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
    <div
      v-for="group in groups"
      :key="group.title"
      data-gsap-reveal="fade-up"
      class="cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center backdrop-blur transition-colors duration-200 hover:border-sky-300/90 hover:shadow-lg hover:shadow-sky-500/15 md:p-4"
    >
      <div
        class="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 md:mb-3 md:h-10 md:w-10"
        :class="group.iconColor"
      >
        <span :class="group.icon" class="h-4 w-4 md:h-4.5 md:w-4.5"></span>
      </div>
      <p class="font-mono text-xs uppercase tracking-[0.18em]" :class="group.color">{{ group.title }}</p>
      <div class="mt-2 flex flex-wrap justify-center gap-1.5 md:mt-3 md:gap-2">
        <span
          v-for="item in group.items"
          :key="item"
          class="rounded-md bg-slate-900 px-2 py-0.75 text-xs text-slate-300 md:px-2.5 md:py-1 md:text-sm"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const groups = [
  {
    title: 'framework',
    color: 'text-emerald-300',
    icon: 'i-fa-solid-cube',
    iconColor: 'text-emerald-300',
    items: ['Vue3', 'Nuxt', 'UniApp']
  },
  {
    title: 'interface',
    color: 'text-cyan-300',
    icon: 'i-fa-solid-layer-group',
    iconColor: 'text-cyan-300',
    items: ['Tailwind', 'UnoCSS', 'GSAP']
  },
  {
    title: 'scenario',
    color: 'text-blue-300',
    icon: 'i-fa-solid-terminal',
    iconColor: 'text-blue-300',
    items: ['H5', '小程序', 'App']
  },
  {
    title: 'extension',
    color: 'text-violet-300',
    icon: 'i-fa-solid-network-wired',
    iconColor: 'text-violet-300',
    items: ['Web3', 'IM', 'Flutter']
  }
]
</script>
