<template>
  <Title>{{ title }}</Title>

  <Breadcrum
    :title="title"
    :items="[{ title: 'Academics', path: '/academics' }]"
  />
  <Search />
  <Archeive />
</template>

<script setup lang="ts">
const title = "Explore All Programs";
</script>

<style lang="scss" scoped></style>
