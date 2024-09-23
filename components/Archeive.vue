<template>
  <section class="p-4 md:p-8">
    <div class="container">
      <div class="mb-3 text-xs sm:text-sm">
        Showing {{ items.length }} entries
      </div>
      <Program :items="items" />
    </div>
  </section>
</template>

<script setup lang="ts">
import courses from "~/resources/courses.json";
import programs from "~/resources/programs";
const props = defineProps(["degree"]);

const route: any = useRoute();
const items: any = computed(() => {
  const name = route.query.q || "";
  const program = route.query.program || "";
  const degree = props.degree || "";
  const items = degree ? courses : programs;
  return (
    items
      .filter((el) => el.name)
      .filter((el) => {
        const text = name.toLowerCase();
        if (!text) return true;
        return el.name.toLowerCase().includes(text);
      })
      .filter((el) => {
        if (!degree) return true;
        return el.type == degree;
      })
      .filter((el) => {
        if (!program) return true;
        return el.faculty === program;
      }) || []
  );
});
</script>

<style scoped></style>
