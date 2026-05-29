<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/80 p-5 shadow-2xl shadow-black/30 backdrop-blur transition-colors duration-200 hover:border-sky-300/90 hover:shadow-sky-500/20 md:p-7"
  >
    <div
      class="pointer-events-none absolute right-5 top-5 hidden font-mono text-8xl font-black leading-none text-white/[0.04] lg:block"
    >
      2026
    </div>

    <div class="relative z-10">
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <span
          class="rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-200"
        >
          2023/03 - 2026/05
        </span>
        <span
          class="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-200"
        >
          Frontend Engineer
        </span>
      </div>

      <h3 class="text-2xl font-black text-white md:text-4xl">洛阳蓝景科技</h3>
      <p class="mt-3 text-base font-semibold text-slate-300 md:text-xl">前端工程师 / 多端产品线开发</p>

      <div class="mt-7 grid gap-3 md:grid-cols-2">
        <div
          v-for="item in highlights"
          :key="item.title"
          class="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
        >
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" :class="item.iconBg">
            <span :class="[item.icon, item.iconColor]" class="h-4.5 w-4.5"></span>
          </div>
          <h4 class="font-semibold text-white">{{ item.title }}</h4>
          <p class="mt-2 text-sm leading-6 text-slate-400">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const highlights = [
  {
    title: '多端产品开发',
    desc: '主力使用 Vue3、Nuxt、UniApp 完成 Web、H5、小程序与 App 需求开发，并参与 2 个 Flutter 项目协作。',
    icon: 'i-fa-solid-layer-group',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-300'
  },
  {
    title: '游戏社区应用',
    desc: '参与游戏社区类多端应用研发，接入腾讯 IM 与 AI 语音交互能力。',
    icon: 'i-fa-solid-comments',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-300'
  },
  {
    title: 'Web3 DApp 钱包',
    desc: '参与 Web3 DApp 与钱包相关项目开发，覆盖钱包连接、资产展示与链上交互等能力。',
    icon: 'i-fa-solid-link',
    iconBg: 'bg-blue-400/10',
    iconColor: 'text-blue-300'
  },
  {
    title: '响应式官网交付',
    desc: '独立完成多款企业官网搭建，覆盖响应式、i18n、性能优化等工作。',
    icon: 'i-fa-solid-desktop',
    iconBg: 'bg-violet-400/10',
    iconColor: 'text-violet-300'
  }
]
</script>
