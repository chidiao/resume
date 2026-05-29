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
          <p class="text-xs text-sky-200">Flutter 协作面板</p>
          <p class="mt-1 truncate text-sm font-medium text-white">暂无截图，以经历说明和可访问版本补充展示</p>
        </div>

        <div
          class="hidden items-center gap-2 border border-sky-300/20 bg-sky-300/8 px-3 py-2 text-xs font-medium text-sky-100 sm:inline-flex"
        >
          <span class="i-fa-solid-terminal size-3"></span>
          <span>协作模块</span>
        </div>
      </div>

      <div class="grid gap-4 lg:grid-cols-[minmax(300px,0.95fr)_minmax(260px,1.05fr)]">
        <div class="border border-white/10 bg-[#0D1322]/82 p-4 backdrop-blur-md">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="text-xs text-sky-200">参与范围</p>
              <h3 class="mt-1 text-xl font-semibold text-white">范围有限，但确有参与</h3>
            </div>
            <span class="i-fa-solid-code-branch size-4 text-cyan-200"></span>
          </div>

          <div class="overflow-hidden border border-white/10 bg-[#050816] p-4 text-xs leading-6 text-slate-300">
            <p><span class="text-sky-300">角色：</span>Flutter 协作 / 功能补位</p>
            <p><span class="text-sky-300">周期：</span>2 个项目，总计约 5-6 个月</p>
            <p><span class="text-sky-300">主要工作：</span>页面 UI、接口联调、数据渲染</p>
            <p><span class="text-sky-300">补充能力：</span>AI 聊天、语音转写、流式内容</p>
            <p><span class="text-sky-300">说明：</span>非主力深度技术栈，定位为协作型经历</p>
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
                <p class="text-xs text-cyan-200">项目脉络</p>
                <h3 class="mt-1 text-xl font-semibold text-white">经历背景</h3>
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
                  class="grid size-8 flex-none place-items-center border border-sky-300/25 bg-sky-300/10 text-xs text-sky-100"
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
              <p class="text-xs text-sky-200">可访问版本</p>
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
    title: 'Rustar Flutter 版本',
    text: '参与约 2 个多月，原应用商店版本已下架，当前仅保留 H5 和其他原生版本可访问。'
  },
  {
    title: 'MarsXAI 早期版本',
    text: '前期使用 Flutter 开发，并在该阶段开始搭配 AI 辅助完成业务迭代。'
  },
  {
    title: '后续 H5 重构',
    text: '项目后续重构为 H5，成为当前游戏社区类项目中的 Flutter 套壳 H5 形态。'
  }
]
</script>
