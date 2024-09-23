<template>
  <Title>{{ title }}</Title>

  <breadcrum :title="title" src="/sliders/banner3.webp" />
  <Subheading
    :title="title"
    desc="Our academic structure is divided into Six faculties, that enable the University to benefit from the synergies that exist between subjects and disciplines. This provides opportunities for collaboration and development of interdisciplinary areas of teaching and research expertise."
  />
  <Heading title="Our" subtitle="Faculties" />
  <section
    class="container max-lg:px-4 pb-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
  >
    <nuxt-link
      v-for="n in faculties"
      :key="n.slug"
      :to="`/faculties/${n.slug}`"
      class="group block"
    >
      <img :src="n.image" class="mb-4" />
      <h2
        class="text-xl sm:text-2xl font-bold underline-offset-[6px] decoration-4 group-hover:underline mb-2"
      >
        Faculty of {{ n.name }}
      </h2>
      <p class="text-sm line-clamp-4">{{ n.excerpt }}</p>
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
import faculties from "~/resources/faculties.json";
const title = "Faculties and Schools";
</script>

<style lang="scss" scoped></style>
