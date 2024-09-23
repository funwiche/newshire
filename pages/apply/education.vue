<template>
  <form @submit.prevent="submit">
    <Alert v-model="error" />
    <Divider title="Secondary Education" class="mb-2" />
    <Textfield
      required
      v-model="post.secondary.institution"
      label="Name of Educational Institution"
    />
    <Textfield
      required
      v-model="post.secondary.program"
      label="Certificate obtained"
    />
    <Textfield
      required
      type="date"
      v-model="post.secondary.date"
      label="Completion date"
    />
    <Divider title="Higher Education (Optional)" class="mb-2" />
    <Textfield
      v-model="post.higher[0].institution"
      label="Name of Educational Institution"
    />
    <Textfield v-model="post.higher[0].program" label="Certificate obtained" />
    <Textfield
      type="date"
      v-model="post.higher[0].date"
      label="Completion date"
    />
    <Divider title="Further Education (Optional)" class="mb-2" />
    <Textfield
      v-model="post.higher[1].institution"
      label="Name of Educational Institution"
    />
    <Textfield v-model="post.higher[1].program" label="Certificate obtained" />
    <Textfield
      type="date"
      v-model="post.higher[1].date"
      label="Completion date"
    />
    <Submit title="Save and continue" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "Education and Training",
});
const router = useRouter();
const user = useAuthUser();
const post: any = ref({
  secondary: user.value.secondary
    ? { ...user.value.secondary }
    : { institution: "", programe: "", date: "" },
  higher: user.value.higher
    ? [...user.value.higher]
    : [
        { institution: "", programe: "", date: "" },
        { institution: "", programe: "", date: "" },
      ],
});
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.update("/users", post.value);
    if (err) return (error.value = err);
    useAuthUser().value = res;
    useCookie("auth_user").value = JSON.stringify(res);
    router.replace("/apply/language");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
