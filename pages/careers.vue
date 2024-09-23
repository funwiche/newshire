<template>
  <Title>{{ title }}</Title>

  <breadcrum dense :title="title" />
  <div class="bg-success p-6">
    <section class="lg">
      <p class="opacity-70 mb-4 text-white">
        Please enter your search criteria below
      </p>
      <div class="mb-6 rounded-lg overflow-hidden relative flex items-center">
        <input
          v-model="text"
          type="search"
          placeholder="Search job title eg. Analyst, Manager, Designer"
          class="pl-12 pr-4 h-14 bg-white"
        />
        <i
          class="fa-solid fa-search opacity-50 text-lg absolute left-4 pointer-events-none"
        />
      </div>
      <div class="text-lg font-medium pb-4 text-white">
        {{ filtered.length }} jobs match your criteria
      </div>
      <div v-if="filtered.length">
        <div
          v-for="n in filtered"
          :key="n.ref"
          :id="n.ref"
          class="bg-white p-8 mb-4 shadow-lg rounded-lg scroll-mt-24"
          @click="$router.replace(`/careers#${n.ref}`)"
        >
          <div class="text-2xl sm:text-3xl font-medium text-success mb-6">
            {{ n.title }}
          </div>
          <div
            class="inline-block px-3 py-1 rounded-full bg-success/35 text-success font-medium mb-3"
          >
            Apply by {{ new Date(n.deadline).toLocaleDateString() }}
          </div>
          <div v-if="active == n.ref">
            <div class="flex justify-end py-3">
              <a
                :href="`mailto:careers@${$app.host}?subject=${n.title}&body=Please send us your CV or Resumé.`"
                class="text-overline px-8 py-2 rounded-full text-white bg-success/90 hover:bg-success"
              >
                Apply Now
              </a>
            </div>
            <p class="">
              The job requirements are detailed below. Where applicable the
              skills, qualifications and memberships required for this job have
              also been included.
            </p>
            <div
              class="border-t mt-6 py-4 border-success/80 text-xl font-black text-success"
            >
              Job Details
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <div>
                <div class="font-bold">Salary</div>
                <div class="opacity-70">
                  {{ n.salary.split("/")[0] }} per year
                </div>
              </div>
              <div>
                <div class="font-bold">Contractual hours</div>
                <div class="opacity-70">35</div>
              </div>
              <div>
                <div class="font-bold">Basis</div>
                <div class="opacity-70">Full Time</div>
              </div>
              <div>
                <div class="font-bold">Job category/type</div>
                <div class="opacity-70">{{ n.cat }}</div>
              </div>
              <div>
                <div class="font-bold">Date posted</div>
                <div class="opacity-70">
                  {{ new Date(n.date).toLocaleDateString() }}
                </div>
              </div>
              <div>
                <div class="font-bold">Job reference</div>
                <div class="opacity-70">{{ n.ref }}</div>
              </div>
            </div>
            <div
              class="border-t mt-6 py-4 border-success/80 text-xl font-black text-success"
            >
              Job Description
            </div>
            <div
              class="content font-sans text-sm sm:text-base"
              v-html="n.desc"
            />
            <div class="flex justify-end pt-4">
              <a
                :href="`mailto:careers@${$app.host}?subject=${n.title}&body=Please send us your CV or Resumé.`"
                class="text-overline px-8 py-2 rounded-full text-white bg-success/90 hover:bg-success"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div v-else>
            <div class="py-1 flex items-center">
              <i class="fa-solid fa-dollar text-success w-8" />
              <span class="opacity-80">
                Salary {{ n.salary.split("/")[0] }} per year
              </span>
            </div>
            <div class="py-1 flex items-center">
              <i class="fa-solid fa-briefcase text-success w-8" />
              <span class="opacity-80">Full Time</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-8 bg-white shadow-lg rounded-lg mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ad,
        porro iure repellat molestiae ipsam mollitia libero labore ut impedit
        maxime cupiditate nobis quia sunt culpa deserunt rem possimus in?
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import items from "~/resources/jobs";
const route = useRoute();
const title = "Job search";
const text = ref("");
const active = computed(() => route.hash.split("#")?.[1] || "");
const filtered = computed(() => {
  const now = Date.now();
  return items
    .map((el, i) => ({
      ...el,
      date: now - (i + 1) * 60 * 60 * 24 * 1000 * 2,
      deadline: now + 60 * 60 * 24 * 1000 * (40 - i * 2),
    }))
    .filter(({ title }) => {
      if (!text.value) return true;
      return title.toLowerCase().includes(text.value.toLowerCase());
    });
});
watch(text, () => {
  if (active.value) navigateTo("/careers");
});
</script>

<style lang="scss" scoped></style>
