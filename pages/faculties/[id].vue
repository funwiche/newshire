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
  <Program :items="items" />
</template>

<script setup lang="ts">
import faculties from "~/resources/faculties.json";
import programs from "~/resources/programs";
const route = useRoute();
const faculty = computed(() =>
  faculties.find((el) => el.slug == route.params.id)
);
const items: any = computed(
  () => programs.filter((el) => el.faculty == faculty.value?.name) || []
);
</script>

<style scoped></style>
