<template>
  <div class="w-full rounded-xl p-5 md:p-8 py-10 md:py-16">
    <div class="px-0 md:px-4 lg:px-8">
      <div
        class="flex gap-4 sm:gap-5 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10 overflow-x-auto snap-x snap-mandatory scrollbar-none md:overflow-visible md:snap-none"
      >
        <div
          v-for="(img, idx) in appList[activeAppIndex].screenshots"
          :key="idx"
          class="flex-shrink-0 w-[62vw] md:flex-1 md:min-w-0 snap-center rounded-xl overflow-hidden transition-all duration-400 ease-out md:hover:scale-105"
          :class="idx % 2 === 0 ? 'md:-translate-y-5 lg:-translate-y-8' : 'md:translate-y-5 lg:translate-y-8'"
        >
          <img :src="img.src" alt="App截图" class="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>

    <div class="flex justify-center items-start gap-8 md:gap-10 lg:gap-12">
      <button
        v-for="(item, idx) in appList"
        :key="idx"
        @click="activeAppIndex = idx"
        class="flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer"
        :class="activeAppIndex === idx ? 'scale-110' : 'opacity-40 hover:opacity-70 grayscale'"
      >
        <div
          class="rounded-full p-0.5 transition-all duration-300"
          :class="activeAppIndex === idx ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' : ''"
        >
          <img :src="item.logo" :alt="item.name" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        </div>
        <span
          class="text-xs md:text-sm font-medium transition-colors duration-300"
          :class="activeAppIndex === idx ? 'text-white' : 'text-gray-500'"
        >
          {{ item.name }}
        </span>
      </button>
    </div>

    <WorkDescription title="游戏社区H5" :experienceList="experienceList" :tags="tags" />
  </div>
</template>

<script setup>
const activeAppIndex = ref(0)

const appList = ref([
  {
    name: 'OlympusX',
    logo: '/img/olyx.png',
    screenshots: [
      { src: '/img/olyx/olyx1.png' },
      { src: '/img/olyx/olyx2.png' },
      { src: '/img/olyx/olyx3.png' },
      { src: '/img/olyx/olyx4.png' },
      { src: '/img/olyx/olyx5.png' }
    ]
  },
  {
    name: 'MarsXAI',
    logo: '/img/mxai.png',
    screenshots: [
      { src: '/img/olyx/mxai1.png' },
      { src: '/img/olyx/mxai2.png' },
      { src: '/img/olyx/mxai3.png' },
      { src: '/img/olyx/mxai4.png' },
      { src: '/img/olyx/mxai5.png' }
    ]
  }
])

const experienceList = [
  '负责游戏社区纯 H5 应用前端开发，实现动态发帖、评论互动等社交功能',
  '接入腾讯 IM 即时通讯 SDK，完成实时聊天、消息同步与会话管理等基础能力',
  '负责项目全页面 UI 定制与视觉还原，实现个性化界面样式及交互视觉效果',
  '集成阿里云语音服务，实现语音转文字、文字转语音、语音合成与流式数据接收，支撑 AI 聊天交互',
  '参与 Flutter 混合应用融合开发，完成 H5 与原生端的通讯适配及体验优化'
]

const tags = ['Nuxt', 'UnoCSS', '腾讯IM', '阿里云语音', '流式数据']
</script>

<style scoped>
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
