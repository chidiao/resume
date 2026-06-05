<template>
  <div class="relative mx-auto w-full max-w-[760px] overflow-hidden lg:max-w-none">
    <div
      class="absolute -inset-6 bg-[radial-gradient(circle_at_55%_32%,rgba(217,70,239,0.22),transparent_32%),radial-gradient(circle_at_28%_78%,rgba(56,189,248,0.14),transparent_30%)] opacity-90 blur-2xl"
    ></div>

    <div class="relative">
      <div
        class="mb-4 flex min-w-0 items-center justify-between gap-4 border border-white/10 bg-[#0D1322]/80 px-4 py-3 backdrop-blur"
      >
        <div class="flex min-w-0 items-center gap-3">
          <span class="relative size-9 flex-none">
            <NuxtImg
              v-for="(app, index) in apps"
              :key="app.name + '-header-logo'"
              v-show="activeAppIndex === index"
              :src="app.logo"
              :alt="app.name + ' logo'"
              class="absolute inset-0 size-9 rounded-md object-cover"
              width="36"
              height="36"
              loading="lazy"
              format="webp"
            />
          </span>
          <div class="min-w-0">
            <p class="font-mono text-xs text-fuchsia-200">mobile.community.preview</p>
            <p class="mt-1 truncate text-sm font-medium text-white">{{ activeApp.name }}</p>
          </div>
        </div>

        <a
          :href="activeApp.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex cursor-pointer items-center gap-2 border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-2 text-xs font-medium text-fuchsia-100 transition duration-200 hover:border-fuchsia-200 hover:bg-fuchsia-300/18"
        >
          <span class="hidden sm:inline">应用商店</span>
          <span class="i-fa-solid-external-link-alt size-3"></span>
        </a>
      </div>

      <div class="relative min-h-[380px] overflow-hidden sm:min-h-[470px] lg:min-h-[520px]">
        <div class="relative z-20 mx-auto w-full max-w-[520px] pt-1 sm:max-w-[560px] sm:pt-4 lg:max-w-[620px] lg:pt-2">
          <Swiper
            v-for="(app, appIndex) in apps"
            :key="app.name"
            v-show="activeAppIndex === appIndex"
            :slides-per-view="1"
            :space-between="16"
            :centered-slides="true"
            :breakpoints="swiperBreakpoints"
            class="overflow-hidden"
            @swiper="setMainController(appIndex, $event)"
            @slide-change="handleSlideChange(appIndex, $event)"
            @touch-start="pauseAutoplay"
            @slider-move="pauseAutoplay"
          >
            <SwiperSlide
              v-for="(screenshot, index) in app.screenshots"
              :key="app.name + screenshot"
              class="relative transition duration-300"
              :class="activeAppIndex === appIndex && activeSlideIndex === index ? 'z-20 opacity-100' : 'z-10 opacity-90'"
            >
              <div
                class="relative mx-auto aspect-[1378/2869] w-[66%] max-w-[210px] sm:w-full sm:max-w-[220px] lg:max-w-[250px]"
              >
                <div
                  v-if="!isLoaded(app.name, index)"
                  class="absolute inset-0 z-10 grid place-items-center border border-white/10 bg-white/[0.04] backdrop-blur-md"
                >
                  <div
                    class="grid place-items-center gap-2 text-center font-mono text-[10px] text-fuchsia-100 sm:text-xs"
                  >
                    <span class="i-fa-solid-spinner size-3.5 animate-spin"></span>
                    <span>loading community</span>
                  </div>
                </div>
                <NuxtImg
                  :src="screenshot"
                  :alt="activeApp.name + ' 游戏社区截图 ' + (index + 1)"
                  class="h-full w-full object-contain object-top drop-shadow-[0_26px_50px_rgba(0,0,0,0.35)] transition duration-500"
                  sizes="210px md:220px lg:250px"
                  loading="lazy"
                  format="webp"
                  @load="markLoaded(app.name, index)"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          class="absolute bottom-0 left-1/2 z-30 w-full max-w-[520px] -translate-x-1/2 border border-white/10 bg-[#0D1322]/82 p-3 backdrop-blur-md sm:max-w-[560px] lg:max-w-[620px]"
        >
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="(app, index) in apps"
              :key="app.name"
              type="button"
              class="flex min-w-0 cursor-pointer items-center gap-2 border px-2 py-1.5 text-left transition duration-200 sm:gap-3 sm:px-3 sm:py-2"
              :class="
                activeAppIndex === index
                  ? 'border-fuchsia-300/80 bg-fuchsia-300/12 text-white'
                  : 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-fuchsia-300/60 hover:text-fuchsia-100'
              "
              @click="selectApp(index)"
            >
              <NuxtImg
                :src="app.logo"
                :alt="app.name + ' logo'"
                class="size-7 flex-none rounded-md object-cover sm:size-8"
                width="32"
                height="32"
                loading="lazy"
                format="webp"
              />
              <span class="min-w-0">
                <span class="block truncate text-xs font-medium sm:text-sm">{{ app.name }}</span>
                <span class="mt-0.5 block truncate text-[10px] opacity-70 sm:text-xs">{{ app.type }}</span>
              </span>
            </button>
          </div>

          <div class="mt-2 flex justify-center gap-2 sm:mt-3">
            <button
              v-for="(_, index) in activeApp.screenshots"
              :key="activeApp.name + '-dot-' + index"
              type="button"
              class="size-2.5 cursor-pointer border transition duration-200"
              :class="
                activeSlideIndex === index
                  ? 'border-fuchsia-200 bg-fuchsia-200'
                  : 'border-white/20 bg-white/10 hover:border-fuchsia-200/70'
              "
              :aria-label="`查看第 ${index + 1} 张截图`"
              @click="selectSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

