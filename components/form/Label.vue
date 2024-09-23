<template>
  <div class="sm:flex max-w-screen-sm py-1">
    <div class="flex sm:pt-2 sm:w-1/3 pr-2">
      <label class="block sm:flex-1 text-xs font-bold">
        {{ label }}
      </label>
      <span class="text-error max-sm:-mt-1" v-if="required">*</span>
    </div>
    <div class="sm:w-2/3"><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label?: string; required?: boolean }>();
</script>

<style scoped></style>
