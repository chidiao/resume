<template>
  <section class="flex min-h-dvh scroll-mt-16 items-center px-5 py-20 md:px-10 lg:h-dvh lg:px-14 lg:py-16">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(620px,1.18fr)] lg:gap-16 xl:gap-24"
    >
      <ProjectsGameInfo :stats="stats" :tags="tags" />
      <ProjectsGamePreview :apps="apps" />
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Nuxt', 'UnoCSS', '腾讯 IM', 'AI 语音', '流式数据', 'Flutter Bridge', 'H5']

const stats = [
  { icon: 'i-fa-solid-comments', value: 'IM', label: '即时通讯' },
  { icon: 'i-fa-solid-microphone-alt', value: 'AI Voice', label: '语音交互' },
  { icon: 'i-fa-solid-mobile-alt', value: 'H5 / App', label: '混合容器' }
]

const apps = [
  {
    name: 'OlympusX',
    logo: '/img/olyx/olyx.png',
    type: 'Game Community',
    url: 'https://sj.qq.com/appdetail/com.itopline.olympusx',
    screenshots: [
      '/img/olyx/olyx1.png',
      '/img/olyx/olyx2.png',
      '/img/olyx/olyx3.png',
      '/img/olyx/olyx4.png',
      '/img/olyx/olyx5.png',
      '/img/olyx/olyx6.png'
    ]
  },
  {
    name: 'MarsXAI',
    logo: '/img/olyx/mxai.png',
    type: 'AI Chat Community',
    url: 'https://sj.qq.com/appdetail/com.itopline.marsx.ai',
    screenshots: [
      '/img/olyx/mxai1.png',
      '/img/olyx/mxai2.png',
      '/img/olyx/mxai3.png',
      '/img/olyx/mxai4.png',
      '/img/olyx/mxai5.png'
    ]
  }
]
</script>
