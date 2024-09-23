<template>
  <Reset title="Account Activated">
    <p class="mb-4">
      Congratulations! Your account has been successfully activated.
    </p>
    <div v-if="user">
      <p class="mb-6">
        Welcome, <b>{{ user.profile.lname }} {{ user.profile.fname }}!</b> You
        are now logged in and ready to proceed with your application.
      </p>
      <nuxt-link to="/" class="btn-outline">Go to application</nuxt-link>
    </div>
    <div v-else>
      <p class="mb-6">
        Your account has been successfully activated! You can now log in and
        start using our services.
      </p>
      <nuxt-link to="/account/login" class="btn-outline">Log In</nuxt-link>
    </div>
  </Reset>
</template>

<script setup lang="ts">
const user = useAuthUser();
definePageMeta({ layout: "auth", title: "Account Activation" });
onMounted(() => {
  if (!user.value) return;
  user.value = { ...user.value, verified: true };
  useCookie("auth_user").value = JSON.stringify(user.value);
});
</script>

<style scoped></style>
