<template>
  <div class="max-w-3xl">
    <p class="mb-4 font-mono text-sm font-semibold text-emerald-300">SUN YINGZHOU</p>
    <h1 class="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.9] tracking-normal text-white">
      <span class="block whitespace-nowrap">孙颖洲</span>
      <span
        class="mt-8 block whitespace-nowrap bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text pb-2 text-[clamp(2.2rem,4.8vw,5rem)] leading-[1.08] text-transparent"
      >
        前端工程师
      </span>
    </h1>

    <p class="mt-8 max-w-xl text-xl font-semibold leading-8 text-slate-200 md:text-2xl md:leading-9">
      6 年前端开发经验，主要技术栈 Vue3 / Nuxt / UniApp
    </p>

    <div class="mt-8 flex flex-wrap gap-2.5">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 font-mono text-sm text-slate-200"
      >
        {{ skill }}
      </span>
    </div>

    <div class="mt-9 flex flex-col gap-3 sm:flex-row">
      <a
        href="#projects"
        class="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors duration-200 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        <span>run projects</span>
        <span class="i-fa-solid-terminal h-4 w-4"></span>
      </a>
      <a
        href="/孙颖洲2026.pdf"
        download="孙颖洲2026简历.pdf"
        class="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-950/80 px-6 font-mono text-sm font-bold text-slate-100 transition-colors duration-200 hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        @click.prevent="downloadResume"
      >
        <span class="i-fa-solid-download h-4 w-4"></span>
        <span>download cv.pdf</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = ['Vue3', 'Nuxt', 'UniApp', 'TailwindCSS', 'Web3', 'Flutter']

async function downloadResume() {
  const response = await fetch('/孙颖洲2026.pdf')
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = '孙颖洲2026简历.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>
