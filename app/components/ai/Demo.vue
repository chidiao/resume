<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">

    <!-- 网格背景 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>
    </div>

    <!-- 主内容区 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">

        <!-- 导航栏 -->
        <nav class="flex justify-center space-x-8 mb-12">
          <a href="#" class="text-white hover:text-blue-400 transition-colors">首页</a>
          <a href="#" class="text-white hover:text-blue-400 transition-colors">关于</a>
          <a href="#" class="text-white hover:text-blue-400 transition-colors">项目</a>
          <a href="#" class="text-white hover:text-blue-400 transition-colors">联系</a>
        </nav>

        <!-- 个人信息卡片 -->
        <div
          class="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-300">

          <!-- 头像 -->
          <div class="flex justify-center mb-6">
            <div
              class="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span class="text-white text-3xl font-bold">孙</span>
            </div>
          </div>

          <!-- 姓名与职位 -->
          <h1 class="text-4xl font-bold text-white mb-2">孙颖洲</h1>
          <p class="text-xl text-blue-300 mb-6">资深前端开发工程师</p>

          <!-- 技术标签 -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Vue 3</span>
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Nuxt 3</span>
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">UniApp</span>
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Web3</span>
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Flutter</span>
          </div>

          <!-- 个人简介 -->
          <p class="text-gray-200 mb-8 max-w-2xl mx-auto">
            深耕多端前端开发，擅长SSR/SSG渲染、跨端应用搭建、Web3链上应用开发，注重代码规范与用户体验，具备全流程项目落地能力。
          </p>

          <!-- 联系信息 -->
          <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-gray-300">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 11-2.827-2.827l4.243-4.242a8.012 8.012 0 111.414-1.414z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              河南新乡
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              离职，可随时入职
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
              sunyz94123@qq.com
            </div>
          </div>

          <!-- 行动按钮 -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              下载完整简历
            </a>
            <a href="#"
              class="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              浏览项目作品
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 这里可以添加您的业务逻辑
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>