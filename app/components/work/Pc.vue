<template>
  <div class="bg-gray-950/5">
    <div class="rounded-xl bg-gray-950 outline outline-white/15">
      <div class="rounded-xl p-2 text-sm">
        <div class="flex gap-2 p-2">
          <span class="size-3 rounded-full bg-white/20"></span>
          <span class="size-3 rounded-full bg-white/20"></span>
          <span class="size-3 rounded-full bg-white/20"></span>
        </div>

        <div>
          <div class="rounded-xl overflow-hidden">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
