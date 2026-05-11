<template>
  <h2 class="text-[#00e5ff] flex items-center gap-3 p-5 md:py-8 xl:py-16">
    <span class="text-xl">//</span>
    <span class="text-3xl">{{ title }}</span>
  </h2>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>
