<template>
  <form @submit.prevent="submit">
    <Alert v-model="error" />
    <Divider title="Personal profile" class="mb-2" />
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
    <Divider title="Residence address" class="mb-2" />
    <Textfield required v-model="post.address.street" label="Street" />
    <Textfield required v-model="post.address.city" label="City" />
    <Textfield
      required
      v-model="post.address.state"
      label="State/Province/Region"
    />
    <Textfield v-model="post.address.zip" label="ZIP/Postal code" />
    <Select
      required
      v-model="post.address.country"
      label="Country"
      :items="countries"
    />
    <Submit title="Save and continue" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
import countries from "@/assets/countries.json";
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "Personal profile",
});
const router = useRouter();
const user = useAuthUser();
const post = ref({
  profile: { ...user.value.profile },
  address: user.value.address
    ? { ...user.value.address }
    : { street: "", city: "", state: "", zip: "", country: "" },
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
    router.replace("/apply/program");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
