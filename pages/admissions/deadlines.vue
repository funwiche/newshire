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
          <h6>July 15</h6>
          <span class="opacity-75 text-xs"> Programs starts in September </span>
        </div>
      </div>
      <div class="py-4 grid grid-cols-3 gap-3 border-b">
        <div>Winter semeter</div>
        <div class="col-span-2">
          <h6>October 15</h6>
          <span class="opacity-75 text-xs"> Programs starts in January </span>
        </div>
      </div>
      <div class="py-4 grid grid-cols-3 gap-3 border-b">
        <div>Spring semeter</div>
        <div class="col-span-2">
          <h6>January 15</h6>
          <span class="opacity-75 text-xs"> Programs starts in April </span>
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
