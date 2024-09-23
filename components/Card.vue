<template>
  <nuxt-link
    v-if="alt"
    :to="path"
    :style="`background-image:url('${src}');text-decoration:none`"
    class="bg-cover bg-center group"
  >
    <div
      class="flex items-end aspect-[3/4] bg-gradient-to-b from-transparent via-black/35 to-black/80"
    >
      <div class="flex items-end w-full">
        <div
          class="flex-1 sm:text-lg md:text-2xl font-bold lg:group-hover:underline group-hover:decoration-4 underline-offset-8 text-white px-3 sm:px-4 pb-3"
        >
          {{ title }}
        </div>
        <i
          class="fa-light fa-chevron-right bg-warning text-2xl h-10 min-w-10 flex-center"
        />
      </div>
    </div>
  </nuxt-link>
  <div v-else>
    <nuxt-link
      :to="path"
      class="sm:hidden flex items-center bg-[#22222E] text-white border-t-2 border-primary px-4 py-6"
    >
      <div class="text-xl font-medium flex-1 pr-4">
        {{ title }}
      </div>
      <i class="fa-solid fa-right-long ml-1" />
    </nuxt-link>
    <nuxt-link
      :to="path"
      :style="`background-image:url('${src}')`"
      class="relative aspect-square hidden sm:block group cursor-pointer bg-cover bg-center text-white"
    >
      <div
        class="h-full w-full bg-gradient-to-b from-transparent via-black/35 to-black/80 flex flex-col justify-end p-1"
      >
        <div class="flex items-end w-full">
          <div
            class="flex-1 sm:text-lg md:text-2xl font-bold lg:group-hover:underline group-hover:decoration-4 underline-offset-8 text-white px-3 sm:px-4 pb-3"
          >
            {{ title }}
          </div>
          <i
            class="fa-light fa-chevron-right bg-warning text-2xl h-10 min-w-10 flex-center"
          />
        </div>
      </div>
      <div
        class="bg-primary absolute inset-0 z-1 transition-all overflow-hidden h-0 group-hover:h-auto"
      >
        <div class="p-8">
          <div class="text-sm mb-4">
            {{ msg }}
          </div>
          <div class="flex items-center text-overline">
            find out more
            <i class="fa-solid fa-right-long ml-1" />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  msg: String,
  path: String,
  src: String,
  alt: Boolean,
});
</script>

<style scoped></style>
