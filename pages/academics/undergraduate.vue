<template>
  <Title>{{ title }}</Title>

  <div>
    <Breadcrum
      :title="title"
      :items="[{ title: 'Academics', path: '/academics' }]"
    />
    <Search degree="undergraduate" />
    <Archeive degree="undergraduate" />
  </div>
</template>

<script setup lang="ts">
const title = "Undergraduate degrees";
</script>

<style lang="scss" scoped></style>
