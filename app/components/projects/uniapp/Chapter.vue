<template>
  <section class="scroll-mt-24 px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(620px,1.18fr)] lg:gap-16 xl:gap-24"
    >
      <ProjectsUniappInfo :stats="stats" :tags="tags" />
      <ProjectsUniappPreview :apps="apps" />
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['uni-app', 'uView', '微信小程序', 'App', '腾讯 IM', '小程序支付', '权限适配']

const stats = [
  { icon: 'i-fa-solid-layer-group', value: 'uni-app', label: '跨端框架' },
  { icon: 'i-fa-solid-qrcode', value: 'Mini Program', label: '小程序场景' },
  { icon: 'i-fa-solid-sync-alt', value: 'Version', label: '版本适配' }
]

const apps = [
  {
    name: 'MarsX',
    logo: '/img/mini/marsx.jpg',
    type: '社区小程序',
    screenshots: [
      '/img/mini/marsx1.png',
      '/img/mini/marsx2.png',
      '/img/mini/marsx3.png',
      '/img/mini/marsx4.png',
      '/img/mini/marsx5.png'
    ]
  },
  {
    name: '乐朴 ERP',
    logo: '/img/mini/lepu.jpg',
    type: '业务管理系统',
    screenshots: [
      '/img/mini/lepu1.png',
      '/img/mini/lepu2.png',
      '/img/mini/lepu3.png',
      '/img/mini/lepu4.png',
      '/img/mini/lepu5.png'
    ]
  }
]
</script>
