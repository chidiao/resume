<template>
  <div class="relative mx-auto w-full max-w-[760px] overflow-hidden lg:max-w-none lg:overflow-visible">
    <div
      class="absolute -inset-6 bg-[radial-gradient(circle_at_62%_42%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(34,197,94,0.12),transparent_30%)] opacity-80 blur-2xl"
    ></div>

    <div class="relative">
      <div
        class="mb-4 flex min-w-0 items-center justify-between gap-4 border border-white/10 bg-[#0D1322]/80 px-4 py-3 backdrop-blur"
      >
        <div class="min-w-0">
          <p class="font-mono text-xs text-sky-300">responsive.preview</p>
          <p class="mt-1 text-sm font-medium text-white">{{ activeProject.name }}</p>
        </div>
        <div class="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
          <span class="i-fa-solid-desktop size-3.5 text-slate-300"></span>
          <span>PC</span>
          <span class="h-3 w-px bg-white/15"></span>
          <span class="i-fa-solid-mobile-screen-button size-3.5 text-slate-300"></span>
          <span>MB</span>
        </div>
      </div>

      <div
        class="relative aspect-[1.1] min-h-[330px] overflow-hidden sm:aspect-[1.2] sm:min-h-[380px] lg:min-h-[540px] lg:overflow-visible"
      >
        <div
          class="absolute left-0 top-[6%] z-10 w-full overflow-hidden border border-white/15 bg-[#070B14] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          <div class="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
            <span class="size-2.5 rounded-full bg-rose-400/80"></span>
            <span class="size-2.5 rounded-full bg-amber-300/80"></span>
            <span class="size-2.5 rounded-full bg-emerald-300/80"></span>
            <a
              v-if="activeProject.url"
              :href="activeProject.url"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-3 inline-flex min-w-0 flex-1 cursor-pointer items-center gap-2 font-mono text-xs text-sky-200 transition duration-200 hover:text-sky-100"
            >
              <span class="truncate">{{ activeProject.url }}</span>
              <span class="i-fa-solid-external-link-alt size-3 flex-none"></span>
            </a>
            <span v-else class="ml-3 min-w-0 flex-1 truncate font-mono text-xs text-slate-400">{{
              activeProjectUrl
            }}</span>
          </div>
          <div class="aspect-[1920/945] overflow-hidden bg-slate-950">
            <Swiper
              :modules="[Controller]"
              :controller="{ control: mobileController }"
              class="h-full w-full"
              @swiper="setPcController"
              @slide-change="handleSlideChange"
              @touch-start="handleUserInteraction"
              @slider-move="handleUserInteraction"
            >
              <SwiperSlide
                v-for="(project, index) in projects"
                :key="project.name + '-pc'"
                class="relative h-full w-full"
              >
                <div
                  v-if="!loaded.pc[index]"
                  class="absolute inset-0 z-10 grid place-items-center border border-white/10 bg-white/[0.035] backdrop-blur-md"
                >
                  <div class="flex items-center gap-2 font-mono text-xs text-sky-200">
                    <span class="i-fa-solid-spinner size-3.5 animate-spin"></span>
                    <span>loading preview</span>
                  </div>
                </div>
                <NuxtImg
                  :src="project.pc"
                  :alt="project.name + ' PC 官网预览'"
                  class="h-full w-full object-cover object-top transition duration-500"
                  sizes="sm:95vw md:760px lg:900px"
                  loading="lazy"
                  format="webp"
                  @load="loaded.pc[index] = true"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          class="absolute right-[8%] top-[18%] z-20 w-[34%] max-w-[124px] bg-black/25 p-1.5 outline outline-1 outline-white/15 backdrop-blur-md shadow-[0_18px_54px_rgba(56,189,248,0.18)] sm:right-[4%] sm:top-[26%] sm:w-[25%] sm:min-w-[148px] sm:max-w-[230px] sm:p-2 lg:right-[6%] lg:top-[24%] lg:w-[27%] lg:max-w-[260px]"
        >
          <div class="aspect-[393/851] overflow-hidden bg-[#050816] outline outline-1 outline-black/20">
            <Swiper
              :modules="[Controller]"
              :controller="{ control: pcController }"
              class="h-full w-full"
              @swiper="setMobileController"
              @touch-start="handleUserInteraction"
              @slider-move="handleUserInteraction"
            >
              <SwiperSlide
                v-for="(project, index) in projects"
                :key="project.name + '-mobile'"
                class="relative h-full w-full"
              >
                <div
                  v-if="!loaded.mobile[index]"
                  class="absolute inset-0 z-10 grid place-items-center bg-white/[0.035] backdrop-blur-md"
                >
                  <div class="grid place-items-center gap-1.5 text-center font-mono text-[10px] text-sky-200">
                    <span class="i-fa-solid-spinner size-3 animate-spin"></span>
                    <span>loading</span>
                  </div>
                </div>
                <NuxtImg
                  :src="project.mobile"
                  :alt="project.name + ' 移动端官网预览'"
                  class="h-full w-full object-contain object-top transition duration-500"
                  sizes="130px md:190px lg:260px"
                  loading="lazy"
                  format="webp"
                  @load="loaded.mobile[index] = true"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          class="absolute bottom-[9%] left-[6%] hidden border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 font-mono text-xs text-emerald-200 backdrop-blur md:block"
        >
          build: responsive-ready
        </div>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          class="flex min-w-0 items-center gap-2 border transition duration-200"
          :class="
            activeIndex === index
              ? 'border-sky-300/80 bg-sky-300/12 text-white'
              : 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-sky-300/60 hover:text-sky-100'
          "
        >
          <button
            type="button"
            class="min-w-0 flex-1 cursor-pointer px-3 py-2 text-left"
            @click="selectProject(index, true)"
          >
            <span class="block truncate text-sm font-medium">{{ project.name }}</span>
            <span class="mt-1 block truncate text-xs opacity-70">{{ project.type }}</span>
          </button>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-3 inline-grid size-7 flex-none cursor-pointer place-items-center border border-sky-300/25 bg-sky-300/10 text-sky-100 transition duration-200 hover:border-sky-200 hover:bg-sky-300/18"
            :aria-label="`打开 ${project.name} 官网`"
          >
            <span class="i-fa-solid-external-link-alt size-3"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import 'swiper/css'

