<template>
  <form @submit.prevent="submit">
    <Alert v-model="error" />
    <Select
      required
      v-model="post.program.year"
      label="Academic year"
      :items="['2024 - 2025']"
    />
    <Select
      required
      v-model="post.program.degree"
      label="Degree"
      :items="[
        'Bachelor\'s degree (Undergruaduate)',
        'Master\'s degree (Postgruaduate)',
      ]"
    />
    <Select
      required
      v-model="post.program.name"
      label="Academic program/major"
      @update:model-value="update"
      :items="items.map((el) => el.name)"
    />
    <Submit title="Save and continue" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
import courses from "@/assets/courses.json";
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "Study programme",
});
const router = useRouter();
const user = useAuthUser();
const post: any = ref({
  program: user.value.program
    ? { ...user.value.program }
    : {
        name: "",
        year: "2024 - 2025",
        mode: "Full-time",
        degree: "",
        faculty: "",
      },
});
const items = computed(() =>
  courses.filter((el) => el.degree === post.value.program.degree)
);
function update(ev: any) {
  post.value.name = {
    ...post.value.name,
    ...courses.find((el) => el.name == ev),
  };
}
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.update("/users", post.value);
    if (err) return (error.value = err);
    useAuthUser().value = res;
    useCookie("auth_user").value = JSON.stringify(res);
    router.replace("/apply/education");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
