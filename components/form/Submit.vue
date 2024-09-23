<template>
  <Label>
    <div class="flex gap-2">
      <button type="submit" :disabled="disabled" class="btn mb-6 px-8">
        {{ title }}
      </button>
      <Loader :size="20" class="mt-1.5" v-if="loading" />
    </div>
  </Label>
</template>

<script setup lang="ts">
defineProps<{ title: string; loading?: boolean; disabled?: boolean }>();
</script>

<style scoped></style>
