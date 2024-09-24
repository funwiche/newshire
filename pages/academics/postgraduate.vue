<template>
  <Title>{{ title }}</Title>

  <div>
    <Breadcrum
      :title="title"
      :items="[{ title: 'Academics', path: '/academics' }]"
    />
    <Search degree="postgraduate" />
    <Archive degree="postgraduate" />
  </div>
</template>

<script setup lang="ts">
const title = "Postgraduate degrees";
</script>

<style lang="scss" scoped></style>
