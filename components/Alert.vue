<template>
  <div v-if="model" class="mb-2 max-w-screen-sm">
    <div
      v-text="model"
      :class="
        success
          ? 'bg-success/10 text-success border-success'
          : 'bg-error/10 text-error border-error'
      "
      class="flex-start border-l-4 px-3 py-2 text-sm text-black"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
defineProps<{ success?: boolean }>();

watch(model, (val) => {
  if (val) setTimeout(() => (model.value = ""), 6000);
});
</script>

<style scoped></style>
