<template>
  <section id="home" ref="sectionRef" class="relative h-dvh overflow-hidden bg-[#020617] text-slate-50">
    <div
      data-hero-bg
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:42px_42px]"
    ></div>
    <div
      data-hero-glow
      class="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0)_0%,#0F172A_100%)]"
    ></div>

    <div
      class="relative z-10 mx-auto grid h-full max-w-7xl items-center justify-between gap-14 px-5 pb-20 pt-20 md:grid-cols-[minmax(0,0.82fr)_minmax(420px,0.88fr)] md:gap-20 md:px-10 lg:gap-28 lg:px-12"
    >
      <HeroCodingIntro />
      <HeroCodingConsole data-hero-console />
    </div>

    <a
      href="#skills"
      aria-label="向下滚动"
      data-hero-scroll
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

let isSnappingToSkills = false
let ctx: { revert: () => void } | undefined

const scrollToSkills = () => {
  if (isSnappingToSkills) return

  const target = document.getElementById('skills')
  if (!target) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  isSnappingToSkills = true

  const finishSnap = () => {
    isSnappingToSkills = false
  }

  if (reduceMotion) {
    window.scrollTo(0, target.offsetTop)
    finishSnap()
    return
  }

  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  })

  window.setTimeout(finishSnap, 900)
}

onMounted(async () => {
  await nextTick()

  const el = sectionRef.value
  if (!el) return

  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  ctx = $gsap.context(() => {
    const introItems = $gsap.utils.toArray<HTMLElement>('[data-hero-intro]', el)
    const consolePanel = el.querySelector<HTMLElement>('[data-hero-console]')
    const backgroundGrid = el.querySelector<HTMLElement>('[data-hero-bg]')
    const backgroundGlow = el.querySelector<HTMLElement>('[data-hero-glow]')
    const scrollCue = el.querySelector<HTMLElement>('[data-hero-scroll]')

    $gsap.set(introItems, { autoAlpha: 0, y: 34, willChange: 'transform, opacity' })
    $gsap.set(consolePanel, { autoAlpha: 0, x: 46, scale: 0.98, willChange: 'transform, opacity' })
    $gsap.set(scrollCue, { autoAlpha: 0, y: -8, willChange: 'transform, opacity' })
    $gsap.set([backgroundGrid, backgroundGlow], { autoAlpha: 0 })

    const introTimeline = $gsap
      .timeline({ paused: true, defaults: { ease: 'power3.out' } })
      .to(backgroundGrid, { autoAlpha: 1, duration: 0.8 }, 0)
      .to(backgroundGlow, { autoAlpha: 1, duration: 1.1 }, 0.08)
      .to(introItems, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09, force3D: true }, 0.18)
      .to(consolePanel, { autoAlpha: 1, x: 0, scale: 1, duration: 0.86, force3D: true }, 0.36)
      .to(scrollCue, { autoAlpha: 1, y: 0, duration: 0.52, force3D: true }, 0.92)

    $gsap.to(backgroundGrid, {
      backgroundPosition: '42px 42px',
      duration: 18,
      ease: 'none',
      repeat: -1
    })

    const playIntro = () => {
      introTimeline.restart()
    }

    const resetIntro = () => {
      introTimeline.pause(0)
      $gsap.set(introItems, { autoAlpha: 0, y: 34 })
      $gsap.set(consolePanel, { autoAlpha: 0, x: 46, scale: 0.98 })
      $gsap.set(scrollCue, { autoAlpha: 0, y: -8 })
      $gsap.set([backgroundGrid, backgroundGlow], { autoAlpha: 0 })
    }

    $ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      end: 'bottom 18%',
      onEnter: playIntro,
      onEnterBack: playIntro,
      onLeave: resetIntro,
      onLeaveBack: resetIntro
    })
  }, el)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
