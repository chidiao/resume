<template>
  <div class="relative mx-auto w-full max-w-[760px] overflow-hidden lg:max-w-none">
    <div
      class="absolute -inset-6 bg-[radial-gradient(circle_at_56%_28%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_24%_76%,rgba(14,165,233,0.12),transparent_30%)] opacity-90 blur-2xl"
    ></div>

    <div class="relative">
      <div
        class="mb-4 flex min-w-0 items-center justify-between gap-4 border border-white/10 bg-[#0D1322]/80 px-4 py-3 backdrop-blur"
      >
        <div class="min-w-0">
          <p class="font-mono text-xs text-sky-200">flutter.runtime.panel</p>
          <p class="mt-1 truncate text-sm font-medium text-white">Collaboration notes / No screenshots</p>
        </div>

        <div
          class="hidden items-center gap-2 border border-sky-300/20 bg-sky-300/8 px-3 py-2 text-xs font-medium text-sky-100 sm:inline-flex"
        >
          <span class="i-fa-solid-terminal size-3"></span>
          <span>Dart modules</span>
        </div>
      </div>

      <div class="grid gap-4 lg:grid-cols-[minmax(300px,0.95fr)_minmax(260px,1.05fr)]">
        <div class="border border-white/10 bg-[#0D1322]/82 p-4 backdrop-blur-md">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="font-mono text-xs text-sky-200">flutter/collaboration_scope</p>
              <h3 class="mt-1 text-xl font-semibold text-white">Limited but Real Scope</h3>
            </div>
            <span class="i-fa-solid-code-branch size-4 text-cyan-200"></span>
          </div>

          <div
            class="overflow-hidden border border-white/10 bg-[#050816] p-4 font-mono text-xs leading-6 text-slate-300"
          >
            <p><span class="text-sky-300">role</span>: Flutter 协作 / 功能补位</p>
            <p><span class="text-sky-300">duration</span>: 2 个项目，总计约 5-6 个月</p>
            <p><span class="text-sky-300">main</span>: UI、接口联调、数据渲染</p>
            <p><span class="text-sky-300">extra</span>: AI Chat、语音转写、流式内容</p>
            <p><span class="text-sky-300">note</span>: 非主力深度技术栈</p>
            <p class="pl-4">{{ '}' }}</p>
            <p>{{ '}' }}</p>
          </div>

          <div class="mt-4 grid gap-3">
            <div
              v-for="item in modules"
              :key="item.title"
              class="cursor-pointer border border-white/10 bg-white/[0.035] p-3 transition duration-200 hover:border-sky-300/70 hover:bg-sky-300/8"
            >
              <div class="flex items-center gap-3">
                <span :class="[item.icon, 'size-4 flex-none text-sky-200']"></span>
                <h4 class="text-sm font-semibold text-white">{{ item.title }}</h4>
              </div>
              <p class="mt-2 text-xs leading-6 text-slate-400">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="border border-white/10 bg-[#0D1322]/82 p-4 backdrop-blur-md">
            <div class="mb-5 flex items-center justify-between">
              <div>
                <p class="font-mono text-xs text-cyan-200">project.timeline</p>
                <h3 class="mt-1 text-xl font-semibold text-white">Project Context</h3>
              </div>
              <span class="i-fa-solid-project-diagram size-4 text-cyan-200"></span>
            </div>

            <div class="grid gap-3">
              <div
                v-for="(step, index) in flow"
                :key="step.title"
                class="relative flex gap-3 border border-white/10 bg-white/[0.035] p-3"
              >
                <div
                  class="grid size-8 flex-none place-items-center border border-sky-300/25 bg-sky-300/10 font-mono text-xs text-sky-100"
                >
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ step.title }}</h4>
                  <p class="mt-1 text-xs leading-6 text-slate-400">{{ step.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="border border-white/10 bg-[#0D1322]/82 p-4 backdrop-blur-md">
            <div class="mb-4 flex items-center justify-between">
              <p class="font-mono text-xs text-sky-200">available.versions</p>
              <span class="i-fa-solid-external-link-alt size-3 text-sky-200"></span>
            </div>

            <div class="grid gap-2 sm:grid-cols-2">
              <a
                v-for="link in links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex cursor-pointer items-center justify-between gap-3 border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-sm font-medium text-sky-100 transition duration-200 hover:border-sky-200 hover:bg-sky-300/18"
              >
                <span class="truncate">{{ link.label }}</span>
                <span class="i-fa-solid-external-link-alt size-3 flex-none"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FlutterModule {
  icon: string
  title: string
  text: string
}

interface FlutterLink {
  label: string
  url: string
}

defineProps<{
  modules: FlutterModule[]
  links: FlutterLink[]
}>()

const flow = [
  {
    title: 'Rustar Flutter',
    text: '参与约 2 个多月，原应用商店版本已下架，当前仅保留 H5 和其他原生版本可访问。'
  },
  {
    title: 'MarsXAI Flutter',
    text: '前期使用 Flutter 开发，并在该阶段开始搭配 AI 辅助完成业务迭代。'
  },
  {
    title: 'H5 Refactor',
    text: '后续项目重构为 H5，成为当前游戏社区类项目中的 Flutter 套壳 H5 形态。'
  }
]
</script>
