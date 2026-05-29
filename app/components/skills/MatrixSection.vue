<template>
  <section id="skills" class="relative flex h-dvh scroll-mt-16 items-center overflow-hidden bg-[#0F172A] text-slate-50">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_22%_74%,rgba(59,130,246,0.12),transparent_26%),linear-gradient(180deg,#0F172A_0%,#020617_48%,#0F172A_100%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px]"
    ></div>

    <div
      class="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4 px-5 pb-5 pt-20 md:gap-8 md:px-10 md:pb-10 md:pt-22 lg:px-12"
    >
      <SkillsMatrixHeader />
      <SkillsMatrixCore />
      <SkillsMatrixList />
    </div>
  </section>
</template>
