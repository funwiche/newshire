<template>
  <section
    :style="`background-image:url('${props.src}')`"
    class="bg-secondary object-cover"
  >
    <div class="container aspect-video flex items-end">
      <div class="bg-warning text-black text-2xl font-black py-2 px-4">
        {{ title }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props: any = defineProps({ title: String, src: String });
</script>

<style scoped></style>
