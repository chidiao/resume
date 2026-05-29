<script setup lang="ts">
interface NavItem {
  label: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  { label: '首页', href: '#home', icon: 'i-fa-solid-home' },
  { label: '技能', href: '#skills', icon: 'i-fa-solid-code' },
  { label: '经历', href: '#experience', icon: 'i-fa-solid-briefcase' },
  { label: '项目', href: '#projects', icon: 'i-fa-solid-rocket' }
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref(navItems[0].href)

const navListRef = ref<HTMLUListElement | null>(null)
const indicatorStyle = ref({ left: '0px', width: '0px' })

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10

  const scrollTop = window.scrollY + 140
  let currentSection = navItems[0].href

  for (let i = navItems.length - 1; i >= 0; i--) {
    const id = navItems[i].href.replace('#', '')
    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollTop) {
      currentSection = navItems[i].href
      break
    }
  }

  if (currentSection !== activeSection.value) {
    activeSection.value = currentSection
  }
}

const updateIndicator = () => {
  if (!navListRef.value) return

  const activeLink = navListRef.value.querySelector(`a[href="${activeSection.value}"]`) as HTMLElement | null
  if (!activeLink) return

  const parentRect = navListRef.value.getBoundingClientRect()
  const linkRect = activeLink.getBoundingClientRect()

  indicatorStyle.value = {
    left: `${linkRect.left - parentRect.left}px`,
    width: `${linkRect.width}px`
  }
}

watch(activeSection, () => {
  nextTick(updateIndicator)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  nextTick(updateIndicator)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="pointer-events-none fixed left-0 right-0 top-4 z-50 px-4 sm:px-6" aria-label="主导航">
    <div
      class="pointer-events-auto mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-2xl border px-3 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 sm:h-16 sm:px-4"
      :class="isScrolled ? 'border-cyan-300/18 bg-[#07111f]/86' : 'border-white/10 bg-[#07111f]/62'"
    >
      <a
        href="#home"
        class="group flex min-w-0 cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 outline-none transition-colors duration-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        @click="closeMenu"
      >
        <span
          class="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-colors duration-200 group-hover:border-cyan-300/45"
        >
          <span class="i-fa-solid-terminal h-4 w-4" />
        </span>
        <span class="hidden min-w-0 leading-none sm:block">
          <span class="block text-sm font-semibold tracking-[0.16em] text-white">孙颖洲</span>
          <span class="mt-1 block text-[10px] tracking-[0.18em] text-slate-400">前端工程师</span>
        </span>
      </a>

      <ul
        ref="navListRef"
        class="relative hidden items-center gap-1 rounded-2xl border border-white/8 bg-black/18 p-1 md:flex"
      >
        <li v-for="item in navItems" :key="item.label" class="relative z-10">
          <a
            :href="item.href"
            class="flex h-10 cursor-pointer items-center gap-2 rounded-xl px-4 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            :class="activeSection === item.href ? 'text-cyan-100' : 'text-slate-400 hover:text-white'"
          >
            <span :class="item.icon" class="h-3.5 w-3.5" />
            {{ item.label }}
          </a>
        </li>
        <div
          class="absolute bottom-1 top-1 rounded-xl border border-cyan-300/22 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.16)] transition-all duration-300 ease-out"
          :style="{ left: indicatorStyle.left, width: indicatorStyle.width }"
          aria-hidden="true"
        />
      </ul>

      <div class="hidden items-center gap-2 lg:flex">
        <span class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
        <span class="text-xs font-medium tracking-[0.16em] text-slate-400">2026 简历</span>
      </div>

      <div class="flex md:hidden">
        <CommonHamburgerToggle :is-open="isMenuOpen" @toggle="toggleMenu" />
      </div>
    </div>

    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="pointer-events-auto mx-auto mt-3 grid w-full max-w-6xl grid-cols-2 gap-2 rounded-2xl border border-cyan-300/16 bg-[#07111f]/94 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl md:hidden"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          :class="
            activeSection === item.href
              ? 'border-cyan-300/28 bg-cyan-300/12 text-cyan-100'
              : 'border-white/8 bg-white/[0.03] text-slate-300 hover:border-cyan-300/24 hover:text-white'
          "
          @click="closeMenu"
        >
          <span :class="item.icon" class="h-4 w-4" />
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
