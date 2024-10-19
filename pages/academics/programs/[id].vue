<template>
  <Title>{{ item?.name }}</Title>

  <Breadcrum
    :title="item?.name"
    :items="[
      { title: 'Academics', path: '/academics' },
      { title: 'Programs', path: '/academics/programs' },
    ]"
  />
  <section class="container content md:flex gap-12">
    <section class="flex-1 max-lg:px-4">
      <p v-html="item?.excerpt" />
      <h3>Description of program</h3>
      <div v-html="item?.desc" />
      <h3>Minimum admission requirements</h3>
      <div v-html="item?.requirements" />
      <h3>Career Propects</h3>
      <div v-html="item?.career" />
    </section>
    <section class="md:w-[400px] bg-secondary p-6 md:p-10 pt-1 md:pt-0 text-sm">
      <h3>Program Information</h3>
      <h6 class="mb-2">Degrees Offered:</h6>
      <ul>
        <li :key="k" v-for="[k, v] in Object.entries(item?.program)">
          {{ v }}
        </li>
      </ul>
      <h6 class="mb-2">Duration (Full-time students):</h6>
      <ul>
        <li :key="k" v-for="[k, v] in Object.entries(item?.duration)">
          <span class="capitalize">{{ k }}:</span> {{ v }}
        </li>
      </ul>
      <h6>Department:</h6>
      <p>{{ item?.department }}</p>
      <h6>Faculty:</h6>
      <p>
        <nuxt-link
          :to="`/faculties/${toSlug(item?.faculty)}`"
          class="text-info nounderline"
          >Faculty of {{ item?.faculty }}</nuxt-link
        >
      </p>
      <h6>Application Deadline:</h6>
      <p>
        Autumn: 15 July 2024 (starts in September 2024)
        <br />
        Winter: 15 November 2024 (starts in February 2025)
        <br />
        Spring: 15 February 2025 (starts in May 2025)
      </p>
      <h6>Tuition (UK Citizens):</h6>
      <p>Undergraduate: £3,050<br />Graduate: £3,650</p>
      <h6>Tuition (International students):</h6>
      <p>Undergraduate: £5,650<br />Graduate: £5,950<br />Deposit: £500</p>
      <p>
        <nuxt-link to="/apply" class="btn bg-primary block">
          APPLY NOW
        </nuxt-link>
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import programs from "~/resources/programs.json";
const route = useRoute();
const item: any = computed(
  () => programs.find((el) => el.slug == route.params.id) || []
);
</script>

<style scoped></style>
