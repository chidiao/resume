<template>
  <div>
    <CommonSectionHero
      label="小程序 · 跨端开发"
      title-prefix="Mini /"
      title-highlight="Program"
      description="基于 uni-app 框架开发微信小程序，涵盖社交社区与 ERP 管理系统，完成页面交互、数据对接与版本适配。"
      :tags="tags"
    />

    <div class="max-w-6xl mx-auto px-6 md:px-12 py-8">
      <WorkAppGallery v-model:activeIndex="activeIndex" :appList="appList">
    <div class="w-full grid gap-5 py-5 md:grid-cols-2 md:items-center">
      <WorkDescription title="微信小程序" :experienceList="experienceList" :tags="tags" />

      <NuxtImg src="/img/mini-marsx.jpg" class="w-full h-auto sm:w-1/2 mx-auto max-w-[200px]" width="200" loading="lazy" format="webp" />
    </div>
  </WorkAppGallery>
    </div>
  </div>
</template>

<script setup>
const activeIndex = ref(0)

const appList = ref([
  {
    name: 'MarsX',
    logo: '/img/mini/marsx.jpg',
    screenshots: [
      { src: '/img/mini/marsx1.png' },
      { src: '/img/mini/marsx2.png' },
      { src: '/img/mini/marsx3.png' },
      { src: '/img/mini/marsx4.png' },
      { src: '/img/mini/marsx5.png' }
    ]
  },
  {
    name: '乐朴ERP',
    logo: '/img/mini/lepu.jpg',
    screenshots: [
      { src: '/img/mini/lepu1.png' },
      { src: '/img/mini/lepu2.png' },
      { src: '/img/mini/lepu3.png' },
      { src: '/img/mini/lepu4.png' },
      { src: '/img/mini/lepu5.png' }
    ]
  }
])

const experienceList = [
  '基于 uni-app 框架开发微信小程序，完成项目页面搭建与业务功能开发',
  '负责页面交互逻辑实现、数据接口对接、路由管理与状态维护',
  '根据设计需求完成 UI 视觉还原与样式定制，保障界面展示一致性',
  '处理小程序权限适配、版本更新、异常处理及体验优化相关工作'
]

const tags = ['uni-app', 'uView', '腾讯IM', '小程序支付', '流式数据']
</script>
