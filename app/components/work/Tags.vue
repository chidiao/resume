<template>
  <div class="py-5 flex flex-wrap gap-[10px]">
    <span v-for="tag in tags" :key="tag" class="bg-[#1c273d] text-[#00e5ff] px-3 py-[7px] rounded-md text-xs">
      {{ tag }}
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  tags: string[]
}

const props = defineProps<Props>()
</script>
