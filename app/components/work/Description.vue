<template>
  <div class="grid gap-5">
    <h3 class="text-xl lg:text-3xl text-[#00e5ff] flex gap-[14px] items-center">{{ title }}</h3>

    <div class="grid gap-4 text-sm text-gray-200 line-height-loose">
      <div v-for="(item, index) in experienceList" :key="index" class="flex">
        <SvgCheck class="stroke-cyan-500 size-5 mr-2 mt-1" />

        <p class="flex-1">{{ item }}</p>
      </div>
    </div>

    <WorkTags :tags="tags || []" />

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="tsx" setup>
interface Props {
  title?: string
  experienceList?: string[]
  tags?: string[]
}

const props = defineProps<Props>()

const SvgCheck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}
</script>
