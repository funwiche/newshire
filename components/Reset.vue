<template>
  <section v-if="loading" class="p-8 flex-center"><Loader /></section>
  <section v-else-if="email" class="max-w-screen-sm">
    <h1 class="title">{{ title }}</h1>
    <slot />
  </section>
  <section v-else class="border border-white/50">
    <div
      class="border-4 border-warning/50 bg-warning/10 text-sm p-6 flex-start"
    >
      <i class="fa-solid fa-circle-exclamation text-xl"></i>
      <div class="pl-2 font-medium">{{ error }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
const route = useRoute();
const email = defineModel();
const error = ref("");
const loading = ref(true);
onMounted(async () => {
  const token = route.query.access_token;
  if (!token) return navigateTo("/login");
  try {
    const [res, err]: any = await $req.get(
      `/users/expiry?access_token=${token}`
    );
    if (err) return (error.value = err);
    email.value = res;
  } catch (error: any) {
    error.value = error;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
