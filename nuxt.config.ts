export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  modules: ['@unocss/nuxt', '@nuxt/image'],
  vite: {
    optimizeDeps: {
      include: [
        'swiper/modules',
        'swiper/vue',
      ]
    }
  },
  image: {
    format: ['webp'],
    quality: 80,
    densities: [1, 2],
  },
  app: {
    head: {
      title: '个人简历'
    }
  }
})
