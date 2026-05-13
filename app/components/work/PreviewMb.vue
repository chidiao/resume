<template>
  <div>
    <div class="rounded-xl bg-black/5 p-2 outline outline-white/15 backdrop-blur-md dark:bg-white/10">
      <div
        class="relative flex w-full flex-col rounded-xl overflow-hidden outline outline-black/5 dark:bg-gray-950 gap-6 items-center"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
