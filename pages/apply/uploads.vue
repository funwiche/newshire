<template>
  <form @submit.prevent="router.replace('/apply#apply')">
    <p class="text-xs mb-4">
      Acceptable formats: .JPG, .JPEG, .PNG, .PDF (max. 4 MB)
    </p>
    <divider class="max-w-screen-sm" />
    <Upload label="Passport" field="passport" required />
    <Upload label="Secondary school certificate" field="secondary" required />
    <Upload label="Higher education diploma(s)" field="diploma" />
    <Upload label="Higher education transcript(s)" field="transcript" />
    <Upload label="English proficiency (opational)" field="proficiency" />
    <Upload label="CV or Resumé (opational)" field="resume" />
    <Upload label="Motivation letter (opational)" field="motivation" />
    <Submit title="Save and continue" class="mt-4" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "Documents upload",
});
const router = useRouter();
const user = useAuthUser();
</script>

<style scoped></style>
