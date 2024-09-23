<template>
  <Title>{{ title }}</Title>
  <div class="flex-1 flex flex-col">
    <breadcrum
      :title="title"
      msg="Find contact information for a range of queries."
      src="/sliders/contact_us.jpg"
    />
    <section class="container md:flex gap-12 flex-1">
      <form class="flex-1" @submit.prevent="submit">
        <div class="p-8 sm:p-12 md:px-0 md:py-16 max-w-screen-sm max-md:xs">
          <h3 class="text-primary text-lg font-black mb-5">Contact Us Form</h3>
          <TextInput v-model="post.name" label="Full name" />
          <TextInput v-model="post.email" type="email" label="Email address" />
          <TextInput v-model="post.phone" type="tel" label="Phone number" />
          <TextInput v-model="post.message" textarea label="Message" />
          <Alert v-model="error" />
          <Alert v-model="success" success />
          <button
            class="flex-center bg-[#014997] hover:bg-primary text-white text-sm font-bold h-12 w-1/2 mt-2"
          >
            <Loader v-if="loading" />
            <span v-else>Submit</span>
          </button>
        </div>
      </form>
      <div class="w-[480px] bg-secondary text-sm">
        <div class="p-8 sm:p-12 md:p-16 max-md:xs">
          <div class="mb-5">
            <h3 class="text-primary text-lg font-black">Address</h3>
            <div class="opacity-74">
              {{ $app.name }}, <br />
              P.O. Box 4920<br />
              {{ $app.city }}, NL A1C 5R3,<br />
              {{ $app.country }}, United Kingdom
            </div>
          </div>
          <div class="mb-5">
            <h3 class="text-primary text-lg font-black">Phone</h3>
            <a :href="`tel:${$app.phone}`" class="link-bold">
              {{ $app.phone }}
            </a>
          </div>
          <div class="mb-5">
            <h3 class="text-primary text-lg font-black">Email</h3>
            <a :href="`mailto:${$app.email}`" class="link-bold">
              {{ $app.email }}
            </a>
          </div>
          <div class="mb-5">
            <h3 class="text-primary text-lg font-black">Opening hours</h3>
            <div class="opacity-74">
              Mon - Fri: 8.30am to 5pm <br />
              Sat - Sun: Closed
            </div>
          </div>
          <div
            class="font-serif italic text-sm opacity-65 border-y text-justify p-3"
          >
            If you call out of hours, you will be transferred to a security
            officer who will take your details. An appropriate member of staff
            will then call you back to offer further assistance.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = "Contact us";
const api = "https://extranet-apis.onrender.com/privateemail";
const loading = ref(false);
const error = ref("");
const success = ref("");
const post = ref({
  subject: "Contact us",
  to: $app.email,
  name: "",
  phone: "",
  email: "",
  location: "",
  message: "",
});
async function submit() {
  loading.value = true;
  try {
    await $fetch(api, { method: "POST", body: post.value });
    post.value.name = "";
    post.value.email = "";
    post.value.phone = "";
    post.value.message = "";
    success.value = "Your message has been sent successfully!";
  } catch (err) {
    error.value = "An error occurred. Please try again later!";
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
