<template>
  <div :class="index === 0 ? 'border-y' : 'border-b'">
    <div
      class="flex items-center group"
      @click="model === index ? (model = null) : (model = index)"
    >
      <div
        class="flex-1 py-6 pr-3 text-lg font-bold underline-offset-4 decoration-2 group-hover:underline cursor-pointer"
      >
        {{ title }}
      </div>
      <span class="text-error text-lg">
        <i v-if="model === index" class="fa-regular fa-minus" />
        <i v-else class="fa-regular fa-plus" />
      </span>
    </div>
    <div :class="{ hidden: model !== index }" class="pb-4"><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ index: any; title: string }>();
const model = defineModel();
</script>

<style scoped></style>
