import { defineConfig, presetWind4 } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
  ],
  rules: [
    ['font-orbitron', { 'font-family': "'Orbitron', sans-serif" }],
    ['font-exo', { 'font-family': "'Exo 2', sans-serif" }],
  ]
})
