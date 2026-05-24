<template>
  <div class="w-full py-8">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 py-16 md:px-12">
      <!-- Glow orbs -->
      <div class="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[120px]"></div>
      <div class="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FBBF24]/8 blur-[100px]"></div>

      <div class="mx-auto max-w-6xl">
        <!-- Breadcrumb / Label -->
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-1.5 text-sm">
          <svg class="h-4 w-4 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span class="text-[#A78BFA]">Web3 · DApp Portfolio</span>
        </div>

        <h2 class="font-orbitron text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-5xl">
          Web3 / <span class="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">DApp</span>
        </h2>

        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
          基于 Vue3 生态开发去中心化前端应用，集成钱包连接、链上交互、资产可视化等核心能力，具备完整的 Web3 项目实战经验。
        </p>

        <!-- Tech Stack Pills -->
        <div class="mt-8 flex flex-wrap gap-3">
          <span
            v-for="tech in techs"
            :key="tech"
            class="border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 px-3 py-1.5 text-sm text-[#A78BFA] transition-colors hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10"
          >{{ tech }}</span>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="mx-auto mt-12 max-w-6xl px-6 pb-24 md:px-12">
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <!-- Project Card -->
        <article
          v-for="project in projects"
          :key="project.name"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-[#8B5CF6]/10 bg-[#0F0F23] transition-all duration-300 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
        >
          <!-- Image + Overlay Section -->
          <div class="relative aspect-[393/851] overflow-hidden bg-[#0F0F23]">
            <img
              :src="project.images[project.activeIdx]"
              :alt="project.name + ' 截图 ' + (project.activeIdx + 1)"
              class="absolute inset-0 h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-105"
            />

            <!-- Navigation Arrows -->
            <button
              class="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0F0F23]/70 p-2 text-[#F8FAFC] opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-[#8B5CF6]/50 group-hover:opacity-100"
              @click.stop="prevImage(project)"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              class="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0F0F23]/70 p-2 text-[#F8FAFC] opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-[#8B5CF6]/50 group-hover:opacity-100"
              @click.stop="nextImage(project)"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Glassmorphism overlay + Project info (bottom area) -->
            <div class="absolute inset-x-0 bottom-0 z-10">
              <div class="absolute -inset-px bg-[#0a0f1e]/90 backdrop-blur-md"></div>
              <div class="relative px-5 pb-4 pt-4">
                <h3 class="text-lg font-semibold text-[#F8FAFC]">{{ project.name }}</h3>
                <p class="mt-1.5 text-xs leading-relaxed text-[#CBD5E1]">{{ project.description }}</p>
                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="rounded-md border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-2 py-0.5 text-xs text-[#A78BFA]"
                  >{{ tag }}</span>
                </div>
                <div v-if="project.links && project.links.length" class="mt-3 flex flex-wrap gap-2">
                  <a
                    v-for="link in project.links"
                    :key="link.label"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 rounded-md bg-[#8B5CF6]/15 px-2.5 py-1 text-xs text-[#C4B5FD] transition-all duration-200 hover:bg-[#8B5CF6]/25"
                  >
                    <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {{ link.label }}
                  </a>
                </div>

                <!-- Thumbnails bar (inside glass panel) -->
                <div class="mt-4 flex justify-center gap-2">
                  <button
                    v-for="(img, i) in project.images"
                    :key="i"
                    class="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200"
                    :class="project.activeIdx === i ? 'border-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'border-transparent opacity-50 hover:opacity-80'"
                    @click="project.activeIdx = i"
                  >
                    <img :src="img" :alt="project.name + ' 缩略图 ' + (i + 1)" class="h-full w-full object-cover" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const techs = ['Vue3', 'web3.js', 'Wagmi', 'MetaMask', 'Klinecharts', 'UniApp', 'Nuxt 3']

const projects = reactive([
  {
    name: 'HMC Wallet Pro',
    activeIdx: 0,
    images: ['/img/dapp/hmc-1.jpg', '/img/dapp/hmc-2.jpg', '/img/dapp/hmc-3.jpg'],
    description: 'Hammer Chain 官方加密钱包，支持安全发送、接收和存储 HMC 及多种加密货币和数字资产。基于 UniApp 开发，已上线 Google Play。',
    tags: ['UniApp', 'Android', 'Wallet', 'Google Play'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hammermining.walletpro' },
      { label: 'H5 预览', url: 'https://walletpro.hammermining.com/app' }
    ]
  },
  {
    name: 'ClicksX',
    activeIdx: 0,
    images: ['/img/dapp/clicks1.jpg', '/img/dapp/clicks2.jpg', '/img/dapp/clicks3.jpg'],
    description: 'Web3 去中心化应用，基于 Vue3 开发，集成 web3.js、Wagmi 实现链上交互，使用 Klinecharts 图表库实现资产价格趋势可视化。',
    tags: ['Vue3', 'web3.js', 'Wagmi', 'Klinecharts'],
    links: []
  },
  {
    name: 'Rustar Mining',
    activeIdx: 0,
    images: ['/img/dapp/mine1.jpg', '/img/dapp/mine2.jpg', '/img/dapp/mine3.jpg'],
    description: '基于 Nuxt 3 开发的 H5 挖矿应用，支持虚拟矿机购买、算力管理、积分排名与收益统计等核心功能，具备国际化多语言能力。',
    tags: ['Nuxt 3', 'H5', 'Wallet', 'i18n'],
    links: []
  }
])

function nextImage(project) {
  project.activeIdx = (project.activeIdx + 1) % project.images.length
}

function prevImage(project) {
  project.activeIdx = (project.activeIdx - 1 + project.images.length) % project.images.length
}
</script>