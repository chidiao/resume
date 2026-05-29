<template>
  <aside class="flex h-full flex-col justify-center gap-4">
    <div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 backdrop-blur md:p-6">
      <p class="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">2016 - 2022</p>
      <h3 class="mt-3 text-2xl font-black text-white">郑州某科技公司</h3>
      <div class="mt-5 space-y-4">
        <div v-for="item in summary" :key="item.title" class="flex gap-3">
          <div class="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg" :class="item.iconBg">
            <span :class="[item.icon, item.iconColor]" class="h-3.5 w-3.5"></span>
          </div>
          <div>
            <h4 class="font-semibold text-white">{{ item.title }}</h4>
            <p class="mt-1 text-sm leading-6 text-slate-400">{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <a
        href="https://2023.chidiao.xin"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-sky-300/35 bg-sky-400/10 px-4 font-mono text-sm font-bold text-sky-200 transition-colors duration-200 hover:border-sky-200 hover:bg-sky-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
      >
        <span>查看详细过往</span>
        <span class="i-fa-solid-external-link-alt h-3.5 w-3.5"></span>
      </a>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center"
      >
        <div class="font-mono text-xl font-black" :class="item.color">{{ item.value }}</div>
        <div class="mt-1 text-xs text-slate-500">{{ item.label }}</div>
      </div>
    </div>

    <div class="rounded-2xl border border-emerald-400/20 bg-emerald-400/8 p-5">
      <p class="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">education</p>
      <h4 class="mt-3 font-bold text-white">河南城建学院</h4>
      <p class="mt-1 text-sm text-slate-400">信息管理与信息系统 / 本科 / 2012 - 2016</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
const stats = [
  { value: '6年+', label: '前端经验', color: 'text-sky-300' },
  { value: '5年+', label: 'Vue 经验', color: 'text-emerald-300' },
  { value: '3年+', label: 'Nuxt 经验', color: 'text-violet-300' }
]

const summary = [
  {
    title: '开发',
    desc: '负责响应式官网、企业管理后台、Web、小程序与 UniApp Android 项目开发维护。',
    icon: 'i-fa-solid-code-branch',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-300'
  },
  {
    title: '运维 / 实施',
    desc: '参与 IDC 机房网络运维，以及网络产品售后实施与现场支持。',
    icon: 'i-fa-solid-network-wired',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-300'
  }
]
</script>
