<template>
  <section
    id="experience"
    class="relative flex min-h-dvh scroll-mt-16 items-center overflow-hidden bg-[#020617] text-slate-50 md:h-dvh"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_78%_70%,rgba(34,197,94,0.12),transparent_28%),linear-gradient(180deg,#0F172A_0%,#020617_46%,#0F172A_100%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px]"
    ></div>

    <div
      class="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-5 px-5 pb-8 pt-20 md:gap-8 md:px-10 md:pb-10 md:pt-22 lg:px-12"
    >
      <ExperienceCareerHeader />
      <div class="grid items-center gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] lg:gap-8">
        <ExperienceCareerCurrent />
        <ExperienceCareerArchive />
      </div>
    </div>
  </section>
</template>
