<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/banner8.webp"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <content>
    <p>
      You want to familiarize yourself with the deadlines for registration and
      payment as they go hand in hand. Student Financial Services is the unit to
      which you should direct any questions about fees or deadlines for those
      fees. If you do not make payment arrangements by appropriate deadline you
      will be deregistered.
    </p>
    <div class="border-t text-sm">
      <div class="py-4 grid grid-cols-3 gap-3 border-b">
        <div>Autumn semeter</div>
        <div class="col-span-2">
          <h6>15 July2025</h6>
          <span class="opacity-75 text-xs">
            Programs starts in September 2025</span
          >
        </div>
      </div>
      <div class="py-4 grid grid-cols-3 gap-3 border-b">
        <div>Winter semeter</div>
        <div class="col-span-2">
          <h6>15 November 2024</h6>
          <span class="opacity-75 text-xs">
            Programs starts in February 2025</span
          >
        </div>
      </div>
      <div class="py-4 grid grid-cols-3 gap-3 border-b">
        <div>Spring semeter</div>
        <div class="col-span-2">
          <h6>15 February 2025</h6>
          <span class="opacity-75 text-xs"> Programs starts in May 2025</span>
        </div>
      </div>
    </div>
  </content>
</template>

<script setup lang="ts">
const title = "Application deadlines";
</script>

<style scoped>
h6 {
  margin-bottom: -4px;
  font-weight: 800 !important;
}
</style>
