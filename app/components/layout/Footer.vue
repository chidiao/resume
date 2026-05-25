<script setup lang="ts">
interface FooterLink {
  label: string
  url: string
}

const links: FooterLink[] = [
  { label: '外链 1', url: 'https://example.com' },
  { label: '简历2023版', url: 'https://2023.chidiao.xin' }
]

const copyright = 'Copyright © 2026 chidiao.xin'
</script>

<template>
  <footer class="w-full border-t border-gray-800 bg-[#0a0f1e]" role="contentinfo">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-6 sm:flex-row sm:justify-between">
      <!-- 外链 -->
      <div v-if="links.length > 0" class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
        <template v-for="(link, index) in links" :key="link.label">
          <span v-if="index > 0" class="text-gray-600 select-none" aria-hidden="true">|</span>
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 transition-colors duration-200 hover:text-[#00e5ff] cursor-pointer"
          >
            {{ link.label }}
          </a>
        </template>
      </div>

      <!-- 占位，使版权在链接少时仍居中 -->
      <div v-else />

      <!-- 版权信息 -->
      <p class="text-sm text-gray-500">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>
