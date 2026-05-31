import { defineConfig, presetWind4 } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
  ],
  theme: {
    fontFamily: {
      sans: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'Source Han Sans SC', system-ui, sans-serif",
    },
  },
})
