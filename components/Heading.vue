<template>
  <section class="px-4 py-6">
    <div class="flex items-center gap-4 container">
      <div class="text-4xl sm:text-6xl font-bold flex-1 whitespace-nowrap">
        {{ title }}
      </div>
      <nuxt-link
        v-if="path"
        :to="path"
        class="link-bold text-warning cursor-pointer"
      >
        {{ linktitle || " See All" }}
      </nuxt-link>
    </div>
    <div class="flex items-center gap-12 container -mt-1">
      <div class="text-4xl sm:text-6xl font-serif pl-8 whitespace-nowrap">
        {{ subtitle }}
      </div>
      <hr class="flex-1" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  linktitle?: string;
  path?: string;
}>();
</script>

<style scoped></style>
