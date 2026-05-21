<script setup lang="ts">
interface WorkExperience {
  company: string
  role: string
  period: string
  year: string
  descriptions: string[]
}

const experiences: WorkExperience[] = [
  {
    company: '洛阳蓝景科技',
    role: '前端工程师',
    period: '2023/03 - 2026/05',
    year: '2023',
    descriptions: [
      '负责多端产品线前端开发与维护工作，主力使用 Vue3、Nuxt、UniApp 完成需求开发。',
      '熟悉 Flutter 技术，能够独立完成页面 UI 开发、布局编写与接口数据联调等工作。',
      '参与游戏社区类多端应用研发，同时负责网络钱包、交易平台相关项目开发与后期维护，独立完成多款响应式企业官网搭建开发。',
      '参与多款游戏社区、网络钱包、响应式企业官网等应用的开发与维护。'
    ]
  },
  {
    company: '企大咖',
    role: '前端工程师',
    period: '2020/05 - 2022/06',
    year: '2020',
    descriptions: ['负责响应式官网、企业管理后台、uni-app（小程序+App）的开发与维护。']
  },
  {
    company: '正度科技',
    role: '前端工程师',
    period: '2019/07 - 2020/03',
    year: '2019',
    descriptions: ['负责Web及小程序开发，完成页面实现与功能落地，积累了一定的项目经验。']
  },
  {
    company: '河南城建学院',
    role: '信息管理与信息系统 | 本科',
    period: '2012/09 - 2016/07',
    year: '2012',
    descriptions: [
      '主修前端网页设计、Web 全流程开发、后端基础，具备前后端协同思维。',
      '课程实践覆盖界面开发、功能实现、数据交互，专业与前端岗位高度匹配。'
    ]
  }
]
</script>

<template>
  <section class="py-5 text-gray-200 font-mono">
    <div class="max-w-4xl mx-auto px-6">
      <div class="space-y-6 lg:space-y-0">
        <div v-for="(job, index) in experiences" :key="index">
          <!-- ==================== 移动端布局 ==================== -->
          <div class="block lg:hidden">
            <!-- 年份 -->
            <div class="mb-3 flex items-center gap-3">
              <span class="text-cyan-400 text-base bg-cyan-400/10 px-3 py-1 rounded-full">
                {{ job.period }}
              </span>
            </div>

            <!-- 内容卡片 -->
            <div
              class="bg-[#131b2d] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-400/5"
            >
              <div class="mb-3">
                <h3 class="text-xl font-bold text-white">{{ job.company }}</h3>
                <p class="text-gray-400 text-sm">{{ job.role }}</p>
              </div>

              <div class="space-y-2 text-gray-300 text-sm">
                <div v-for="(desc, dIndex) in job.descriptions" :key="dIndex" class="flex items-start gap-2">
                  <span class="text-cyan-400 shrink-0">●</span>
                  <p>{{ desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ==================== PC端布局 ==================== -->
          <div class="hidden lg:block relative">
            <div class="flex">
              <!-- 左侧：大号年份背景 -->
              <div class="w-[140px] shrink-0 relative">
                <div class="absolute inset-0 flex items-center justify-end pointer-events-none">
                  <span class="text-[5.5rem] italic font-black text-white/40 leading-none select-none mr-2">
                    {{ job.year }}
                  </span>
                </div>
              </div>

              <!-- 时间轴竖线 + 圆点 -->
              <div class="relative flex flex-col items-center w-[30px] shrink-0">
                <!-- 圆点 -->
                <div class="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30 shrink-0 mt-[22px]" />
                <!-- 竖线（最后一项不显示） -->
                <div v-if="index < experiences.length - 1" class="w-px flex-1 bg-cyan-500/20" />
              </div>

              <!-- 内容卡片 -->
              <div class="flex-1 pl-6" :class="{ 'pb-10': index < experiences.length - 1 }">
                <div
                  class="bg-[#131b2d] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-400/5"
                >
                  <!-- 公司信息行 -->
                  <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-white">{{ job.company }}</h3>
                      <p class="text-gray-400 text-sm">{{ job.role }}</p>
                    </div>
                    <span class="text-cyan-400 text-sm bg-cyan-400/10 px-3 py-1 rounded-full shrink-0">
                      {{ job.period }}
                    </span>
                  </div>

                  <!-- 描述列表 -->
                  <div class="space-y-2.5 text-gray-300 text-sm">
                    <div v-for="(desc, dIndex) in job.descriptions" :key="dIndex" class="flex items-start gap-2">
                      <span class="text-cyan-400 shrink-0">●</span>
                      <p>{{ desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
