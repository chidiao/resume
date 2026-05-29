<script setup lang="ts">
interface FooterLink {
  label: string
  caption: string
  url: string
  icon: string
}

const links: FooterLink[] = [
  {
    label: '项目源码',
    caption: 'github.com/chidiao/resume',
    url: 'https://github.com/chidiao/resume',
    icon: 'i-fa-solid-code-branch'
  },
  {
    label: '过往版本',
    caption: '2023.chidiao.xin',
    url: 'https://2023.chidiao.xin',
    icon: 'i-fa-solid-history'
  },
  {
    label: '联系邮箱',
    caption: 'sunyz94123@qq.com',
    url: 'mailto:sunyz94123@qq.com',
    icon: 'i-fa-solid-envelope'
  }
]

const copyright = '© 2026 chidiao.xin 版权所有'
</script>

<template>
  <footer class="relative overflow-hidden bg-[#050914] px-4 py-10 sm:px-6" role="contentinfo">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/26 to-transparent"
      aria-hidden="true"
    />

    <div class="mx-auto w-full max-w-6xl">
      <div
        class="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-6 lg:grid-cols-[0.9fr_1.4fr]"
      >
        <div class="flex min-w-0 flex-col justify-between gap-5">
          <div class="flex items-center gap-3">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            >
              <span class="i-fa-solid-terminal h-5 w-5" />
            </span>
            <div class="min-w-0">
              <p class="text-sm font-semibold tracking-[0.16em] text-white">孙颖洲的简历</p>
              <p class="mt-1 text-xs tracking-[0.12em] text-slate-500">Vue3 / Nuxt / UniApp</p>
            </div>
          </div>

          <p class="max-w-md text-sm leading-6 text-slate-400">
            聚焦前端工程、响应式官网、多端产品与暗色系界面实现，持续打磨可交付的项目体验。
          </p>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl border border-white/8 bg-black/16 p-4 outline-none transition-all duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-200 group-hover:border-cyan-300/28 group-hover:text-cyan-100"
            >
              <span :class="link.icon" class="h-4 w-4" />
            </span>
            <span class="min-w-0">
              <span class="flex items-center gap-2 text-sm font-medium text-slate-100">
                {{ link.label }}
                <span
                  class="i-fa-solid-external-link-alt h-3 w-3 text-slate-500 transition-colors duration-200 group-hover:text-cyan-200"
                />
              </span>
              <span
                class="mt-1 block truncate text-xs text-slate-500 transition-colors duration-200 group-hover:text-slate-300"
              >
                {{ link.caption }}
              </span>
            </span>
          </a>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ copyright }}</p>
        <p class="text-slate-700">本站由 Nuxt 构建</p>
      </div>
    </div>
  </footer>
</template>
