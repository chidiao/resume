<template>
  <div class="bg-gray-900">
    <HeroSection />

    <div id="skills" class="container mx-auto">
      <CommonSectionTitle title="Skills" />

      <SkillsSection />
    </div>

    <div id="experience" class="container mx-auto">
      <CommonSectionTitle title="Experience" />

      <ExperienceSection />
    </div>

    <div id="projects" class="container mx-auto">
      <CommonSectionTitle title="Projects" />

      <ProjectsSection />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'fullwidth'
})
</script>
