<template>
  <div class="device-stack">
    <!-- 底层：平板/PC 预览 -->
    <div class="device device-tablet">
      <img src="/img/marsx-old-ow-pc.jpg" alt="Tablet Preview" />
    </div>
    <!-- 上层：手机预览 -->
    <div class="device device-phone">
      <img src="/img/marsx-old-ow-mb.jpg" alt="Phone Preview" />
    </div>
  </div>
</template>

<style scoped>
.device-stack {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  perspective: 1000px; /* 关键：开启3D透视，让旋转更有空间感 */
}

.device {
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  background: #111;
}
.device img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 底层平板：靠后、缩小、柔和阴影 */
.device-tablet {
  z-index: 1;
  width: 90%;
  height: 80%;
  left: 0;
  bottom: 0;
  transform: scale(0.95);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
}

/* 上层手机：靠前、放大、旋转、强阴影 */
.device-phone {
  z-index: 2;
  width: 35%;
  aspect-ratio: 9 / 19.5;
  right: 10%;
  top: 10%;
  /* 核心：缩放+旋转+3D透视 */
  transform: scale(1.05) rotate(-8deg);
  /* 强阴影，做出悬浮感 */
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.5),
    0 10px 20px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

/* hover 增强互动空间感 */
.device-stack:hover .device-phone {
  transform: scale(1.08) rotate(-4deg) translateY(-10px);
}
</style>