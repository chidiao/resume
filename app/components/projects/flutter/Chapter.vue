<template>
  <section ref="sectionRef" class="scroll-mt-24 px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(620px,1.18fr)] lg:gap-16 xl:gap-24"
    >
      <ProjectsFlutterInfo data-gsap-reveal="left" :stats="stats" :tags="tags" />
      <ProjectsFlutterPreview data-gsap-reveal="preview" :modules="modules" :links="links" />
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

useGsapReveal(sectionRef)

const tags = ['Flutter', 'Dart', 'GetX', 'AI 聊天', '流式数据', '阿里云语音转文字', '协作开发']

const stats = [
  { icon: 'i-fa-solid-mobile-alt', value: '2 个', label: 'Flutter 项目' },
  { icon: 'i-fa-solid-tasks', value: '5-6 月', label: '协作经验' },
  { icon: 'i-fa-solid-brain', value: 'AI', label: '辅助开发起点' }
]

const modules = [
  {
    icon: 'i-fa-solid-code',
    title: 'Rustar 应用',
    text: '参与 Flutter 版本开发约 2 个多月，主要负责页面 UI、接口渲染与基础业务逻辑。'
  },
  {
    icon: 'i-fa-solid-comments',
    title: 'MarsXAI 早期阶段',
    text: 'MarsXAI 前期使用 Flutter 开发，也是开始搭配 AI 辅助开发的阶段。'
  },
  {
    icon: 'i-fa-solid-microphone-alt',
    title: 'AI 与语音能力',
    text: '参与 AI 聊天流式数据渲染，以及阿里云语音转文字和聊天联动能力。'
  },
  {
    icon: 'i-fa-solid-project-diagram',
    title: '后续重构背景',
    text: '后续项目重构为 H5，并演进为游戏社区类 Flutter 套壳 H5 形态。'
  }
]

const links = [
  { label: 'Rustar H5 版本', url: 'https://wap.rustar.cc/app/#/home' },
  { label: '小鸡模拟器原生版本', url: 'https://play.google.com/store/apps/details?id=org.xiaoji001.app' }
]
</script>
