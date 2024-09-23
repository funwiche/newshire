<template>
  <section v-if="email" class="max-w-screen-sm">
    <h1 class="title">Check your email address</h1>
    <p class="mb-6">
      We’ve sent a password reset link to <b>{{ email }}</b
      >. Please check your inbox (and spam/junk folder) and follow the
      instructions to reset your password.
    </p>
    <p class="mb-4">The link will be valid for <b>30 minutes</b>.</p>
    <nuxt-link to="/account/forgot" class="btn-outline">
      Resend link
    </nuxt-link>
  </section>
  <section v-else>
    <h1 class="title">Forgot password</h1>
    <p class="subtitle">
      If you have forgotten your password, you may request a new password by
      email. Enter your email address and we'll send you a link to reset your
      password.
    </p>
    <Alert v-model="error" />
    <form @submit.prevent="submit">
      <Textfield
        required
        v-model="post.email"
        label="Email address"
        type="email"
      />
      <Textfield required v-model="post.dob" label="Birthdate" type="date" />
      <Submit title="Login" :loading="loading" />
    </form>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "auth",
  middleware: "guest",
  title: "Forgot password",
});
const post = ref({ email: "", dob: "" });
const email = computed(() => route.query?.email || "");
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.post("/users/forgot", post.value);
    if (err) return (error.value = err);
    navigateTo(`/account/forgot?email=${post.value.email}`);
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
