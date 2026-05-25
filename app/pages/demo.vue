<template>
  <div class="bg-[#0a0f1e] min-h-screen py-8">
    <AiDemo />

    <AiDemo2
      :link-list="[
        { label: '企业官网 1', url: 'https://xxx.com' },
        { label: '企业官网 2', url: 'https://xxx.com' },
        { label: '移动端预览', url: 'https://xxx.com' }
      ]"
    />

    <AiDemo3 />

    <LayoutFooter />
  </div>
</template>
