<template>
  <footer class="bg-primary text-white">
    <section class="p-4">
      <div class="container md:py-6 md:flex items-center justify-between">
        <nuxt-link to="/" class="inline-block my-4 md:my-0">
          <img width="150" src="/nu-logo.png" alt="logo" />
        </nuxt-link>
        <div class="flex flex-wrap md:flex-nowrap gap-x-6">
          <nuxt-link
            v-for="n in links"
            :key="n"
            :to="`/${n}`"
            class="text-sm text-zinc-300 inline-block py-2 hover:underline capitalize"
          >
            {{ n }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <hr class="opacity-20 container" />
    <section class="p-4">
      <div class="container md:flex items-center justify-between">
        <div class="text-xs opacity-65 max-md:text-center max-md:py-2">
          Copyright @ {{ new Date().getFullYear() }} {{ $app.name }}. All Rights
          Reserved.
        </div>
        <div class="flex max-md:justify-center">
          <a
            v-for="n in socials"
            :key="n.name"
            :href="n.url"
            class="p-3 opacity-65 hover:opacity-100"
          >
            <i :class="`fa-brands fa-${n.name} text-3xl sm:text-xl`" />
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const links = [
  "admissions",
  "about",
  "contact",
  "news",
  "careers",
  "accessibility",
  "privacy",
];
const socials = [
  { name: "facebook", url: "#facebook" },
  { name: "instagram", url: "#instagram" },
  { name: "linkedin", url: "#linkedin" },
  { name: "twitter", url: "#twitter" },
];
</script>

<style lang="scss" scoped></style>
