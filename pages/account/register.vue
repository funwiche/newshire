<template>
  <section>
    <h1 class="title">Registration</h1>
    <p class="subtitle">
      To register an account, fill in this form and follow the activation
      instructions. All fields are all compulsory
    </p>
    <Alert v-model="error" />
    <form @submit.prevent="submit">
      <Textfield
        required
        v-model="post.email"
        label="Email address"
        type="email"
      />
      <p class="text-[10px] mb-3 -mt-2 text-primary font-medium">
        Please note that you have to use the same email address throughout the
        entire application process.
      </p>
      <Textfield
        required
        v-model="post.password"
        label="Password"
        type="password"
      />
      <Textfield
        required
        v-model="post.profile.lname"
        label="Last name / Surname"
      />
      <Textfield
        required
        v-model="post.profile.fname"
        label="First name / Given names"
      />
      <client-only>
        <Radio
          required
          v-model="post.profile.gender"
          label="Gender"
          :items="['Male', 'Female']"
        />
      </client-only>
      <Textfield
        required
        v-model="post.profile.birthdate"
        label="Birthdate"
        type="date"
      />
      <Select
        required
        v-model="post.profile.status"
        label="Marital status"
        :items="['Single', 'Married', 'Divorced', 'Widowed']"
      />
      <Select
        required
        v-model="post.profile.nationality"
        label="Nationality"
        :items="countries"
      />
      <Submit title="Create account" :loading="loading" />
    </form>
    <div class="text-sm pt-6 border-t border-t-white font-bold">
      <span class="opacity-70">Already have an account?</span>
      <nuxt-link to="//accountlogin" class="text-info hover:underline px-1">
        Sign in
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import countries from "@/assets/countries.json";
definePageMeta({
  layout: "auth",
  middleware: "guest",
  title: "Create an account",
});
const post = ref({
  email: "",
  password: "",
  profile: {
    lname: "",
    fname: "",
    phone: "",
    gender: "",
    status: "",
    birthdate: "",
    nationality: "",
  },
  address: null,
  program: null,
  language: null,
  secondary: null,
  higher: null,
  uploads: {
    passport: null,
    secondary: null,
    diploma: null,
    transcript: null,
    resume: null,
    proficiency: null,
    motivation: null,
  },
  verified: false,
  submitted: false,
});
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.post("/users/register", post.value);
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
