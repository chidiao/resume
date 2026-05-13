<template>
  <div class="preview-links-box">
    <div class="preview-header">相关项目预览</div>

    <div class="link-list">
      <a
        v-for="(item, idx) in linkList"
        :key="idx"
        :href="item.url"
        target="_blank"
        rel="noopener"
        class="link-item"
      >
        <span class="link-label">{{ item.label }}</span>
        <span class="link-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  linkList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.preview-links-box {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-header {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}

.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-item {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-width: 160px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.link-item:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.link-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

.link-arrow {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 8px;
}
</style>