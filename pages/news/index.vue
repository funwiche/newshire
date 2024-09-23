<template>
  <Title>{{ title }}</Title>

  <breadcrum :title="title" />
  <section class="p-6">
    <div class="container">
      <div class="text-sm text-opacity pb-4">
        Showing {{ news.length }} results
      </div>
      <div class="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        <nuxt-link
          v-for="item in news"
          :key="item.slug"
          :to="item.slug"
          class="ba shadow-lg cursor-pointer font-sans flex flex-col group"
        >
          <div class="col-span-2 aspect-video">
            <img
              :src="item.image"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex-1">
              <div class="text-xs opacity-65">
                {{ item.date }}
              </div>
              <div
                class="text-xl sm:text-2xl mt-3 line-clamp-2 group-hover:underline"
              >
                {{ item.title }}
              </div>
              <div class="text-sm opacity-75 line-clamp-3 mt-3">
                {{ item.excerpt }}
              </div>
            </div>
            <div class="flex items-center pt-4 text-success">
              <span class="text-overline pr-2">read more</span>
              <i class="fa-solid fa-right-long text-sm opacity-80" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import items from "~/resources/news";
const title = "News";
const news = items.filter((el) => el.title);
</script>

<style lang="scss" scoped></style>
