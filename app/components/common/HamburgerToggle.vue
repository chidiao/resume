<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button
    class="flex relative flex-col justify-center items-center w-8 h-8 cursor-pointer"
    aria-label="Toggle navigation"
    @click="emit('toggle')"
  >
    <!-- 顶部横线 -->
    <div
      class="absolute w-6 h-0.5 bg-white rounded transition-all duration-300"
      :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'"
    />
    <!-- 中间横线（打开时隐藏） -->
    <div
      class="absolute w-6 h-0.5 bg-white rounded transition-all duration-300"
      :class="isOpen ? 'opacity-0' : 'opacity-100'"
    />
    <!-- 底部横线 -->
    <div
      class="absolute w-6 h-0.5 bg-white rounded transition-all duration-300"
      :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'"
    />
  </button>
</template>