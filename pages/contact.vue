<template>
  <Title>{{ title }}</Title>
  <div class="flex-1 flex flex-col">
    <breadcrum
      :title="title"
      msg="Find contact information for a range of queries."
      src="/sliders/contact_us.jpg"
    />
    <section class="container md:flex gap-12 flex-1">
      <form @submit.prevent="submit" class="flex-1 p-6 sm:p-12 md:p-16 lg:pl-0">
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
      </form>
      <div
        class="md:w-[480px] bg-secondary text-sm grid gap-5 p-6 sm:p-12 md:p-16"
      >
        <div>
          <h3 class="text-primary text-lg font-black">Address</h3>
          <div class="opacity-74">
            {{ $app.name }}, <br />
            231 Grange Rd,<br />
            {{ $app.city }} EH39 4QS,<br />
            {{ $app.country }}, United Kingdom
          </div>
        </div>
        <div>
          <h3 class="text-primary text-lg font-black">Phone</h3>
          <a :href="`tel:${$app.phone}`" class="link-bold">
            {{ $app.phone }}
          </a>
        </div>
        <div>
          <h3 class="text-primary text-lg font-black">Email</h3>
          <a :href="`mailto:${$app.email}`" class="link-bold">
            {{ $app.email }}
          </a>
        </div>
        <div>
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
    </section>
  </div>
</template>

<script setup lang="ts">
const title = "Contact us";
const loading = ref(false);
const error = ref("");
const success = ref("");
const post = ref({
  name: "",
  phone: "",
  email: "",
  location: "",
  message: "",
});
async function submit() {
  loading.value = true;
  try {
    const [res, err] = await $fetch("/api/mailer", {
      method: "POST",
      body: post.value,
    });
    if (err) return (error.value = err);
    post.value.name = "";
    post.value.email = "";
    post.value.phone = "";
    post.value.location = "";
    post.value.message = "";
    success.value = res;
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
