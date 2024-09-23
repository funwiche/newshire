<template>
  <section>
    <h1 class="title">Login</h1>
    <p class="subtitle">Sign in to consult or modify application</p>
    <Alert v-model="error" />
    <form @submit.prevent="submit">
      <Textfield
        required
        v-model="post.email"
        label="Email address"
        type="email"
      />
      <Textfield
        required
        v-model="post.password"
        label="Password"
        type="password"
      />
      <Label class="-mt-4">
        <nuxt-link
          to="/account/forgot"
          class="text-info text-xs font-bold hover:underline py-3 inline-block"
        >
          Forgotten your password?
        </nuxt-link>
      </Label>
      <Submit title="Login" :loading="loading" />
    </form>

    <div class="text-sm pt-6 border-t border-t-white font-bold">
      <span class="opacity-70">Don't have an account?</span>
      <nuxt-link
        to="/account/register"
        class="text-info font-bold hover:underline px-1"
      >
        Create an account
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "guest",
  title: "Sign in to your account",
});
const post = ref({ email: "", password: "" });
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.post("/users/login", post.value);
    if (err) return (error.value = err);
    useAccessToken().value = res.token;
    useCookie("access_token").value = res.token;
    useAuthUser().value = res.user;
    useCookie("auth_user").value = JSON.stringify(res.user);
    navigateTo("/apply");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
