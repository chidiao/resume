<script setup lang="ts">
interface TimelineExperience {
  company: string
  role: string
  period: string
  descriptions: string[]
}

interface TimelineItem {
  type: 'year' | 'exp'
  value?: string
  exp?: TimelineExperience
}

const timelineItems: TimelineItem[] = [
  {
    type: 'year',
    value: '2026'
  },
  {
    type: 'exp',
    exp: {
      company: '洛阳蓝景科技',
      role: '前端工程师',
      period: '2023/03 - 2026/05',
      descriptions: [
        '负责多端产品线前端开发与维护工作，主力使用 Vue3、Nuxt、UniApp 完成需求开发。',
        '熟悉 Flutter 技术，能够独立完成页面 UI 开发、布局编写与接口数据联调等工作。',
        '参与游戏社区类多端应用研发，同时负责网络钱包、交易平台相关项目开发与后期维护，独立完成多款响应式企业官网搭建开发。',
        '参与多款游戏社区、网络钱包、响应式企业官网等应用的开发与维护。'
      ]
    }
  },
  {
    type: 'year',
    value: '2023'
  },
  {
    type: 'exp',
    exp: {
      company: '某郑州公司',
      role: '前端 | 运维',
      period: '2016/07 - 2022/06',
      descriptions: [
        '负责响应式官网、企业管理后台、uni-app（小程序+App）的开发与维护。',
        '负责Web及小程序开发，完成页面实现与功能落地，积累了一定的项目经验。'
      ]
    }
  },
  {
    type: 'year',
    value: '2016'
  },
  {
    type: 'exp',
    exp: {
      company: '河南城建学院',
      role: '信息管理与信息系统 | 本科',
      period: '2012/09 - 2016/07',
      descriptions: [
        '主修前端网页设计、Web 全流程开发、后端基础，具备前后端协同思维。',
        '课程实践覆盖界面开发、功能实现、数据交互，专业与前端岗位高度匹配。'
      ]
    }
  },
  {
    type: 'year',
    value: '2012'
  }
]

// 仅移动端使用的经验列表
const mobileExperiences = timelineItems.filter((item) => item.type === 'exp').map((item) => item.exp!)
</script>

<template>
  <section class="py-5 text-gray-200 font-mono">
    <div class="max-w-4xl mx-auto px-6">
      <!-- mb -->
      <div class="space-y-6 lg:hidden">
        <div v-for="(exp, index) in mobileExperiences" :key="index">
          <div class="mb-3 flex items-center gap-3">
            <span class="text-cyan-400 text-base bg-cyan-400/10 px-3 py-1 rounded-full">
              {{ exp.period }}
            </span>
          </div>

          <div
            class="bg-[#131b2d] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-400/5"
          >
            <div class="mb-3">
              <h3 class="text-xl font-bold text-white">{{ exp.company }}</h3>
              <p class="text-gray-400 text-sm">{{ exp.role }}</p>
            </div>

            <div class="space-y-2 text-gray-300 text-sm">
              <div v-for="(desc, dIndex) in exp.descriptions" :key="dIndex" class="flex items-start gap-2">
                <span class="text-cyan-400 shrink-0">●</span>
                <p>{{ desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- pc -->
      <div class="hidden lg:block">
        <div v-for="(item, index) in timelineItems" :key="index" class="flex">
          <!-- 左侧年份列 -->
          <div class="w-[140px] shrink-0 relative">
            <template v-if="item.type === 'year'">
              <div class="absolute inset-0 flex items-center justify-end pointer-events-none">
                <span class="text-[5.5rem] italic font-black text-white/50 leading-none select-none mr-3">
                  {{ item.value }}
                </span>
              </div>
            </template>
          </div>

          <!-- 时间轴列（竖线 + 圆点） -->
          <div class="relative flex flex-col items-center w-[30px] shrink-0">
            <template v-if="item.type === 'year'">
              <!-- 圆点 -->
              <div class="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30 shrink-0 mt-3" />
              <!-- 竖线（最后一项无） -->
              <div v-if="index < timelineItems.length - 1" class="w-px flex-1 bg-cyan-500/20" />
            </template>
            <template v-else>
              <!-- 经验行：竖线贯穿整行 -->
              <div class="w-px flex-1 bg-cyan-500/20" />
            </template>
          </div>

          <!-- 右侧内容列 -->
          <div class="flex-1 pl-6" :class="index < timelineItems.length - 1 ? 'pb-10' : ''">
            <template v-if="item.type === 'exp' && item.exp">
              <div
                class="bg-[#131b2d] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-400/5"
              >
                <!-- 公司信息行 -->
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-white">{{ item.exp.company }}</h3>
                    <p class="text-gray-400 text-sm">{{ item.exp.role }}</p>
                  </div>
                  <span class="text-cyan-400 text-sm bg-cyan-400/10 px-3 py-1 rounded-full shrink-0">
                    {{ item.exp.period }}
                  </span>
                </div>

                <!-- 描述列表 -->
                <div class="space-y-2.5 text-gray-300 text-sm">
                  <div v-for="(desc, dIndex) in item.exp.descriptions" :key="dIndex" class="flex items-start gap-2">
                    <span class="text-cyan-400 shrink-0">●</span>
                    <p>{{ desc }}</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
