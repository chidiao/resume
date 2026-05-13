<template>
  <WorkAppGallery v-model:activeIndex="activeIndex" :appList="appList">
    <WorkDescription title="游戏社区H5" :experienceList="experienceList" :tags="tags">
      <WorkPreviewLinks title="前往各应用商店体验：" :linkList="links" />
    </WorkDescription>
  </WorkAppGallery>
</template>

<script setup>
const activeIndex = ref(0)

const links = [
  { label: 'OlympusX', url: 'https://sj.qq.com/appdetail/com.itopline.olympusx' },
  { label: 'MarsXAI', url: 'https://sj.qq.com/appdetail/com.itopline.marsx.ai' }
]

const appList = ref([
  {
    name: 'OlympusX',
    logo: '/img/olyx/olyx.png',
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
    logo: '/img/olyx/mxai.png',
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
