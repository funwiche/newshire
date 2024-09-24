<template>
  <Title>{{ item.name }}</Title>
  <breadcrum
    :title="item.name"
    :src="`https://www.chester.ac.uk/media/media/graphics/world-flags/country-${item.path}.webp`"
    :items="[
      { title: 'Admissions', path: '/admissions' },
      { title: 'Countries', path: '/admissions/countries' },
    ]"
  />
  <content>
    <section class="py-4 grid gap-6">
      <div class="content" v-html="item.html" />
      <p>
        More information can be found in the
        <nuxt-link class="link-bold" to="/admissions/academic-requirements"
          >Academic Requirements</nuxt-link
        >
        and
        <nuxt-link class="link-bold" to="/admissions/language-requirements"
          >Language Requirements</nuxt-link
        >
        sections.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const route = useRoute();
import countries from "~/resources/yourcountries.json";
const item: any = computed(() =>
  countries.find((el) => el.path === route.params.id)
);
</script>

<style scoped></style>
