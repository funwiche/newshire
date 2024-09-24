<template>
  <section class="bg-cover bg-right bg-[url('/sliders/banner7.webp')]">
    <div class="text-white bg-black/70 py-16 lg:py-20">
      <Heading title="Life at" :subtitle="$app.name" />
      <div class="flex items-center container max-lg:px-4">
        <div class="max-w-screen-sm">
          <p class="font-serif pb-6">
            Going to university is about much more than getting a qualification,
            it’s also the chance to enjoy an exciting social life, gain some
            independence and make the most of the new opportunities available.
          </p>
          <nuxt-link to="/student-life" class="btn bg-error">
            DISCOVER
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props: any = defineProps({
  items: Array,
  title: String,
  msg: String,
  src: String,
});
</script>

<style scoped></style>
