<template>
  <div class="bg-white">
    <section class="px-4">
      <div class="container">
        <div class="flex-start flex-wrap text-primary text-sm py-3 gap-x-2">
          <nuxt-link
            to="/"
            class="text-primary opacity-85 cursor-pointer hover:opacity-100 hover:underline underline-offset-4 decoration-primary decoration-2 font-medium whitespace-nowrap"
          >
            Home
          </nuxt-link>
          <div class="border-l h-3.5 border-primary/80" />
          <div
            :key="n.path"
            class="flex-start gap-x-2"
            v-for="n in props.items"
          >
            <nuxt-link :to="n.path"> {{ n.title }} </nuxt-link>
            <div class="border-l h-3.5 border-primary" />
          </div>
          <div class="font-bold whitespace-nowrap" v-text="title" />
        </div>
        <h1 class="text-2xl sm:text-4xl font-black py-4" v-text="title" />
      </div>
    </section>
    <section
      v-if="src"
      :style="`background-image:url('${src}')`"
      class="bg-cover bg-center bg-success"
    >
      <div class="bg-black/65 p-4">
        <div class="h-44 sm:h-60 md:h-80 container flex-start">
          <div class="text-white max-w-screen-md ml-auto text-right">
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-black">
              {{ title }}
            </h1>
            <p v-if="msg" class="mt-3 md:text-xl">{{ msg }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props: any = defineProps({
  items: Array,
  title: String,
  msg: String,
  src: String,
  dense: Boolean,
});
</script>

<style scoped></style>
