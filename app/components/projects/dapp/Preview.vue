<template>
  <div class="relative mx-auto w-full max-w-[760px] overflow-hidden lg:max-w-none">
    <div
      class="absolute -inset-6 bg-[radial-gradient(circle_at_58%_28%,rgba(139,92,246,0.24),transparent_32%),radial-gradient(circle_at_24%_76%,rgba(34,211,238,0.14),transparent_30%)] opacity-90 blur-2xl"
    ></div>

    <div class="relative">
      <div
        class="mb-4 flex min-w-0 items-center justify-between gap-4 border border-white/10 bg-[#0D1322]/80 px-4 py-3 backdrop-blur"
      >
        <div class="min-w-0">
          <p class="font-mono text-xs text-violet-200">web3.portfolio.preview</p>
          <p class="mt-1 truncate text-sm font-medium text-white">{{ activeProject.name }}</p>
        </div>

        <div class="flex items-center gap-2 text-xs text-slate-400">
          <span class="i-fa-solid-shield-alt size-3.5 text-violet-200"></span>
          <span>{{ activeProject.accent }}</span>
        </div>
      </div>

      <div class="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[560px]">
        <div class="relative z-20 mx-auto grid max-w-[620px] gap-4 lg:grid-cols-[minmax(210px,0.78fr)_minmax(230px,1fr)] lg:items-center">
          <div class="order-2 border border-white/10 bg-[#0D1322]/82 p-4 backdrop-blur-md lg:order-1">
            <div class="mb-4 flex items-start justify-between gap-3">
              <div class="min-w-0">
                <p class="font-mono text-xs text-violet-200">{{ activeProject.type }}</p>
                <h3 class="mt-1 truncate text-xl font-semibold text-white">{{ activeProject.name }}</h3>
              </div>
              <span class="i-fa-solid-cubes mt-1 size-4 flex-none text-cyan-200"></span>
            </div>

            <p class="text-sm leading-7 text-slate-300">{{ activeProject.description }}</p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in activeProject.tags"
                :key="tag"
                class="border border-violet-300/15 bg-violet-300/8 px-2.5 py-1 text-xs text-violet-100"
              >
                {{ tag }}
              </span>
            </div>

            <div v-if="activeProject.links.length" class="mt-5 flex flex-wrap gap-2">
              <a
                v-for="link in activeProject.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex cursor-pointer items-center gap-2 border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition duration-200 hover:border-cyan-200 hover:bg-cyan-300/18"
              >
                <span>{{ link.label }}</span>
                <span class="i-fa-solid-external-link-alt size-3"></span>
              </a>
            </div>

            <div class="mt-5 grid grid-cols-3 gap-2">
              <button
                v-for="(image, index) in activeProject.images"
                :key="image"
                type="button"
                class="aspect-[393/851] cursor-pointer overflow-hidden border transition duration-200"
                :class="activeImageIndex === index ? 'border-violet-200 shadow-[0_0_18px_rgba(139,92,246,0.28)]' : 'border-white/10 opacity-70 hover:border-violet-300/60 hover:opacity-100'"
                @click="selectImage(index)"
              >
                <NuxtImg :src="image" :alt="activeProject.name + ' 缩略图 ' + (index + 1)" class="h-full w-full object-cover object-top" sizes="80px" loading="lazy" format="webp" />
              </button>
            </div>
          </div>

          <div class="order-1 mx-auto w-[58%] max-w-[230px] border border-white/12 bg-black/25 p-2 backdrop-blur-md shadow-[0_28px_80px_rgba(139,92,246,0.2)] sm:w-[42%] sm:max-w-[260px] lg:order-2 lg:w-full lg:max-w-[286px]">
            <div class="aspect-[393/851] overflow-hidden bg-[#050816]">
              <div v-if="!isLoaded(activeImage)" class="absolute inset-2 z-10 grid place-items-center border border-white/10 bg-white/[0.04] backdrop-blur-md">
                <div class="grid place-items-center gap-2 text-center font-mono text-[10px] text-violet-100 sm:text-xs">
                  <span class="i-fa-solid-spinner size-3.5 animate-spin"></span>
                  <span>loading dapp</span>
                </div>
              </div>
              <NuxtImg
                :src="activeImage"
                :alt="activeProject.name + ' Web3 DApp 预览'"
                class="h-full w-full object-contain object-top transition duration-500"
                sizes="230px md:260px lg:286px"
                loading="lazy"
                format="webp"
                @load="markLoaded(activeImage)"
              />
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-0 left-1/2 z-30 w-full max-w-[620px] -translate-x-1/2 border border-white/10 bg-[#0D1322]/82 p-3 backdrop-blur-md"
        >
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="(project, index) in projects"
              :key="project.name"
              type="button"
              class="min-w-0 cursor-pointer border px-2 py-2 text-left transition duration-200"
              :class="
                activeProjectIndex === index
                  ? 'border-violet-300/80 bg-violet-300/12 text-white'
                  : 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-violet-300/60 hover:text-violet-100'
              "
              @click="selectProject(index)"
            >
              <span class="block truncate text-xs font-medium sm:text-sm">{{ project.name }}</span>
              <span class="mt-0.5 block truncate text-[10px] opacity-70 sm:text-xs">{{ project.type }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DappLink {
  label: string
  url: string
}

interface DappProject {
  name: string
  type: string
  accent: string
  description: string
  images: string[]
  tags: string[]
  links: DappLink[]
}

const props = defineProps<{
  projects: DappProject[]
}>()

const activeProjectIndex = ref(0)
const activeImageIndex = ref(0)
const loaded = reactive<Record<string, boolean>>({})

const activeProject = computed(() => props.projects[activeProjectIndex.value] ?? props.projects[0])
const activeImage = computed(() => activeProject.value.images[activeImageIndex.value] ?? activeProject.value.images[0])

function selectProject(index: number) {
  activeProjectIndex.value = index
  activeImageIndex.value = 0
}

function selectImage(index: number) {
  activeImageIndex.value = index
}

function isLoaded(image: string) {
  return loaded[image]
}

function markLoaded(image: string) {
  loaded[image] = true
}
</script>
