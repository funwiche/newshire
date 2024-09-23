<template>
  <section class="py-6" id="apply">
    <h2 class="sm:text-lg font-black py-2">Submit application</h2>
    <div class="card">
      <div
        class="flex items-start gap-4 p-4 sm:p-8"
        :class="{ 'opacity-50 pointer-events-none': !completed }"
      >
        <input type="checkbox" class="mt-0.5" v-model="check" />
        <div class="flex-1 text-sm font-medium">
          <p class="pb-4">
            I hereby declare on my honour that this information is correct and
            complete (e.g. all necessary documents are uploaded) and that I
            shall immediately inform {{ $app.name }} of any changes in my
            situation.
          </p>
          <p class="pb-6">
            I hereby declare that any false statement I made in this application
            shall result in the immediate cancellation of my application.
          </p>

          <Alert v-model="error" />
          <div class="flex-start gap-2">
            <button :disabled="!check" @click="submit" class="btn-outline">
              Submit
            </button>
            <Loader v-if="loading" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const user = useAuthUser();
const error = ref("");
const check = ref(false);
const loading = ref(false);
const completed = computed(() => {
  if (!user.value.program) return false;
  if (!user.value.address) return false;
  if (!user.value.language) return false;
  if (!user.value.secondary) return false;
  if (!user.value.uploads.passport) return false;
  if (!user.value.uploads.secondary) return false;
  return true;
});
async function submit() {
  if (!check.value) return;
  loading.value = true;
  try {
    const [res, err]: any = await $req.post("/users/submit");
    if (err) return (error.value = err);
    useAuthUser().value = res;
    useCookie("auth_user").value = JSON.stringify(res);
    navigateTo("/apply");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
