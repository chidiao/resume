<template>
  <div class="flex min-w-0 items-center gap-3 font-mono text-sm text-emerald-200">
    <span class="flex-none text-emerald-400">$</span>
    <span class="min-w-0 truncate">
      {{ displayText }}
      <span class="type-cursor" aria-hidden="true"></span>
    </span>
  </div>
</template>

<script setup lang="ts">
const lines = [
  'hello, i am sun yingzhou',
  'i am a frontend engineer',
  '6 years of frontend experience',
  'focused on Vue3 / Nuxt / UniApp',
  'welcome, explore my work and experience'
]

const displayText = ref('')

let lineIndex = 0
let charIndex = 0
let isDeleting = false
let timer: ReturnType<typeof window.setTimeout> | undefined

const typeNext = () => {
  const currentLine = lines[lineIndex]

  if (isDeleting) {
    charIndex -= 1
    displayText.value = currentLine.slice(0, charIndex)

    if (charIndex <= 0) {
      isDeleting = false
      lineIndex = (lineIndex + 1) % lines.length
      timer = window.setTimeout(typeNext, 360)
      return
    }

    timer = window.setTimeout(typeNext, 32)
    return
  }

  charIndex += 1
  displayText.value = currentLine.slice(0, charIndex)

  if (charIndex >= currentLine.length) {
    isDeleting = true
    timer = window.setTimeout(typeNext, 1800)
    return
  }

  timer = window.setTimeout(typeNext, 72)
}

onMounted(() => {
  timer = window.setTimeout(typeNext, 480)
})

onUnmounted(() => {
  if (timer) {
    window.clearTimeout(timer)
  }
})
</script>

<style scoped>
.type-cursor {
  display: inline-block;
  margin-left: 2px;
  height: 1em;
  width: 1px;
  transform: translateY(0.14em);
  background: currentColor;
  animation: cursor-blink 0.86s steps(2, start) infinite;
}

@keyframes cursor-blink {
  0%,
  45% {
    opacity: 1;
  }

  46%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .type-cursor {
    animation: none;
  }
}
</style>
