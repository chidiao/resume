<template>
  <section class="flex min-h-dvh scroll-mt-16 items-center px-5 py-20 md:px-10 lg:h-dvh lg:px-14 lg:py-16">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(620px,1.18fr)] lg:gap-16 xl:gap-24"
    >
      <ProjectsDappInfo :stats="stats" :tags="tags" />
      <ProjectsDappPreview :projects="projects" />
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Vue3', 'Nuxt 3', 'UniApp', 'web3.js', 'Wagmi', 'MetaMask', 'Klinecharts', 'i18n']

const stats = [
  { icon: 'i-fa-solid-wallet', value: 'Wallet', label: '钱包连接' },
  { icon: 'i-fa-solid-link', value: 'On-chain', label: '链上交互' },
  { icon: 'i-fa-solid-chart-line', value: 'Charts', label: '资产图表' }
]

const projects = [
  {
    name: 'HMC Wallet Pro',
    type: 'Crypto Wallet',
    accent: 'Wallet',
    description: '加密钱包项目，覆盖资产展示、收发转账、H5 预览与 Google Play 上架版本。',
    images: ['/img/dapp/hmc-1.jpg', '/img/dapp/hmc-2.jpg', '/img/dapp/hmc-3.jpg'],
    tags: ['UniApp', 'Android', 'Wallet', 'Google Play'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hammermining.walletpro' },
      { label: 'H5 预览', url: 'https://walletpro.hammermining.com/app' }
    ]
  },
  {
    name: 'ClicksX',
    type: 'Trading DApp',
    accent: 'DApp',
    description: 'Web3 去中心化应用，集成钱包连接、链上交互与 Klinecharts 资产趋势展示。',
    images: ['/img/dapp/clicks1.jpg', '/img/dapp/clicks3.jpg', '/img/dapp/clicks4.jpg'],
    tags: ['Vue3', 'web3.js', 'Wagmi', 'Klinecharts'],
    links: []
  },
  {
    name: 'Rustar Mining',
    type: 'Mining H5',
    accent: 'Mining',
    description: 'Nuxt 3 H5 挖矿应用，覆盖虚拟矿机、算力管理、排名收益与国际化能力。',
    images: ['/img/dapp/mine1.jpg', '/img/dapp/mine2.jpg', '/img/dapp/mine3.jpg'],
    tags: ['Nuxt 3', 'H5', 'Wallet', 'i18n'],
    links: []
  }
]
</script>
