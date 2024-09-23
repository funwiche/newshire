<template>
  <section class="px-4 py-8 md:py-20">
    <div class="container md:flex items-start">
      <div class="flex flex-1 pb-4">
        <div class="gap-6 flex items-center">
          <h3 class="flex-1 italic text-2xl font-serif">
            {{ title }}
          </h3>
          <hr class="w-12 border-black" />
        </div>
      </div>
      <div class="flex flex-1 text-xl sm:text-4xl font-thin mt-4 md:pt-16">
        {{ desc }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<style scoped></style>
