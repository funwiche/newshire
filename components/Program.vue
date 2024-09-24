<template>
  <section class="border-t pb-12 container">
    <div v-if="items?.length">
      <nuxt-link
        v-for="n in items"
        :to="`/academics/programs/${n?.slug}`"
        class="group flex items-center py-6 border-b"
      >
        <div
          class="text-xs sm:text-sm flex-1 pr-3 flex items-center flex-wrap group-hover:underline underline-offset-[6px]"
        >
          <span class="font-bold text-sm sm:text-base">
            {{ n?.name }}
            {{
              degree
                ? ": " + n.program[degree]
                : Object.values(n.degree).join(", ")
            }}
          </span>
          <span v-if="degree" class="px-1">|</span>
          <span v-if="degree" class="opacity-50">
            {{ n.duration[degree] }}
          </span>
          <span class="px-1">|</span>
          <span class="opacity-50"> Full-Time, Part-Time </span>
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
defineProps<{ items: any[]; degree?: string }>();
</script>

<style scoped></style>
