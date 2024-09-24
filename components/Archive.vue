<template>
  <section class="py-4 md:py-8 max-lg:px-4 container">
    <div class="mb-3 text-xs sm:text-sm">
      Showing {{ items.length }} programs
    </div>
    <Program :items="items" :degree="degree" />
  </section>
</template>

<script setup lang="ts">
import programs from "~/resources/programs.json";
const props = defineProps<{ degree?: string }>();
const route: any = useRoute();
const items: any = computed(() => {
  const name = route.query.q || "";
  const program = route.query.program || "";
  const degree = props.degree || "";
  return (
    programs
      .filter((el) => el.name)
      .filter((el) => {
        const text = name.toLowerCase();
        if (!text) return true;
        return el.name.toLowerCase().includes(text);
      })
      .filter((el: any) => {
        if (!degree) return true;
        return el.degree[degree];
      })
      .filter((el) => {
        if (!program) return true;
        return el.faculty === program;
      }) || []
  );
});
</script>

<style scoped></style>
