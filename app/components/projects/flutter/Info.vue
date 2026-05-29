<template>
  <div class="relative">
    <div
      class="mb-6 inline-flex items-center gap-2 border border-sky-300/25 bg-sky-300/8 px-3 py-1.5 text-xs font-medium text-sky-100"
    >
      <span class="i-fa-solid-mobile-alt size-3.5"></span>
      <span>05 / Flutter App Collaboration</span>
    </div>

    <div class="space-y-5">
      <p class="font-mono text-sm text-cyan-300">projects.flutter.assist()</p>
      <h2 class="max-w-[620px] text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-6xl">
        Flutter 协作经历
      </h2>
      <p class="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        Flutter 不是我的主力技术栈，但曾参与 2 个商业项目协作，总计约 5-6 个月。主要承担页面搭建、接口联调、数据渲染与
        AI 聊天相关功能补位。
      </p>
    </div>

    <div class="mt-7 grid gap-3 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="cursor-pointer border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-sky-300/70 hover:bg-sky-300/8 hover:shadow-[0_0_26px_rgba(56,189,248,0.14)]"
      >
        <span :class="[item.icon, 'size-4 text-sky-200']"></span>
        <div class="mt-3 font-mono text-lg font-semibold text-white">{{ item.value }}</div>
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
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-sky-200"></span>
        <p>以协作和补位为主，快速熟悉 Dart 语法、Flutter 页面结构与 GetX 基础使用。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-sky-200"></span>
        <p>Rustar 项目参与约 2 个多月，应用商店版本已下架，目前保留 H5 与其他原生版本入口。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-sky-200"></span>
        <p>MarsXAI 早期使用 Flutter 开发，后续重构为 H5，并演进为游戏社区类 Flutter 套壳 H5 项目。</p>
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
