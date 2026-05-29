<template>
  <section class="flex min-h-dvh scroll-mt-16 items-center px-5 py-20 md:px-10 lg:h-dvh lg:px-14 lg:py-16">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(620px,1.18fr)] lg:gap-16 xl:gap-24"
    >
      <ProjectsWebsiteInfo :stats="stats" :tags="tags" />
      <ProjectsWebsitePreview :projects="projects" />
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Nuxt', 'Vue3', 'UnoCSS', 'Responsive', 'SSR / SSG', 'i18n', 'Swiper', 'GSAP']

const stats = [
  { value: 'PC + MB', label: '响应式预览' },
  { value: 'SSR / SSG', label: '渲染模式' },
  { value: 'i18n', label: '国际化交付' }
]

const projects = [
  {
    name: 'MarsX',
    pc: '/img/marsx-old-ow-pc.jpg',
    mobile: '/img/marsx-old-ow-mb.jpg',
    type: 'Gaming Website',
    url: 'https://marsx.itopline.com/'
  },
  {
    name: 'Panda',
    pc: '/img/panda-ow-pc1.jpg',
    mobile: '/img/panda-ow-mb1.jpg',
    type: 'Brand Website',
    url: 'https://panda.chidiao.xin/'
  },
  {
    name: 'Panda Detail',
    pc: '/img/panda-ow-pc2.jpg',
    mobile: '/img/panda-ow-mb2.jpg',
    type: 'Responsive Page'
  },
  {
    name: 'CRM',
    pc: '/img/crm-ow-pc.jpg',
    mobile: '/img/crm-ow-mb.jpg',
    type: 'Business Website'
  },
  {
    name: 'Lollipop',
    pc: '/img/loli-ow-pc.jpg',
    mobile: '/img/loli-ow-mb.jpg',
    type: 'Landing Page'
  },
  {
    name: 'Tank',
    pc: '/img/tank-ow-pc.jpg',
    mobile: '/img/tank-ow-mb.jpg',
    type: 'Product Website',
    url: 'https://tank.chidiao.xin/'
  }
]
</script>
