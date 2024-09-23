<template>
  <section v-if="user.status" class="text-sm">
    <h2 class="text-lg font-medium mb-3">
      Application for Admission Submitted
    </h2>
    <p>
      Thank you for applying to {{ $app.name }}. We have received your
      application for admission, and it is currently under review.
    </p>

    <Divider title="Application overview:" class="mt-6" />
    <div class="grid gap-3 py-3">
      <div>
        Full name: <b>{{ user.profile.lname }} {{ user.profile.fname }}</b>
      </div>
      <div>
        Application ID: <b>00{{ user._id }}</b>
      </div>
      <div>
        Program: <b>{{ user.program.name }}</b>
      </div>
      <div>
        Academic Year:: <b>{{ user.program.year }} </b>
      </div>
      <div>
        Duration of Study: <b>{{ user.program.duration }}</b>
      </div>
      <div>Mode of Study: <b>Full-time</b></div>
      <div>
        Status:
        <span class="capitalize text-success font-black">
          {{ user.status }}
        </span>
      </div>
    </div>
    <Divider />
    <p class="mt-4 text-xs">
      If you have any questions or need assistance, please do not hesitate to
      contact our admissions office at
      <a class="text-info hover:underline" :href="`mailto:${$app.email}`">{{
        $app.email
      }}</a
      >.
    </p>
  </section>
  <section v-else-if="!user.verified">
    <h1 class="title">Registration summary</h1>
    <h4 class="text-lg mb-4 font-bold">Check your email box.</h4>
    <p class="mb-4 text-sm">
      We sent a verification messages to {{ user.email }}
    </p>
    <p class="mb-3 font-bold text-sm">
      Check your email address and activate your account within 24h
    </p>
    <p class="mb-4 text-xs">
      Please confirm your email address, otherwise your account will be deleted
    </p>
    <Divider title="Personal data" />
    <div class="py-2 text-sm">
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Last name</div>
        <div class="w-2/3">{{ user.profile.lname }}</div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">First name name</div>
        <div class="w-2/3">{{ user.profile.fname }}</div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Email</div>
        <div class="w-2/3">{{ user.email }}</div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Phone number</div>
        <div class="w-2/3">{{ user.profile.phone }}</div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Gender</div>
        <div class="w-2/3">{{ user.profile.gender }}</div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Birthdate</div>
        <div class="w-2/3">
          {{ new Date(user.profile.birthdate).toLocaleDateString() }}
        </div>
      </div>
      <div class="flex py-2">
        <div class="w-1/3 font-bold">Marital status</div>
        <div class="w-2/3">{{ user.profile.status }}</div>
      </div>

      <div class="flex py-2">
        <div class="w-1/3 font-bold">Nationality</div>
        <div class="w-2/3">{{ user.profile.nationality }}</div>
      </div>
    </div>
    <Divider />
    <p class="text-xs py-4">
      Activate your account in order to continue with your application
    </p>
  </section>
  <section v-else>
    <p class="text-xs mb-4 opacity-65">
      Complete all the sections below to apply for a programme
    </p>
    <nuxt-link
      :to="n.path"
      v-for="(n, i) in links"
      :class="{ 'border-t': i == 0 }"
      class="flex-start border-b border-white py-6 group"
    >
      <i :class="`fa-light fa-${n.icon} w-10 text-lg`" />
      <div class="flex-1 group-hover:underline text-sm" v-html="n.name" />
      <span
        v-if="n.completed"
        v-html="'Completed'"
        class="text-success font-semibold text-xs"
      />
      <span
        v-else
        v-html="'Uncompleted'"
        class="text-error font-semibold text-xs"
      />
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "Application information",
});
const user = useAuthUser();
const route = useRoute();
const links = computed(() => [
  {
    icon: "user",
    path: "/apply/profile",
    name: "Personal profile",
    completed: user.value.address,
  },
  {
    icon: "book-open-reader",
    path: "/apply/program",
    name: "Study programme",
    completed: user.value.program,
  },
  {
    icon: "graduation-cap",
    path: "/apply/education",
    name: "Education & Training",
    completed: user.value.higher,
  },
  {
    icon: "globe",
    path: "/apply/language",
    name: "Language proficiency",
    completed: user.value.language,
  },
  {
    icon: "upload",
    path: "/apply/uploads",
    name: "Documents upload",
    completed: user.value.uploads.passport && user.value.uploads.secondary,
  },
]);
</script>

<style scoped></style>
