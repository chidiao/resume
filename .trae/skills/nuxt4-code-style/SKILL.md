---
name: "nuxt4-code-style"
description: "Nuxt 4 项目代码规范约束。确保代码遵循 Nuxt 4 自动导入机制，使用 TailwindCSS 实现响应式设计。当生成或修改 Nuxt 4 代码时调用。"
---

# Nuxt 4 代码规范

## 核心原则

### 1. 自动导入优先

Nuxt 4 提供自动导入功能，**禁止**手动导入以下内容：

```typescript
// ❌ 错误：Nuxt 4 自动导入
import { ref, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useNuxtApp, useRuntimeConfig } from "#app";

// ✅ 正确：直接使用，无需导入
const count = ref(0);
const router = useRouter();
const config = useRuntimeConfig();
```

### 2. 组件导入

**禁止**手动导入组件：

```typescript
// ❌ 错误
import MyComponent from './components/MyComponent.vue'

// ✅ 正确：直接在模板中使用
<MyComponent />
```

### 3. TailwindCSS 使用规范

#### 3.1 响应式断点

| 断点 | 屏幕宽度 | 前缀   |
| ---- | -------- | ------ |
| sm   | ≥640px   | `sm:`  |
| md   | ≥768px   | `md:`  |
| lg   | ≥1024px  | `lg:`  |
| xl   | ≥1280px  | `xl:`  |
| 2xl  | ≥1536px  | `2xl:` |

#### 3.2 基础类名顺序

按以下顺序编写 TailwindCSS 类：

1. **布局类**: `flex`, `grid`, `block`, `inline`, `hidden`
2. **定位类**: `relative`, `absolute`, `fixed`, `sticky`
3. **间距类**: `m-*`, `p-*`, `gap-*`
4. **尺寸类**: `w-*`, `h-*`, `min-w-*`, `min-h-*`
5. **排版类**: `text-*`, `font-*`, `leading-*`, `tracking-*`
6. **颜色类**: `text-*`, `bg-*`, `border-*`
7. **装饰类**: `rounded-*`, `shadow-*`, `opacity-*`
8. **交互类**: `cursor-*`, `hover:`, `focus:`

```vue
<!-- ✅ 正确顺序 -->
<div
  class="flex relative m-4 p-2 w-full h-auto text-lg text-gray-800 bg-white rounded-lg shadow-md hover:shadow-lg"
>
  Content
</div>
```

#### 3.3 响应式写法

```vue
<!-- ✅ 正确：移动端堆叠，桌面端并排 -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>
```

### 4. 组件规范

#### 4.1 组件命名

- 使用 PascalCase 命名组件文件
- 组件名应描述性，避免缩写

```
// ✅ 正确
HeroSection.vue
SkillsSection.vue
ProjectCard.vue

// ❌ 错误
hero.vue
HS.vue
pro-card.vue
```

#### 4.2 组件结构

```vue
<script setup lang="ts">
// 1. Props 定义（使用 defineProps）
const props = defineProps<{
  title: string;
  description?: string;
}>();

// 2. 状态定义
const isOpen = ref(false);

// 3. 计算属性
const formattedTitle = computed(() => props.title.toUpperCase());

// 4. 方法定义
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <!-- 模板内容 -->
  <div class="component-class">
    <h2>{{ formattedTitle }}</h2>
    <p v-if="description">{{ description }}</p>
    <button @click="toggle">Toggle</button>
  </div>
</template>

<style scoped>
/* 仅当 TailwindCSS 无法满足时使用 */
.component-class {
  /* 自定义样式 */
}
</style>
```

### 5. 脚本规范

#### 5.1 TypeScript 类型

```typescript
// ✅ 正确：使用类型定义
interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
}

const projects = ref<Project[]>([]);

// ✅ 正确：Props 类型
defineProps<{
  items: Project[];
  title?: string;
}>();
```

#### 5.2 组合式函数

```typescript
// ✅ 正确：使用 use 前缀
const useProjects = () => {
  const projects = ref<Project[]>([]);

  const fetchProjects = async () => {
    projects.value = await $fetch("/api/projects");
  };

  return {
    projects,
    fetchProjects,
  };
};
```

### 6. 目录结构

```
app/
├── components/          # 组件目录
│   ├── common/         # 通用组件
│   ├── layout/         # 布局组件
│   └── section/        # 页面区块组件
├── composables/        # 组合式函数
├── pages/             # 页面路由
├── layouts/           # 布局模板
└── assets/            # 静态资源
```

### 7. 性能优化

- 使用 `v-memo` 缓存复杂计算
- 使用 `lazy-load` 延迟加载图片
- 避免在模板中使用复杂表达式

```vue
<!-- ✅ 正确：使用计算属性 -->
<script setup>
const complexValue = computed(() => {
  // 复杂计算逻辑
  return result;
});
</script>

<template>
  <div>{{ complexValue }}</div>
</template>
```

## 检查清单

在提交代码前，确保：

- [ ] 未手动导入 Nuxt 4 自动导入的内容
- [ ] 组件直接使用，未手动导入
- [ ] TailwindCSS 类按正确顺序排列
- [ ] 响应式断点使用正确
- [ ] TypeScript 类型定义完整
- [ ] 组件命名符合 PascalCase
- [ ] 代码无未使用的变量和导入

## 触发场景

调用此技能当：

- 生成或修改 Nuxt 4 组件
- 创建新页面或布局
- 添加组合式函数
- 更新样式或布局
- 重构现有代码
