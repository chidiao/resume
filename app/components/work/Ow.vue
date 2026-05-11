<template>
  <div class="w-full min-h-screen grid gap-8 lg:gap-16 lg:py-24 xl:gap-24 lg:grid-cols-2">
    <div class="relative w-full aspect-ratio lg:py-0">
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

    <div>
      <h3 class="text-[32px] text-[#00e5ff] flex gap-[14px] items-center">企业响应式官网</h3>

      <WorkTags :tags="tags" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, Autoplay } from 'swiper/modules'
import 'swiper/css'

const tags = ['Nuxt', 'UnoCSS', 'Responsive', 'i18n']

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

const setPcController = (swiper) => {
  pcController.value = swiper
}

const setMbController = (swiper) => {
  mbController.value = swiper
}
</script>

<style scoped></style>
