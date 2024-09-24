<template>
  <section class="bg-success py-8 sm:py-16 px-4">
    <div class="container grid grid-cols-12 gap-4 sm:gap-8">
      <div class="text-white col-span-12 md:col-span-4">
        <h2 v-if="$route.name != 'academics'" class="text-2xl uppercase">
          FIND A COURSE
        </h2>
        <div v-else>
          <h2 class="text-2xl uppercase mb-3">COURSE SEARCH</h2>
          <p>
            Find your course of interest from our career-focused undergraduate,
            postgraduate (taught) and post-experience options.
          </p>
        </div>
      </div>
      <form @submit.prevent="submit" class="text-sm col-span-12 md:col-span-8">
        <input
          v-model="text"
          type="search"
          placeholder="Search by keyword"
          class="px-4 h-14 bg-white mb-4 rounded-none"
        />
        <div class="grid gap-4 grid-cols-12">
          <div class="col-span-12 md:col-span-4 flex items-center relative">
            <select v-model="program" class="px-4 h-14 bg-white rounded-none">
              <option value="">Select field of study</option>
              <option v-for="n in faculties" :key="n.slug">{{ n.name }}</option>
            </select>
            <i
              class="fa-solid fa-chevron-down absolute z-1 right-4 pointer-events-none"
            />
          </div>
          <div class="col-span-8 md:col-span-4 flex items-center relative">
            <select
              v-model="degree"
              required
              class="px-4 h-14 bg-white rounded-none"
            >
              <option value="">Select level of study*</option>
              <option value="undergraduate">Undergraduate courses</option>
              <option value="postgraduate">Postgraduate courses</option>
              <option value="research">Research degrees</option>
            </select>
            <i
              class="fa-solid fa-chevron-down absolute z-1 right-4 pointer-events-none"
            />
          </div>
          <div class="col-span-4">
            <button type="submit" class="btn bg-black/80 w-full">Search</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import faculties from "~/resources/faculties.json";
const props = defineProps(["degree"]);
const route = useRoute();
const text = ref(route.query.q || "");
const degree = ref(props.degree || "");
const program = ref(route.query.program || "");

function submit() {
  if (!degree.value) return alert("Select level of study");
  navigateTo({
    path: `/academics/${degree.value}`,
    query: { q: text.value, program: program.value },
  });
}
</script>

<style scoped></style>
