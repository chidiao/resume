import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [presetWind4()],
  rules: [
    ['font-orbitron', { 'font-family': "'Orbitron', sans-serif" }],
    ['font-exo', { 'font-family': "'Exo 2', sans-serif" }],
  ]
})
