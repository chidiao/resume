export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  routeRules: {
    '/**': { ssr: false }
  },
  modules: ['@unocss/nuxt'],
  app: {
    head: {
      title: '个人简历'
    }
  }
})