interface WebsiteProject {
  name: string
  pc: string
  mobile: string
  type: string
  url?: string
}

const props = defineProps<{
  projects: WebsiteProject[]
}>()

const activeIndex = ref(0)
const pcController = ref<any>(null)
const mobileController = ref<any>(null)
const autoPlaying = ref(true)
let autoplayTimer: ReturnType<typeof setInterval> | undefined
let resumeTimer: ReturnType<typeof setTimeout> | undefined
const loaded = reactive({
  pc: props.projects.map(() => false),
  mobile: props.projects.map(() => false)
})

const activeProject = computed(() => props.projects[activeIndex.value] ?? props.projects[0])
const activeProjectUrl = computed(() => `https://${activeProject.value.name.toLowerCase().replaceAll(' ', '-')}.site`)

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  clearResumeTimer()
})

function setPcController(swiper: any) {
  pcController.value = swiper
}

function setMobileController(swiper: any) {
  mobileController.value = swiper
}

function handleSlideChange(swiper: any) {
  activeIndex.value = swiper.realIndex ?? swiper.activeIndex ?? 0
}

function selectProject(index: number, userTriggered = false) {
  if (userTriggered) {
    handleUserInteraction()
  }

  activeIndex.value = index
  pcController.value?.slideTo(index)
  mobileController.value?.slideTo(index)
}

function startAutoplay() {
  stopAutoplay()
  autoPlaying.value = true
  autoplayTimer = setInterval(() => {
    if (!autoPlaying.value || !props.projects.length) {
      return
    }

    const nextIndex = (activeIndex.value + 1) % props.projects.length
    selectProject(nextIndex)
  }, 4500)
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

function handleUserInteraction() {
  autoPlaying.value = false
  stopAutoplay()
  clearResumeTimer()

  resumeTimer = setTimeout(() => {
    startAutoplay()
  }, 30000)
}
</script>
