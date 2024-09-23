<template>
  <Title>{{ title }}</Title>
  <Reset :title="title" v-model="post.email">
    <div v-if="success">
      <p class="mb-6">Your password has been successfully changed.</p>
      <p class="mb-6">You can now use your new password to log in.</p>
      <nuxt-link to="/account/login" class="btn-outline">Log In</nuxt-link>
    </div>
    <div v-else>
      <p class="mb-4">Password should be at least 6 characters long.</p>
      <p class="mb-6">
        Strong passwords include numbers, letters, and punctuation marks.
      </p>
      <Alert v-model="error" />
      <form @submit.prevent="submit">
        <Textfield
          required
          v-model="post.password"
          label="Enter password"
          type="password"
        />
        <Textfield
          required
          v-model="confirm"
          label="Confirm password"
          type="password"
        />
        <Submit title="Login" :loading="loading" :disabled="disabled" />
      </form>
    </div>
  </Reset>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth", middleware: "guest" });
const post = ref({ email: "", password: "" });
const confirm = ref("");
const error = ref("");
const success = ref("");
const loading = ref(false);
const title = computed(() =>
  success.value ? "Password Changed" : "Reset password"
);
const disabled = computed(
  () =>
    post.value.password.length < 6 &&
    post.value.password !== confirm.value &&
    false
);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.post("/users/reset", post.value);
    if (err) return (error.value = err);
    success.value = res;
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
