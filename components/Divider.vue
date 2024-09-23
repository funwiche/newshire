<template>
  <div class="flex-start gap-2">
    <span v-if="title" class="white-space-nowrap text-sm font-black font-serif">
      {{ title }}
    </span>
    <hr class="flex-1 border-white" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<style scoped></style>
