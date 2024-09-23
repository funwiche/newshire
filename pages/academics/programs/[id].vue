<template>
  <Title>{{ item?.name }}</Title>

  <Breadcrum
    :title="item?.name"
    :items="[
      { title: 'Academics', path: '/academics' },
      { title: 'Programs', path: '/academics/programs' },
    ]"
  />
  <section class="container content max-lg:px-4 md:flex gap-12">
    <section class="flex-1">
      <p v-html="item?.excerpt" />
      <h3>Description of program</h3>
      <div v-html="item?.desc" />
      <h3>Minimum admission requirements</h3>
      <div v-html="item?.requirements" />
      <h3>Career Propects</h3>
      <div v-html="item?.career" />
    </section>
    <section class="md:w-[400px] bg-secondary p-6 md:p-10 pt-0 md:pt-0 text-sm">
      <h3>Program Information</h3>
      <h6>Degrees Offered:</h6>
      <p>{{ item?.degree }}</p>
      <h6>Duration (Full-time students):</h6>
      <p>Bachelor's: 3-4 years<br />Master's: 1 year <br />PhD: 3 years</p>
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
        Autumn: July 15 (starts in September)
        <br />
        Winter: October 15 (starts in January)
        <br />
        Spring: January 15 (starts in April)
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
import programs from "~/resources/programs";
const route = useRoute();
const item: any = computed(
  () => programs.find((el) => el.slug == route.params.id) || []
);
</script>

<style scoped></style>
