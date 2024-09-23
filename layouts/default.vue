<template>
  <div class="flex flex-col min-h-screen default-layout">
    <Header />
    <main class="flex-1 bg-white flex flex-col">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {});
</script>

<style scoped></style>
