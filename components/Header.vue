<template>
  <header class="bg-primary text-white px-4">
    <section class="flex md:hidden items-center justify-between h-20">
      <nuxt-link to="/" class="cursor-pointer py-4 inline-flex">
        <img width="150" src="/nu-logo.png" :alt="$app.name" />
      </nuxt-link>
      <Sidebar />
    </section>
    <section class="container hidden md:flex-start overflow-hidden h-28">
      <nuxt-link to="/" class="cursor-pointer py-4 inline-flex">
        <img width="200" src="/nu-logo.png" :alt="$app.name" />
      </nuxt-link>
      <div class="flex-1">
        <div class="flex-end gap-x-6">
          <nuxt-link
            :to="n.url"
            v-for="n in top_menu"
            class="text-sm capitalize hover:underline inline-flex py-3"
            >{{ n.name }}</nuxt-link
          >
        </div>
        <div class="flex-end gap-10">
          <nuxt-link
            :to="n.url"
            v-for="n in menu"
            :key="n.url"
            class="hover:underline font-semibold py-4 text-lg"
          >
            {{ n.name }}
          </nuxt-link>
          <Sidebar />
        </div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
const scrolly = ref(0);
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolly.value = window.scrollY;
  });
});
const menu = [
  { name: "Academics", url: "/academics" },
  { name: "Admissions", url: "/admissions" },
  { name: "Student Life", url: "/student-life" },
  { name: "Research", url: "/research" },
];
const top_menu = [
  { name: "Apply Now", url: "/admissions/how-to-apply" },
  { name: "Faculties", url: "/faculties" },
  { name: "news", url: "/news" },
  { name: "library", url: "/library" },
  { name: "careers", url: "/careers" },
  { name: "about", url: "/about" },
  { name: "contact", url: "/contact" },
];
</script>

<style lang="scss" scoped></style>
