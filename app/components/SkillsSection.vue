<template>
  <section class="py-24 relative overflow-hidden bg-gray-900">
    <!-- 网格背景 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 区块头部 -->
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white mb-4">
          专业技术栈
        </h2>
        <p class="text-blue-300/80 text-lg">深耕前端多领域 · 全链路项目实战开发</p>
        <p class="text-gray-400 mt-3 max-w-2xl mx-auto">
          精通主流前端框架与跨端开发，兼顾业务落地与特色场景开发，注重代码规范与项目性能优化
        </p>
      </div>

      <!-- 技能卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 1. 核心开发框架 -->
        <div
          class="group bg-white/5 backdrop-blur-md border border-blue-500/15 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 mb-5 group-hover:bg-blue-500/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <!-- 核心指标 -->
          <div class="mb-2">
            <span class="text-4xl font-bold text-blue-400">5年+</span>
            <span class="text-gray-400 text-sm ml-1">Vue 生态</span>
          </div>

          <h3 class="text-white font-semibold text-lg mb-4">核心开发框架</h3>

          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/15">Vue3</span>
            <span class="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/15">Nuxt3</span>
            <span class="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/15">UniApp</span>
            <span class="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/15">SSR/SSG</span>
          </div>
        </div>

        <!-- 2. 企业官网 -->
        <div
          class="group bg-white/5 backdrop-blur-md border border-emerald-500/15 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 mb-5 group-hover:bg-emerald-500/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>

          <!-- 核心指标 -->
          <div class="mb-2">
            <span class="text-4xl font-bold text-emerald-400">10+</span>
            <span class="text-gray-400 text-sm ml-1">案例</span>
          </div>

          <h3 class="text-white font-semibold text-lg mb-4">企业响应式官网</h3>

          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm border border-emerald-500/15">TS</span>
            <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm border border-emerald-500/15">Tailwind</span>
            <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm border border-emerald-500/15">i18n</span>
            <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm border border-emerald-500/15">SEO</span>
          </div>
        </div>

        <!-- 3. 特色业务技术 -->
        <div
          class="group bg-white/5 backdrop-blur-md border border-amber-500/15 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500/10 mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <!-- 核心指标 -->
          <div class="mb-2">
            <span class="text-4xl font-bold text-amber-400">3大</span>
            <span class="text-gray-400 text-sm ml-1">方向</span>
          </div>

          <h3 class="text-white font-semibold text-lg mb-4">特色业务技术</h3>

          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/15">Web3</span>
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/15">IM 即时通讯</span>
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/15">AI 语音</span>
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/15">数据可视化</span>
          </div>
        </div>

        <!-- 4. 拓展能力 -->
        <div
          class="group bg-white/5 backdrop-blur-md border border-purple-500/15 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 mb-5 group-hover:bg-purple-500/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>

          <!-- 核心指标 -->
          <div class="mb-2">
            <span class="text-4xl font-bold text-purple-400">Flutter</span>
            <span class="text-gray-400 text-sm ml-1"></span>
          </div>

          <h3 class="text-white font-semibold text-lg mb-4">跨端拓展能力</h3>

          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/15">小程序</span>
            <span class="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/15">性能优化</span>
            <span class="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/15">多语言</span>
            <span class="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/15">Git 协作</span>
          </div>
        </div>
      </div>

      <!-- 底部经验条 -->
      <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
          <div class="text-2xl font-bold text-white">6 年</div>
          <div class="text-gray-400 text-sm mt-1">前端开发经验</div>
        </div>
        <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
          <div class="text-2xl font-bold text-blue-400">3 套</div>
          <div class="text-gray-400 text-sm mt-1">主流框架精通</div>
        </div>
        <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
          <div class="text-2xl font-bold text-emerald-400">10+</div>
          <div class="text-gray-400 text-sm mt-1">企业项目落地</div>
        </div>
        <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
          <div class="text-2xl font-bold text-amber-400">3 大</div>
          <div class="text-gray-400 text-sm mt-1">特色业务方向</div>
        </div>
      </div>
    </div>
  </section>
</template>