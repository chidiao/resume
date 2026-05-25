<template>
  <div class="relative mx-auto aspect-square max-w-[560px]">
    <!-- 中心错位叠放圆形 -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style="width: 58%; height: 58%">
      <!-- 大圆 - 主圆，居中偏下 -->
      <div
        class="orbit-circle orbit-circle--large animate-pulse-slow"
        style="width: 82%; height: 82%; left: 9%; top: 12%"
      ></div>
      <!-- 中圆1 - 左上偏移，紫色 -->
      <div
        class="orbit-circle orbit-circle--purple animate-pulse-slow"
        style="width: 55%; height: 55%; left: 0%; top: 0%; animation-delay: 0.4s"
      ></div>
      <!-- 中圆2 - 右下偏移，青色 -->
      <div
        class="orbit-circle orbit-circle--cyan animate-pulse-slow"
        style="width: 50%; height: 50%; right: 0%; bottom: 0%; animation-delay: 0.8s"
      ></div>
      <!-- 小圆1 - 右上，蓝色 -->
      <div
        class="orbit-circle orbit-circle--blue animate-pulse-slow"
        style="width: 32%; height: 32%; right: 6%; top: 8%; animation-delay: 1.2s"
      ></div>
      <!-- 小圆2 - 左中，绿色 -->
      <div
        class="orbit-circle orbit-circle--green animate-pulse-slow"
        style="width: 24%; height: 24%; left: 12%; top: 40%; animation-delay: 1.6s"
      ></div>
      <!-- 小圆3 - 中下偏右，蓝紫 -->
      <div
        class="orbit-circle orbit-circle--indigo animate-pulse-slow"
        style="width: 18%; height: 18%; left: 48%; top: 52%; animation-delay: 0.2s"
      ></div>
    </div>

    <!-- 技能卡片1：Vue3（左上） -->
    <div class="skill-card skill-card-1 absolute left-[2%] top-[5%]">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/15">
          <svg class="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
          </svg>
        </div>
        <span class="text-base font-semibold text-white">Vue3</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span class="skill-tag">Router</span>
        <span class="skill-tag">Pinia</span>
        <span class="skill-tag">Vite</span>
      </div>
    </div>

    <!-- 技能卡片2：Nuxt（右上） -->
    <div class="skill-card skill-card-2 absolute right-[2%] top-[12%]">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/15">
          <svg class="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.464 0s3.098 1.685 4.719 5.916c.734 1.898 1.092 3.847 1.092 5.218 0 3.062-1.33 5.332-3.298 7.026l.012-.012c.908-.891 1.5-2.112 1.5-3.472 0-1.348-.633-2.719-1.43-3.978-.895-1.388-2.298-2.484-3.364-3.402.214.416.393.832.5 1.258.294 1.16.188 2.385-.147 3.473l-.015.05-.01.03-.01.03c-.233.662-.547 1.249-.92 1.782-.08.112-.162.223-.244.334-.037.046-.082.098-.117.15-.001.002-.002.004-.003.006h-.002l-1.08 1.284-1.08-1.284h-.002l-.003-.006c-.035-.052-.08-.104-.117-.15-.082-.111-.164-.222-.244-.334-.373-.533-.687-1.12-.92-1.782l-.01-.03-.01-.03-.015-.05c-.335-1.088-.441-2.313-.147-3.473.107-.426.286-.842.5-1.258-1.066.918-2.469 2.014-3.364 3.402-.797 1.259-1.43 2.63-1.43 3.978 0 1.36.592 2.581 1.5 3.472l.012.012C5.526 16.468 4.196 14.198 4.196 11.136c0-1.371.358-3.32 1.092-5.218C6.906 1.685 10.004 0 10.004 0c.852 1.263 1.996 4.178 1.996 4.178S13.464 0 13.464 0Z"/>
          </svg>
        </div>
        <span class="text-base font-semibold text-white">Nuxt</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span class="skill-tag">SSR</span>
        <span class="skill-tag">SSG</span>
        <span class="skill-tag">Nitro</span>
      </div>
    </div>

    <!-- 技能卡片3：UniApp（左下） -->
    <div class="skill-card skill-card-3 absolute bottom-[8%] left-[5%]">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/15">
          <svg class="h-6 w-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <span class="text-base font-semibold text-white">UniApp</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span class="skill-tag">跨端</span>
        <span class="skill-tag">小程序</span>
        <span class="skill-tag">H5</span>
      </div>
    </div>

    <!-- 技能卡片4：Web3（右下） -->
    <div class="skill-card skill-card-4 absolute bottom-[20%] right-[3%]">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/15">
          <svg class="h-6 w-6 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
        <span class="text-base font-semibold text-white">Web3</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span class="skill-tag">Ethers</span>
        <span class="skill-tag">DApp</span>
        <span class="skill-tag">Wallet</span>
      </div>
    </div>

    <!-- 连接线 -->
    <svg class="absolute inset-0 h-full w-full" style="z-index: -1">
      <line x1="14%" y1="16%" x2="42%" y2="42%" stroke="rgba(59,130,246,0.08)" stroke-width="1" stroke-dasharray="4 4" />
      <line x1="86%" y1="24%" x2="58%" y2="42%" stroke="rgba(59,130,246,0.08)" stroke-width="1" stroke-dasharray="4 4" />
      <line x1="18%" y1="78%" x2="42%" y2="58%" stroke="rgba(59,130,246,0.08)" stroke-width="1" stroke-dasharray="4 4" />
      <line x1="82%" y1="70%" x2="58%" y2="58%" stroke="rgba(59,130,246,0.08)" stroke-width="1" stroke-dasharray="4 4" />
    </svg>
  </div>
</template>

<style scoped>
/* 错位圆形 */
.orbit-circle {
  position: absolute;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
}

.orbit-circle--large {
  border-color: rgba(96, 165, 250, 0.25);
  background: rgba(96, 165, 250, 0.06);
}
.orbit-circle--purple {
  border-color: rgba(168, 85, 247, 0.25);
  background: rgba(168, 85, 247, 0.05);
}
.orbit-circle--cyan {
  border-color: rgba(6, 182, 212, 0.25);
  background: rgba(6, 182, 212, 0.05);
}
.orbit-circle--blue {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.07);
}
.orbit-circle--green {
  border-color: rgba(52, 211, 153, 0.25);
  background: rgba(52, 211, 153, 0.05);
}
.orbit-circle--indigo {
  border-color: rgba(129, 140, 248, 0.3);
  background: rgba(129, 140, 248, 0.06);
}

/* 脉冲动画 */
.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.6; }
}

/* 浮动卡片 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.skill-card {
  border-radius: 16px;
  border: 1px solid rgba(75, 85, 99, 0.4);
  background: rgba(31, 41, 55, 0.75);
  backdrop-filter: blur(12px);
  padding: 18px 22px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: default;
  animation: float 5s ease-in-out infinite;
}
.skill-card:hover {
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);
}
.skill-card-1 { animation-delay: 0s; }
.skill-card-2 { animation-delay: 1.2s; }
.skill-card-3 { animation-delay: 2.5s; }
.skill-card-4 { animation-delay: 0.6s; }

.skill-tag {
  border-radius: 0.375rem;
  background: rgba(55, 65, 81, 0.6);
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  color: #d1d5db;
  backdrop-filter: blur(4px);
}

/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .animate-pulse-slow {
    animation: none;
  }
}
</style>