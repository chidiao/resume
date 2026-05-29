<template>
  <section id="projects" class="relative scroll-mt-24 overflow-hidden bg-[#070B14] text-slate-50">
    <div class="absolute inset-0 opacity-[0.18]">
      <div
        class="h-full w-full bg-[linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"
      ></div>
    </div>

    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent"></div>

    <div class="relative z-10">
      <ProjectsWebsiteChapter />
      <ProjectsGameChapter />
      <ProjectsUniappChapter />
      <ProjectsDappChapter />
      <ProjectsFlutterChapter />
    </div>
  </section>
</template>
