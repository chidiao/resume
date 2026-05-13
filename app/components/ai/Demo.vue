<template>
  <div class="project-preview mt-6 pt-4 border-t border-gray-700/60">
    <div class="flex items-center justify-between">
      <span class="text-gray-400 text-sm">项目线上地址</span>
      <a
        :href="previewLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-300 text-sm hover:text-white transition-colors duration-300"
      >
        前往预览 →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  previewLink: String
})
</script>