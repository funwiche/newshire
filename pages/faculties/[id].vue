<template>
  <Title>{{ faculty?.name }}</Title>

  <breadcrum
    :title="faculty?.name"
    :items="[{ title: 'Faculties', path: '/faculties' }]"
    :src="faculty?.image"
  />
  <Subheading
    :title="`Faculty of ${faculty?.name}`"
    :desc="faculty?.excerpt || ''"
  />
  <Heading title="Our" subtitle="Courses" />
  <div class="container max-lg:px-4">
    <div class="mb-3 text-xs sm:text-sm">
      Showing {{ items.length }} programs
    </div>
    <Program :items="items" />
  </div>
</template>

<script setup lang="ts">
import faculties from "~/resources/faculties.json";
import programs from "~/resources/programs.json";
const route = useRoute();
const faculty = computed(() =>
  faculties.find((el) => el.slug == route.params.id)
);
const items: any = computed(
  () => programs.filter((el) => el.faculty == faculty.value?.name) || []
);
</script>

<style scoped></style>
