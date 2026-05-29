import type { Ref } from 'vue'

type RevealKind = 'fade' | 'fade-up' | 'left' | 'right' | 'preview'

interface RevealOptions {
  start?: string
  stagger?: number
  duration?: number
  previewDuration?: number
}

const getRevealVars = (kind: RevealKind) => {
  if (kind === 'fade') {
    return { x: 0, y: 0, scale: 1 }
  }

  if (kind === 'left') {
    return { x: -42, y: 18, scale: 1 }
  }

  if (kind === 'right') {
    return { x: 42, y: 18, scale: 1 }
  }

  if (kind === 'preview') {
    return { x: 0, y: 42, scale: 0.96 }
  }

  return { x: 0, y: 42, scale: 1 }
}

export const useGsapReveal = (root: Ref<HTMLElement | null>, options: RevealOptions = {}) => {
  let ctx: { revert: () => void } | undefined

  onMounted(async () => {
    await nextTick()

    const el = root.value
    if (!el) return

    const { $gsap, $ScrollTrigger } = useNuxtApp()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = $gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]', el)

    if (items.length === 0) return

    if (reduceMotion) {
      $gsap.set(items, { autoAlpha: 1, x: 0, y: 0, scale: 1, clearProps: 'transform,visibility' })
      return
    }

    ctx = $gsap.context(() => {
      const initialStates = items.map((item) => {
        const kind = (item.dataset.gsapReveal || 'fade-up') as RevealKind
        return {
          item,
          kind,
          vars: getRevealVars(kind)
        }
      })

      initialStates.forEach(({ item, vars }) => {
        $gsap.set(item, {
          autoAlpha: 0,
          x: vars.x,
          y: vars.y,
          scale: vars.scale,
          willChange: 'transform, opacity'
        })
      })

      const timeline = $gsap.timeline({ paused: true })

      initialStates.forEach(({ item, kind }, index) => {
        timeline.to(
          item,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: kind === 'preview' ? (options.previewDuration ?? 0.9) : (options.duration ?? 0.72),
            ease: 'power3.out',
            force3D: true,
            overwrite: 'auto'
          },
          index * (options.stagger ?? 0.11)
        )
      })

      $ScrollTrigger.create({
        trigger: el,
        start: options.start ?? 'top 78%',
        onEnter: () => timeline.restart(),
        onLeaveBack: () => {
          timeline.pause(0)
          initialStates.forEach(({ item, vars }) => {
            $gsap.set(item, {
              autoAlpha: 0,
              x: vars.x,
              y: vars.y,
              scale: vars.scale,
              willChange: 'transform, opacity'
            })
          })
        }
      })

      requestAnimationFrame(() => $ScrollTrigger.refresh())
    }, el)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
