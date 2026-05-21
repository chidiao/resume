<script setup lang="ts">
interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="flex fixed top-0 left-0 z-50 justify-between items-center px-6 w-full h-16 transition-all duration-300"
    :class="isScrolled ? 'translate-y-0 opacity-100 bg-[#0a0f1e]/90 backdrop-blur-sm shadow-lg' : '-translate-y-full opacity-0'"
  >
    <!-- Logo / Brand -->
    <a
      href="#home"
      class="text-xl font-bold text-white tracking-wide hover:text-[#00e5ff] transition-colors"
      @click="closeMenu"
    >
      Resume
    </a>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex gap-8 items-center">
      <li v-for="item in navItems" :key="item.label">
        <a
          :href="item.href"
          class="text-sm text-gray-300 tracking-wider uppercase hover:text-[#00e5ff] transition-colors"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>

    <!-- Mobile Toggle -->
    <div class="flex md:hidden">
      <CommonHamburgerToggle :is-open="isMenuOpen" @toggle="toggleMenu" />
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
          class="text-lg text-gray-300 tracking-wider uppercase hover:text-[#00e5ff] transition-colors"
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