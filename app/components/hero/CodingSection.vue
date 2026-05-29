<template>
  <section id="home" ref="sectionRef" class="relative h-dvh overflow-hidden bg-[#020617] text-slate-50">
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:42px_42px]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0)_0%,#0F172A_100%)]"
    ></div>

    <div
      class="relative z-10 mx-auto grid h-full max-w-7xl items-center justify-between gap-14 px-5 pb-20 pt-20 md:grid-cols-[minmax(0,0.82fr)_minmax(420px,0.88fr)] md:gap-20 md:px-10 lg:gap-28 lg:px-12"
    >
      <HeroCodingIntro />
      <HeroCodingConsole />
    </div>

    <a
      href="#skills"
      aria-label="向下滚动"
      class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-slate-400 transition-colors duration-200 hover:text-emerald-300"
      @click.prevent="scrollToSkills"
    >
      <span class="relative h-9 w-5 rounded-full border border-current">
        <span
          class="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-current animate-bounce"
        ></span>
      </span>
      <span class="text-[11px] tracking-[0.24em]">下滑</span>
    </a>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

let hasSnappedToSkills = false
let isSnappingToSkills = false
let ctx: { revert: () => void } | undefined

const scrollToSkills = () => {
  if (isSnappingToSkills) return

  const target = document.getElementById('skills')
  if (!target) return

  const { $gsap } = useNuxtApp()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const scrollState = { y: window.scrollY }

  hasSnappedToSkills = true
  isSnappingToSkills = true

  if (reduceMotion) {
    window.scrollTo(0, target.offsetTop)
    isSnappingToSkills = false
    return
  }

  $gsap.to(scrollState, {
    y: target.offsetTop,
    duration: 0.86,
    ease: 'power3.inOut',
    overwrite: true,
    onUpdate: () => window.scrollTo(0, scrollState.y),
    onComplete: () => {
      isSnappingToSkills = false
    }
  })
}

onMounted(async () => {
  await nextTick()

  const el = sectionRef.value
  if (!el) return

  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  ctx = $gsap.context(() => {
    $ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: () => `+=${Math.round(window.innerHeight * 0.3)}`,
      once: true,
      onLeave: (self) => {
        if (self.direction > 0 && !hasSnappedToSkills) {
          scrollToSkills()
        }
      }
    })
  }, el)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
