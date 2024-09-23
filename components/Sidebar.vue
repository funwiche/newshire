<template>
  <div @click.stop>
    <div @click="toggle" class="place-center cursor-pointer">
      <i class="fa-solid fa-bars text-3xl" />
    </div>
    <aside
      :class="open ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 transition-transform duration-500 z-50 flex flex-col h-screen bg-primary text-white w-96 max-w-[90vw] shadow-2xl overflow-y-auto"
    >
      <div @click="toggle" class="h-12 flex-end cursor-pointer px-4">
        <i class="fa-light fa-xmark text-2xl" />
      </div>
      <nuxt-link
        v-for="n in links"
        :key="n.url"
        :to="n.url"
        class="flex px-8 py-3 capitalize hover:text-warning"
      >
        {{ n.name }}
      </nuxt-link>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { fixedBody } from "~/utils";
const route = useRoute();
const open = ref(false);
onMounted(() =>
  document.body.addEventListener("click", () => (open.value = false))
);

function toggle() {
  if (!open.value) document.body.click();
  open.value = !open.value;
}
watch(
  () => route.fullPath,
  () => (open.value = false)
);
watch(open, fixedBody);
const links = [
  { name: "about us", url: "/about" },
  { name: "Admissions", url: "/admissions" },
  { name: "Academics", url: "/academics" },
  { name: "Research", url: "/research" },
  { name: "Tuition & Fees", url: "/admissions/tuition" },
  { name: "Important dates", url: "/admissions/deadlines" },
  { name: "Student life", url: "/student-life" },
  { name: "Libraries", url: "/library" },
  { name: "Faculties and Schools", url: "/faculties" },
  { name: "International office", url: "/international" },
  { name: "Visas and immigration", url: "/immigration" },
  { name: "news & events", url: "/news" },
  { name: "career opportunities", url: "/careers" },
  { name: "contact us", url: "/contact" },
];
</script>

<style scoped></style>