interface GameApp {
  name: string
  logo: string
  type: string
  url: string
  screenshots: string[]
}

const props = defineProps<{
  apps: GameApp[]
}>()

const activeAppIndex = ref(0)
const activeSlideIndex = ref(0)
const mainControllers = ref<any[]>([])
const loaded = reactive<Record<string, boolean[]>>(
  Object.fromEntries(props.apps.map((app) => [app.name, app.screenshots.map(() => false)]))
)
let autoplayTimer: ReturnType<typeof setInterval> | undefined
let resumeTimer: ReturnType<typeof setTimeout> | undefined

const activeApp = computed(() => props.apps[activeAppIndex.value] ?? props.apps[0])
const swiperBreakpoints = {
  640: {
    slidesPerView: 1.6,
    spaceBetween: 8
  },
  1024: {
    slidesPerView: 2.05,
    spaceBetween: 8
  },
  1280: {
    slidesPerView: 2.18,
    spaceBetween: 10
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  clearResumeTimer()
})

function setMainController(appIndex: number, swiper: any) {
  mainControllers.value[appIndex] = swiper
}

function handleSlideChange(appIndex: number, swiper: any) {
  if (activeAppIndex.value !== appIndex) {
    return
  }

  activeSlideIndex.value = swiper.realIndex ?? swiper.activeIndex ?? 0
}

function selectApp(index: number) {
  pauseAutoplay()
  activeAppIndex.value = index
  activeSlideIndex.value = 0

  nextTick(() => {
    mainControllers.value[index]?.update()
    mainControllers.value[index]?.slideTo(0)
  })
}

function selectSlide(index: number) {
  pauseAutoplay()
  activeSlideIndex.value = index
  mainControllers.value[activeAppIndex.value]?.slideTo(index)
}

function isLoaded(appName: string, index: number) {
  return loaded[appName]?.[index]
}

function markLoaded(appName: string, index: number) {
  loaded[appName][index] = true
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    const screenshots = activeApp.value.screenshots
    const nextIndex = (activeSlideIndex.value + 1) % screenshots.length
    activeSlideIndex.value = nextIndex
    mainControllers.value[activeAppIndex.value]?.slideTo(nextIndex)
  }, 4200)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = undefined
  }
}

function clearResumeTimer() {
  if (resumeTimer) {
    clearTimeout(resumeTimer)
    resumeTimer = undefined
  }
}

function pauseAutoplay() {
  stopAutoplay()
  clearResumeTimer()

  resumeTimer = setTimeout(() => {
    startAutoplay()
  }, 30000)
}
</script>
