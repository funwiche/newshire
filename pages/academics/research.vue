<template>
  <Title>{{ title }}</Title>

  <div>
    <Breadcrum
      :title="title"
      :items="[{ title: 'Academics', path: '/academics' }]"
    />
    <Search degree="research" />
    <Archive degree="research" />
  </div>
</template>

<script setup lang="ts">
const title = "Research degrees";
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
