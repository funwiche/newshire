<template>
  <section class="border-t pb-12 max-lg:px-4 container">
    <div v-if="props?.items?.length">
      <nuxt-link
        v-for="n in props.items"
        :to="`/academics/programs/${n?.slug}`"
        class="group flex items-center py-6 border-b"
      >
        <div
          class="flex-1 pr-3 flex items-center flex-wrap group-hover:underline underline-offset-[6px]"
        >
          <div class="font-bold sm:text-lg">
            {{ n?.name }} {{ degree || n?.degree }}
          </div>
          <span class="px-1 max-sm:text-sm">|</span>

          <span class="opacity-50 max-sm:text-sm"> Full-Time, Part-Time </span>
        </div>
        <i class="fa-regular fa-chevron-right text-xl text-error mr-2" />
      </nuxt-link>
    </div>
    <div v-else class="p-6 text-accent text-center border-b">
      No programs fond
    </div>
  </section>
</template>

<script setup lang="ts">
const props: any = defineProps({ items: Array, degree: String });
</script>

<style scoped></style>
