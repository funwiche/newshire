<template>
  <Title>{{ title }}</Title>
  <Breadcrum
    :title="title"
    src="/sliders/arrival-and-visa-guidance.jpg"
    msg="All you need to know about visas and immigration, and if you require a visa to study with us in Scotland."
  />
  <section class="p-6 sm:py-20">
    <div class="container">
      <div class="mb-8 font-thin text-lg sm:text-2xl">
        We understand that you may have some questions surrounding your arrival,
        enrolment, or your student visa. From airport transfers, welcome week,
        or how to enrol, the above pages should cover everything you need to
        know.
      </div>
      <div class="grid xs:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6">
        <Card
          alt
          :path="n.path"
          :key="n.path"
          v-for="n in links"
          :src="n.image"
          :title="n.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = "Visas and immigration";
const links = [
  { name: "Visas", path: "/immigration/visas", image: "/sliders/visas.jpg" },
  {
    name: "Arrival",
    path: "/immigration/arrival",
    image: "/sliders/arrivals.jpg",
  },
  {
    name: "Enrolment",
    path: "/immigration/enrolment",
    image: "/sliders/enrolment.jpg",
  },
  {
    name: "Working in the UK",
    path: "/immigration/working-in-the-uk",
    image: "/sliders/working-in-the-uk.jpg",
  },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
