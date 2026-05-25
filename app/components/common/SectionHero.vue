<template>
  <section class="relative overflow-hidden px-6 pt-16 pb-24 md:px-12">
    <!-- Glow orbs -->
    <div class="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[120px]"></div>
    <div class="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FBBF24]/8 blur-[100px]"></div>

    <!-- 底部渐变：过渡到内容区背景 -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0F172A] z-0"></div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <!-- Breadcrumb / Label -->
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-1.5 text-sm">
        <svg class="h-4 w-4 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <span class="text-[#A78BFA]">{{ label }}</span>
      </div>

      <h2 class="font-orbitron text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-5xl">
        {{ titlePrefix }} <span class="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">{{ titleHighlight }}</span>
      </h2>

      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
        {{ description }}
      </p>

      <!-- Tech Stack Pills -->
      <div class="mt-8 flex flex-wrap gap-3">
        <span
          v-for="tech in tags"
          :key="tech"
          class="border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 px-3 py-1.5 text-sm text-[#A78BFA] transition-colors hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10"
        >{{ tech }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  titlePrefix: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] }
})
</script>