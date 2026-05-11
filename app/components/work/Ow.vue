<template>
  <div class="w-full grid gap-8 lg:gap-16 xl:gap-24 md:grid-cols-2 md:items-center">
    <div class="relative w-full h-auto aspect-square">
      <div class="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden z-10 left-0">
        <WorkPc class="w-full relative">
          <Swiper
            :autoplay="{ delay: 5000 }"
            :modules="[Controller, Autoplay]"
            @swiper="setPcController"
            :controller="{ control: mbController }"
            class="w-full"
          >
            <SwiperSlide v-for="(slide, index) in pcSlides" :key="index">
              <img :src="slide" />
            </SwiperSlide>
          </Swiper>
        </WorkPc>
      </div>

      <div class="absolute top-1/2 -translate-y-1/2 right-8 -lg:right-12 z-12">
        <WorkMb class="w-[160px] lg:w-[200px] xl:w-[240px]">
          <Swiper
            :modules="[Controller, Autoplay]"
            @swiper="setMbController"
            :controller="{ control: pcController }"
            class="w-full"
          >
            <SwiperSlide v-for="(slide, index) in mbSlides" :key="index">
              <img :src="slide" />
            </SwiperSlide>
          </Swiper>
        </WorkMb>
      </div>
    </div>

    <div class="max-w-[500px]">
      <h3 class="text-xl lg:text-3xl text-[#00e5ff] flex gap-[14px] items-center py-5">企业响应式官网</h3>

      <div class="grid gap-4 text-sm text-gray-200 py-5 line-height-loose">
        <div v-for="(item, index) in experienceList" :key="index" class="flex">
          <SvgCheck class="stroke-cyan-500 size-5 mr-2 mt-1" />

          <p class="flex-1">{{ item }}</p>
        </div>
      </div>

      <WorkTags :tags="tags" />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, Autoplay } from 'swiper/modules'
import 'swiper/css'

const SvgCheck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

const experienceList = [
  '拥有丰富企业官网开发经验，基于 Vue、Nuxt 进行项目搭建与业务开发，掌握 SPA、SSR、SSG 等多种渲染模式',
  '熟练使用 TailwindCSS、UnoCSS 原子化方案开展响应式开发，精准适配 PC、平板、移动端全尺寸屏幕布局',
  '熟练运用 Swiper、GSAP 等各类前端插件，实现多样化页面动画与交互',
  '独立完成项目 国际化 i18n、通用业务组件封装、路由规整、浏览器兼容适配、页面性能优化 等前端核心开发工作'
]

const tags = ['Nuxt', 'UnoCSS', 'Responsive', 'Swiper', 'GSAP', 'i18n']

const pcSlides = [
  '/img/marsx-old-ow-pc.jpg',
  '/img/panda-ow-pc1.jpg',
  '/img/panda-ow-pc2.jpg',
  '/img/crm-ow-pc.jpg',
  '/img/loli-ow-pc.jpg',
  '/img/tank-ow-pc.jpg'
]

const mbSlides = [
  '/img/marsx-old-ow-mb.jpg',
  '/img/panda-ow-mb1.jpg',
  '/img/panda-ow-mb2.jpg',
  '/img/crm-ow-mb.jpg',
  '/img/loli-ow-mb.jpg',
  '/img/tank-ow-mb.jpg'
]

const pcController = ref(null)
const mbController = ref(null)

const setPcController = (swiper: any) => {
  pcController.value = swiper
}

const setMbController = (swiper: any) => {
  mbController.value = swiper
}
</script>

<style scoped></style>
