<script setup lang="ts">
interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' }
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

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

  // Scroll spy：基于 section 顶部距离计算当前激活项
  const scrollTop = window.scrollY + 100 // 偏移量，补偿 navbar 高度
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

// 更新底部指示条位置和宽度
const updateIndicator = () => {
  if (!navListRef.value) return

  const activeLink = navListRef.value.querySelector(`a[href="${activeSection.value}"]`) as HTMLElement | null

  if (activeLink) {
    const parentRect = navListRef.value.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()
    indicatorStyle.value = {
      left: `${linkRect.left - parentRect.left}px`,
      width: `${linkRect.width}px`
    }
  }
}

watch(activeSection, () => {
  nextTick(updateIndicator)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 初始调用，防止刷新后 active 缺失
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="flex fixed top-0 left-0 z-50 w-full h-16 transition-all duration-300"
    :class="
      isScrolled
        ? 'translate-y-0 opacity-100 bg-[#0a0f1e]/90 backdrop-blur-sm shadow-lg'
        : '-translate-y-full opacity-0'
    "
  >
    <div class="flex justify-between items-center mx-auto px-6 w-full container">
      <!-- Logo / Brand -->
      <a
        href="#home"
        class="text-xl font-bold text-white tracking-wide hover:text-[#00e5ff] transition-colors"
        @click="closeMenu"
      >
        Resume
      </a>

      <!-- Desktop Navigation -->
      <ul ref="navListRef" class="hidden md:flex relative gap-8 items-center pb-3">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="text-sm tracking-wider transition-colors"
            :class="activeSection === item.href ? 'text-[#00e5ff]' : 'text-gray-300 hover:text-[#00e5ff]'"
          >
            {{ item.label }}
          </a>
        </li>
        <!-- 滑动底部指示条 -->
        <div
          class="absolute bottom-0 h-0.5 bg-[#00e5ff] rounded transition-all duration-300"
          :style="{ left: indicatorStyle.left, width: indicatorStyle.width }"
        />
      </ul>

      <!-- Mobile Toggle -->
      <div class="flex md:hidden">
        <CommonHamburgerToggle :is-open="isMenuOpen" @toggle="toggleMenu" />
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="flex fixed top-16 left-0 flex-col gap-6 px-6 py-8 w-full backdrop-blur-sm bg-[#0a0f1e]/95 md:hidden"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-lg tracking-wider transition-colors"
          :class="activeSection === item.href ? 'text-[#00e5ff]' : 'text-gray-300 hover:text-[#00e5ff]'"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
