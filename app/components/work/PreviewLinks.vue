<template>
  <div class="flex gap-[10px] flex-col lg:flex-row lg:items-center py-5">
    <div class="text-sm text-white">{{ title }}</div>

    <a
      v-for="link in linkList"
      class="bg-gray-700 rounded-full text-white text-xs flex justify-center items-center cursor-pointer gap-[6px] px-4 py-3 lg:py-2 hover:bg-gray-800 transition transition-all"
      :href="link.url"
      target="_blank"
    >
      <div>{{ link.label }}</div>
      <SvgArrowRight class="text-white size-3" />
    </a>
  </div>
</template>

<script lang="tsx" setup>
interface Props {
  title?: string
  linkList: Link[]
}

interface Link {
  label: string
  url: string
}

defineProps<Props>()

const SvgArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}
</script>
