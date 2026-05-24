<template>
  <div class="py-8 md:py-12 xl:py-16 px-5">
    <!-- Gradient accent bar -->
    <div class="w-10 h-1 bg-gradient-to-r from-[#00e5ff] via-[#00e5ff] to-[#8B5CF6] rounded-full mb-4" />

    <div class="flex items-center gap-4">
      <!-- Number prefix -->
      <span
        v-if="number !== undefined"
        class="font-mono text-sm md:text-base text-[#00e5ff]/40 tracking-[0.2em] select-none shrink-0 mt-1"
      >
        {{ String(number).padStart(2, '0') }}.
      </span>

      <!-- Title -->
      <h2
        class="text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-tight"
        style="text-shadow: 0 0 40px rgba(0, 229, 255, 0.12)"
      >
        {{ title }}
      </h2>

      <!-- Decorative line -->
      <div class="hidden md:block flex-1 h-px bg-gradient-to-r from-[#00e5ff]/25 to-transparent ml-2 self-center" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  number?: number
}

const props = defineProps<Props>()
</script>