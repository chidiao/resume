<template>
  <div class="relative">
    <div
      class="mb-6 inline-flex items-center gap-2 border border-emerald-300/25 bg-emerald-300/8 px-3 py-1.5 text-xs font-medium text-emerald-100"
    >
      <span class="i-fa-solid-layer-group size-3.5"></span>
      <span>03 / UniApp Mini Program</span>
    </div>

    <div class="space-y-5">
      <p class="font-mono text-sm text-emerald-300">projects.uniapp.deploy()</p>
      <h2 class="max-w-[620px] text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-6xl">
        uni-app 小程序
      </h2>
      <p class="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        基于 uni-app 完成小程序与 App 场景开发，覆盖社区产品与 ERP
        业务系统，负责页面搭建、接口联调、状态维护与多端适配。
      </p>
    </div>

    <div class="mt-7 grid gap-3 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="cursor-pointer border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-emerald-300/70 hover:bg-emerald-300/8 hover:shadow-[0_0_26px_rgba(16,185,129,0.14)]"
      >
        <span :class="[item.icon, 'size-4 text-emerald-200']"></span>
        <div class="mt-3 font-mono text-lg font-semibold text-white">{{ item.value }}</div>
        <div class="mt-1 text-xs text-slate-400">{{ item.label }}</div>
      </div>
    </div>

    <div class="mt-7 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="cursor-pointer border border-white/10 bg-[#0D1322]/80 px-3 py-1.5 text-xs text-slate-300 transition duration-200 hover:border-emerald-300/70 hover:text-emerald-100"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-8 grid gap-3 text-sm leading-7 text-slate-300">
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-emerald-200"></span>
        <p>完成小程序页面搭建、业务功能开发、接口数据联调与状态维护。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-emerald-200"></span>
        <p>处理权限适配、版本更新、异常反馈与多端体验优化，保障稳定交付。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-emerald-200"></span>
        <p>覆盖社区产品与 ERP 管理系统，兼顾前台交互体验和后台业务流程。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  icon: string
  value: string
  label: string
}

defineProps<{
  stats: StatItem[]
  tags: string[]
}>()
</script>
