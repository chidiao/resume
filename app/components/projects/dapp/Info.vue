<template>
  <div class="relative">
    <div class="mb-6 inline-flex items-center gap-2 border border-violet-300/25 bg-violet-300/8 px-3 py-1.5 text-xs font-medium text-violet-100">
      <span class="i-fa-solid-wallet size-3.5"></span>
      <span>04 / Web3 DApp Wallet</span>
    </div>

    <div class="space-y-5">
      <p class="font-mono text-sm text-cyan-300">projects.web3.connect()</p>
      <h2 class="max-w-[620px] text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-6xl">
        Web3 DApp 钱包
      </h2>
      <p class="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        参与 Web3 DApp、加密钱包与交易平台相关项目开发，覆盖钱包连接、资产展示、链上交互、交易图表与移动端 H5 体验。
      </p>
    </div>

    <div class="mt-7 grid gap-3 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.label"
        class="cursor-pointer border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-violet-300/70 hover:bg-violet-300/8 hover:shadow-[0_0_26px_rgba(139,92,246,0.16)]"
      >
        <span :class="[item.icon, 'size-4 text-violet-200']"></span>
        <div class="mt-3 font-mono text-lg font-semibold text-white">{{ item.value }}</div>
        <div class="mt-1 text-xs text-slate-400">{{ item.label }}</div>
      </div>
    </div>

    <div class="mt-7 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="cursor-pointer border border-white/10 bg-[#0D1322]/80 px-3 py-1.5 text-xs text-slate-300 transition duration-200 hover:border-violet-300/70 hover:text-violet-100"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-8 grid gap-3 text-sm leading-7 text-slate-300">
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-violet-200"></span>
        <p>开发 DApp 钱包相关前端能力，覆盖钱包连接、账户展示、资产余额与发送接收等流程。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-violet-200"></span>
        <p>使用 web3.js、Wagmi 等库对接链上交互，并处理移动端 H5 兼容体验。</p>
      </div>
      <div class="flex gap-3">
        <span class="i-fa-solid-check mt-1.5 size-4 flex-none text-violet-200"></span>
        <p>结合 Klinecharts、收益统计、排行榜等模块完成资产和交易数据可视化。</p>
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
