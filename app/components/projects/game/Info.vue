<template>
  <div class="relative">
    <div
      class="mb-6 inline-flex items-center gap-2 border border-fuchsia-300/25 bg-fuchsia-300/8 px-3 py-1.5 text-xs font-medium text-fuchsia-100"
    >
      <span class="i-fa-solid-gamepad size-3.5"></span>
      <span>02 / Game Community H5</span>
    </div>

    <div class="space-y-5">
      <p class="font-mono text-sm text-emerald-300">projects.community.mount()</p>
      <h2 class="max-w-[620px] text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-6xl">
        游戏社区应用
      </h2>
      <p class="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        参与游戏社区类 H5 与 App 混合场景开发，覆盖内容社区、即时通讯、AI 语音交互与 H5 / Flutter 容器通信等核心体验。
      </p>
    </div>

    <div class="mt-7 grid gap-3 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="cursor-pointer border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-fuchsia-300/70 hover:bg-fuchsia-300/8 hover:shadow-[0_0_26px_rgba(217,70,239,0.14)]"
      >
        <span :class="[item.icon, 'size-4 text-fuchsia-200']"></span>
        <div class="mt-3 font-mono text-lg font-semibold text-white">{{ item.value }}</div>
        <div class="mt-1 text-xs text-slate-400">{{ item.label }}</div>
      </div>
    </div>

    <div class="mt-7 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="cursor-pointer border border-white/10 bg-[#0D1322]/80 px-3 py-1.5 text-xs text-slate-300 transition duration-200 hover:border-fuchsia-300/70 hover:text-fuchsia-100"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-8 grid gap-3 text-sm leading-7 text-slate-300">
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-fuchsia-200"></span>
        <p>接入腾讯 IM，完成实时聊天、消息同步、会话管理等社区沟通能力。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-fuchsia-200"></span>
        <p>集成阿里云语音能力，支撑 AI 聊天中的语音转写、语音合成与流式内容渲染。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-fuchsia-200"></span>
        <p>参与 Flutter 混合应用融合开发，处理 H5 与原生端通信适配及体验优化。</p>
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
