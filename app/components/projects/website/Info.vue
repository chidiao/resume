<template>
  <div class="relative">
    <div
      class="mb-6 inline-flex items-center gap-2 border border-sky-300/25 bg-sky-300/8 px-3 py-1.5 text-xs font-medium text-sky-200"
    >
      <span class="i-fa-solid-code size-3.5"></span>
      <span>01 / Official Website</span>
    </div>

    <div class="space-y-5">
      <p class="font-mono text-sm text-emerald-300">projects.website.render()</p>
      <h2 class="max-w-[620px] text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-6xl">
        企业响应式官网
      </h2>
      <p class="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        基于 Vue3 与 Nuxt 完成多款企业官网搭建，覆盖 PC、平板、移动端响应式适配，并处理 SSR /
        SSG、国际化、动画交互与性能优化等交付工作。
      </p>
    </div>

    <div class="mt-7 grid gap-3 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="cursor-pointer border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-sky-300/70 hover:bg-sky-300/8 hover:shadow-[0_0_26px_rgba(56,189,248,0.14)]"
      >
        <div class="font-mono text-lg font-semibold text-white">{{ item.value }}</div>
        <div class="mt-1 text-xs text-slate-400">{{ item.label }}</div>
      </div>
    </div>

    <div class="mt-7 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="cursor-pointer border border-white/10 bg-[#0D1322]/80 px-3 py-1.5 text-xs text-slate-300 transition duration-200 hover:border-sky-300/70 hover:text-sky-100"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-8 grid gap-3 text-sm leading-7 text-slate-300">
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-sky-300"></span>
        <p>独立完成项目结构搭建、通用组件封装、路由规整、浏览器兼容与页面性能优化。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-sky-300"></span>
        <p>使用 UnoCSS / TailwindCSS 完成高一致性的响应式布局，保障多尺寸展示效果。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  value: string
  label: string
}

defineProps<{
  stats: StatItem[]
  tags: string[]
}>()
</script>
