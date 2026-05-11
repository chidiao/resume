<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="section-title">
        <span>//</span>
        <span>Projects</span>
      </h2>

      <div class="projects-list">
        <div class="project-card" v-for="(item, i) in projects" :key="i">
          <!-- 左侧：电脑 + 手机 双层样机层叠 -->
          <div class="device-wrap">
            <!-- 电脑样机（底层） -->
            <div class="pc-device">
              <div class="pc-screen">
                <img :src="item.pcImg" alt="PC预览" />
              </div>
              <div class="pc-body"></div>
              <div class="pc-base"></div>
            </div>

            <!-- 手机样机（上层悬浮） -->
            <div class="mobile-device">
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <img :src="item.mbImg" alt="Mobile预览" />
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧项目信息 -->
          <div class="project-info">
            <div class="project-header">
              <span class="project-number">{{ `0${i + 1}` }}</span>
              <h3 class="project-title">{{ item.title }}</h3>
            </div>

            <p class="project-desc">{{ item.desc }}</p>

            <div class="feature-list">
              <div v-for="(f, k) in item.features" :key="k"><span>▶</span> {{ f }}</div>
            </div>

            <div class="tags">
              <span v-for="tag in item.tags" :key="tag" class="bg-[#1c273d] text-[#00e5ff] px-3 py-[7px] rounded-md text-xs">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: '企业响应式官网',
    desc: 'Nuxt4 开发的品牌官网，支持深色模式、响应式布局、SSR 服务端渲染、滚动视效、多端自适应展示。',
    pcImg: 'https://picsum.photos/1280/800?a1',
    mbImg: 'https://picsum.photos/480/960?b1',
    features: [
      'PC / Mobile 全端响应式适配',
      'Nuxt4 SSR 加速首屏加载',
      '科技暗色UI + 霓虹光效',
      '自定义交互动画 & 视差效果'
    ],
    tags: ['Nuxt4', 'Vue3', 'SCSS', 'SSR', 'Responsive']
  }
]
</script>

<style scoped>
/* 科技暗色背景 */
.projects-section {
  background: #0a0f1e;
  min-height: 100vh;
  padding: 70px 20px;
  color: #e1e7f5;
  font-family: 'JetBrains Mono', monospace;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

.section-title {
  font-size: 34px;
  color: #00e5ff;
  margin-bottom: 50px;
  display: flex;
  gap: 14px;
  align-items: center;
}

.section-title span {
  color: #7b8ca8;
}

/* 项目卡片 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.project-card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: center;
  background: #131b2d;
  border-radius: 18px;
  padding: 45px;
  border: 1px solid #273655;
  transition: 0.35s;
  position: relative;
  overflow: hidden;
}
.project-card:hover {
  border-color: #00e5ff;
  box-shadow: 0 0 45px rgba(0, 229, 255, 0.15);
}

/* ============================== */
/* 核心：电脑 + 手机 双层样机 */
/* ============================== */
.device-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
}

/* 电脑样机 */
.pc-device {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
}
.pc-screen {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #111;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
.pc-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.pc-body {
  width: 96%;
  height: 14px;
  background: #20252f;
  margin: 0 auto;
  border-radius: 0 0 6px 6px;
}
.pc-base {
  width: 30%;
  height: 10px;
  background: #2a303d;
  margin: 0 auto;
  border-radius: 4px;
}

/* 手机样机（悬浮） */
.mobile-device {
  position: absolute;
  z-index: 2;
  right: -12%;
  bottom: -8%;
  width: 34%;
  transition: 0.35s ease;
}
.project-card:hover .mobile-device {
  transform: translateY(-6px) scale(1.02);
}
.mobile-frame {
  width: 100%;
  aspect-ratio: 9 / 19.5;
  background: #111;
  border-radius: 32px;
  padding: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}
.mobile-screen {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
}
.mobile-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧文字 */
.project-info {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.project-header {
  display: flex;
  align-items: center;
  gap: 14px;
}
.project-number {
  background: #1c273d;
  color: #00e5ff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
.project-title {
  font-size: 26px;
  margin: 0;
  color: #f3f7ff;
}
.project-desc {
  color: #aab6cf;
  line-height: 1.7;
  font-size: 15px;
}
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8c9cba;
  font-size: 14px;
}
.feature-list span {
  color: #00e5ff;
  margin-right: 6px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}


/* 移动端适配 */
@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 1fr;
    padding: 35px 25px;
  }
  .mobile-device {
    right: -6%;
    width: 38%;
  }
}
</style>
