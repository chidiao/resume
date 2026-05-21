<template>
  <section class="py-24 relative overflow-hidden bg-gray-900">
    <!-- 延续首屏网格背景 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 区块头部 -->
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white mb-4">专业技术栈</h2>
        <p class="text-blue-300 text-lg">深耕前端多领域 · 全链路项目实战开发</p>
        <p class="text-gray-400 mt-3 max-w-2xl mx-auto">
          精通主流前端框架与跨端开发，兼顾业务落地与特色场景开发，注重代码规范与项目性能优化
        </p>
      </div>

      <!-- 技能卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 1. 核心框架 -->
        <div
          class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
        >
          <div class="text-blue-400 text-3xl mb-4">⚙️</div>
          <h3 class="text-white font-semibold text-xl mb-3">核心开发框架</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-500/15 text-blue-300 rounded text-sm">Vue3</span>
            <span class="px-2 py-1 bg-blue-500/15 text-blue-300 rounded text-sm">Nuxt3</span>
            <span class="px-2 py-1 bg-blue-500/15 text-blue-300 rounded text-sm">UniApp</span>
            <span class="px-2 py-1 bg-blue-500/15 text-blue-300 rounded text-sm">SSR/SSG</span>
          </div>
        </div>

        <!-- 2. 样式与工程化 -->
        <div
          class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
        >
          <div class="text-emerald-400 text-3xl mb-4">🎨</div>
          <h3 class="text-white font-semibold text-xl mb-3">样式与工程化</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-emerald-500/15 text-emerald-300 rounded text-sm">TS</span>
            <span class="px-2 py-1 bg-emerald-500/15 text-emerald-300 rounded text-sm">Tailwind</span>
            <span class="px-2 py-1 bg-emerald-500/15 text-emerald-300 rounded text-sm">Git</span>
            <span class="px-2 py-1 bg-emerald-500/15 text-emerald-300 rounded text-sm">组件封装</span>
          </div>
        </div>

        <!-- 3. 特色实战技术 -->
        <div
          class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
        >
          <div class="text-amber-400 text-3xl mb-4">🚀</div>
          <h3 class="text-white font-semibold text-xl mb-3">特色业务技术</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-amber-500/15 text-amber-300 rounded text-sm">Web3</span>
            <span class="px-2 py-1 bg-amber-500/15 text-amber-300 rounded text-sm">IM即时通讯</span>
            <span class="px-2 py-1 bg-amber-500/15 text-amber-300 rounded text-sm">AI语音</span>
            <span class="px-2 py-1 bg-amber-500/15 text-amber-300 rounded text-sm">数据可视化</span>
          </div>
        </div>

        <!-- 4. 拓展能力 -->
        <div
          class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
        >
          <div class="text-purple-400 text-3xl mb-4">💡</div>
          <h3 class="text-white font-semibold text-xl mb-3">拓展开发能力</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-purple-500/15 text-purple-300 rounded text-sm">Flutter</span>
            <span class="px-2 py-1 bg-purple-500/15 text-purple-300 rounded text-sm">小程序</span>
            <span class="px-2 py-1 bg-purple-500/15 text-purple-300 rounded text-sm">性能优化</span>
            <span class="px-2 py-1 bg-purple-500/15 text-purple-300 rounded text-sm">多语言</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
