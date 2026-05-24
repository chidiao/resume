<template>
  <div class="w-full">
    <CommonSectionHero
      label="Flutter · 移动端开发"
      title-prefix="Flutter /"
      title-highlight="App"
      description="参与 Flutter 商业项目实践，快速掌握 Dart 语法与跨端组件化思想，借助 AI 辅助开发高效完成业务迭代。"
      :tags="tags"
    />

    <div class="max-w-6xl mx-auto px-6 md:px-12 py-8">
      <WorkDescription class="max-w-[500px]" :experienceList="experienceList">
        <WorkPreviewLinks title="其他版本预览：" :linkList="links" />
      </WorkDescription>
    </div>
  </div>
</template>

<script setup>
const experienceList = [
  '参与两段 Flutter 商业项目实践，快速自学 Dart 语法与跨端组件化开发思想',
  '参与游戏社区类 App 开发，负责页面 UI 布局搭建与接口数据渲染工作',
  '借助 AI 辅助开发参与业务迭代，高效完成页面开发与基础逻辑实现',
  '参与 AI 聊天模块开发，实现流式数据接收、处理与页面实时渲染',
  '参与接入阿里云语音转文字服务，完成语音转写与聊天联动功能开发'
]

const tags = ['Flutter', 'Dart', 'GetX', 'AI 辅助开发', '流式数据', '阿里云语音转文字']

const links = [
  { label: 'Rustar', url: 'https://wap.rustar.cc/app/#/home' },
  { label: '小鸡模拟器', url: 'https://play.google.com/store/apps/details?id=org.xiaoji001.app' },
]
</script>
