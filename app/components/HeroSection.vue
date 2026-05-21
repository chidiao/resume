<template>
  <section id="home" class="relative min-h-screen overflow-hidden bg-gray-900 font-sans text-white">
    <div class="absolute inset-0 z-0" :style="gridStyle"></div>

    <!-- 内容层 -->
    <div
      class="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-12 md:px-12"
    >
      <div class="w-full max-w-3xl">
        <!-- 状态徽章 -->
        <div
          class="mb-6 inline-flex items-center rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-sm backdrop-blur-sm"
        >
          <span class="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
          <span class="text-gray-300">开放求职 · 可快速到岗</span>
        </div>

        <!-- 姓名和标题 -->
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          孙颖洲
          <span class="mt-2 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            前端工程师
          </span>
        </h1>

        <!-- 简短描述 -->
        <p class="my-6 text-lg leading-relaxed text-gray-300 md:text-xl">
          6年经验<br class="hidden sm:block" />
          深耕
          <span class="font-semibold text-white">Vue3 / Nuxt / UniApp</span>
          前端开发，<br class="hidden sm:block" />
          具备
          <span class="font-semibold text-white">Web3 · IM · Flutter</span>
          实战经验。
        </p>

        <!-- 行动按钮 -->
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="rounded-full bg-blue-600 px-8 py-3 font-medium transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            查看项目作品
          </a>
          <a
            href="/孙颖洲2026.pdf"
            download
            class="rounded-full border border-gray-600 px-8 py-3 font-medium transition-all hover:border-gray-400 hover:bg-white/10"
          >
            下载简历 PDF
          </a>
        </div>

        <!-- 辅助信息 -->
        <div class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>河南 · 新乡</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>sunyz94123@qq.com</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <HeroImage /> -->
  </section>
</template>

<script setup>
const gridStyle = computed(() => ({
  backgroundImage: `
    linear-gradient(to right, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
  backgroundPosition: 'center center'
}))
</script>
