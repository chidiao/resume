<template>
  <div class="bg-[#0F172A]">
    <HeroCodingSection />

    <!-- 过渡：Hero → Skills -->
    <div class="relative h-16 -mt-16 z-10 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A]"></div>
    </div>

    <SkillsMatrixSection />

    <ExperienceCareerSection />

    <!-- 过渡：Experience → Projects -->
    <div class="relative h-20 z-10 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-transparent"></div>
    </div>

    <div id="projects">
      <div class="container mx-auto">
        <CommonSectionTitle title="Projects" />
      </div>

      <ProjectsSection />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'fullwidth'
})
</script>
