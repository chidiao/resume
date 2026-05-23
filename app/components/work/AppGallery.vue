<template>
  <div class="w-full rounded-xl p-5 md:p-8 py-10 md:py-16">
    <div class="px-0 md:px-4 md:pb-8 lg:px-8">
      <div
        class="flex gap-4 sm:gap-5 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10 overflow-x-auto snap-x snap-mandatory scrollbar-none md:overflow-visible md:snap-none"
      >
        <div
          v-for="(img, idx) in appList[activeIndex]?.screenshots ?? []"
          :key="idx"
          class="flex-shrink-0 w-[62vw] md:flex-1 md:min-w-0 snap-center rounded-xl overflow-hidden transition-all duration-400 ease-out md:hover:scale-105"
          :class="idx % 2 === 0 ? 'md:-translate-y-5 lg:-translate-y-8' : 'md:translate-y-5 lg:translate-y-8'"
        >
          <NuxtImg :src="img.src" alt="App截图" class="w-full h-auto rounded-xl" sizes="sm:60vw md:30vw lg:250px" loading="lazy" format="webp" />
        </div>
      </div>
    </div>

    <div class="flex justify-center items-start gap-8 py-8 md:py-12 md:gap-10 lg:gap-12">
      <button
        v-for="(item, idx) in appList"
        :key="idx"
        @click="activeIndex = idx"
        class="flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer"
        :class="activeIndex === idx ? 'scale-110' : 'opacity-40 hover:opacity-70 grayscale'"
      >
        <div
          class="rounded-full p-0.5 transition-all duration-300"
          :class="activeIndex === idx ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' : ''"
        >
          <NuxtImg :src="item.logo" :alt="item.name" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" width="48" height="48" loading="lazy" format="webp" />
        </div>
        <span
          class="text-xs md:text-sm font-medium transition-colors duration-300"
          :class="activeIndex === idx ? 'text-white' : 'text-gray-500'"
        >
          {{ item.name }}
        </span>
      </button>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface ScreenshotItem {
  src: string
}

interface AppItem {
  name: string
  logo: string
  screenshots: ScreenshotItem[]
}

const activeIndex = defineModel<number>({ default: 0 })

defineProps<{
  appList: AppItem[]
}>()
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
