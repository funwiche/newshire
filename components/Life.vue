<template>
  <section class="bg-cover bg-right bg-[url('/sliders/banner7.webp')]">
    <div class="bg-black/70 px-4">
      <div class="h-[430px] md:h-[600px] container flex items-center">
        <div class="text-white max-w-[600px]">
          <Heading title="Life at" :subtitle="$app.name" />
          <p class="md:text-xl mb-6">
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
