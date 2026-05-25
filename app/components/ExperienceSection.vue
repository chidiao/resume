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
        <div
          v-for="(exp, index) in mobileExperiences"
          :key="index"
          class="relative pl-8"
        >
          <!-- 移动端连接线 -->
          <div class="absolute left-[0.375rem] top-0 bottom-0 flex flex-col items-center">
            <!-- 圆点 -->
            <div
              class="w-3 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)] shrink-0 mt-6"
            />
            <!-- 连线（最后一项无） -->
            <div
              v-if="index < mobileExperiences.length - 1"
              class="w-px flex-1 bg-gradient-to-b from-[#00e5ff]/30 to-transparent mt-2"
            />
          </div>

          <!-- 卡片 -->
          <div
            class="bg-[#131b2d] border border-[#00e5ff]/10 rounded-xl p-6 hover:border-[#00e5ff]/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] transition-all duration-300 cursor-pointer group"
          >
            <!-- 时间段 -->
            <span class="inline-block text-xs text-[#00e5ff] bg-[#00e5ff]/5 px-3 py-1 rounded-full mb-3 border border-[#00e5ff]/10">
              {{ exp.period }}
            </span>

            <div class="mb-4">
              <h3 class="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-200">
                {{ exp.company }}
              </h3>
              <p class="text-gray-400 text-sm mt-0.5">{{ exp.role }}</p>
            </div>

            <div class="space-y-3 text-gray-300 text-sm leading-relaxed">
              <div v-for="(desc, dIndex) in exp.descriptions" :key="dIndex" class="flex items-start gap-3">
                <span class="mt-[0.35rem] block w-1.5 h-1.5 rounded-full bg-[#00e5ff]/60 shrink-0" />
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
          <div class="w-[220px] shrink-0 relative">
            <template v-if="item.type === 'year'">
              <div class="absolute inset-0 flex items-center justify-end pointer-events-none">
                <span
                  class="text-[5rem] font-orbitron italic font-bold text-white/[0.07] leading-none select-none tracking-[-0.03em]"
                  style="text-shadow: 0 0 60px rgba(0, 229, 255, 0.15)"
                >
                  {{ item.value }}
                </span>
              </div>
            </template>
          </div>

          <!-- 时间轴列（竖线 + 圆点） -->
          <div class="relative flex flex-col items-center w-[30px] shrink-0">
            <template v-if="item.type === 'year'">
              <!-- 圆点 -->
              <div
                class="w-3.5 h-3.5 rounded-full bg-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.6)] shrink-0 mt-3 ring-2 ring-[#00e5ff]/20"
              />
              <!-- 竖线（最后一项无） -->
              <div
                v-if="index < timelineItems.length - 1"
                class="w-px flex-1 bg-gradient-to-b from-[#00e5ff]/25 via-[#00e5ff]/10 to-transparent"
              />
            </template>
            <template v-else>
              <!-- 经验行：竖线贯穿整行 -->
              <div class="w-px flex-1 bg-gradient-to-b from-[#00e5ff]/15 to-[#00e5ff]/5" />
            </template>
          </div>

          <!-- 右侧内容列 -->
          <div class="flex-1 pl-8" :class="index < timelineItems.length - 1 ? 'pb-12' : ''">
            <template v-if="item.type === 'exp' && item.exp">
              <div
                class="bg-[#131b2d] border border-[#00e5ff]/10 rounded-xl p-6 hover:border-[#00e5ff]/30 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] transition-all duration-300 cursor-pointer group"
              >
                <!-- 公司信息行 -->
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-200">
                      {{ item.exp.company }}
                    </h3>
                    <p class="text-gray-400 text-sm mt-0.5">{{ item.exp.role }}</p>
                  </div>
                  <span
                    class="text-xs text-[#00e5ff] bg-[#00e5ff]/5 px-3 py-1 rounded-full shrink-0 border border-[#00e5ff]/10"
                  >
                    {{ item.exp.period }}
                  </span>
                </div>

                <!-- 描述列表 -->
                <div class="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <div v-for="(desc, dIndex) in item.exp.descriptions" :key="dIndex" class="flex items-start gap-3">
                    <span class="mt-[0.35rem] block w-1.5 h-1.5 rounded-full bg-[#00e5ff]/60 shrink-0" />
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