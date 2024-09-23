<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/academic-requirements.jpg"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <Subheading
    title="Academic qualifications"
    desc="Entry into undergraduate and postgraduate programmes is dependent on your academic qualifications"
  />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <h2>Academic entry requirements</h2>
    <p>
      Applicants must satisfy the academic entry criteria for their chosen
      course of study in order to be eligible to study.
    </p>
    <h3>International Foundation Programme</h3>
    <p>
      For entry onto our Bachelor's Degree including a Foundation Year, we
      require a school leaving qualification which is equivalent to British
      GCSE's and English proficiency equivalent to IELTS 6.0 overall. For entry
      onto our International Foundation Programme, we require a school leaving
      qualification which is equivalent to British GCSE’s. To find out which
      qualifications are acceptable from your home country, please visit the
      <nuxt-link class="link-bold" to="/admissions/countries"
        >Your Country</nuxt-link
      >
      section and choose your country.
    </p>
    <h3>Undergraduate/Bachelor's degree</h3>
    <p>
      For entry onto the first year of our undergraduate/Bachelor degree
      programmes, we normally require a school leaving qualification which is
      equivalent to British A-level/International Baccalaureate. To find out
      which qualifications are acceptable from your home country, please visit
      the
      <nuxt-link class="link-bold" to="/admissions/countries"
        >Your Country</nuxt-link
      >
      section and choose your country. You can also view our range of
      <nuxt-link class="link-bold" to="/academics/undergraduate">
        Undergraduate Bachelor's Degrees</nuxt-link
      >.
    </p>

    <h3>Postgraduate Taught/Masters' degree</h3>
    <p>
      Entry onto our postgraduate Masters' courses requires an
      undergraduate/bachelor degree of equivalent standard to the British
      undergraduate/bachelor degree. To find out which qualifications are
      acceptable from your home country, please visit the
      <nuxt-link class="link-bold" to="/admissions/countries"
        >Your Country</nuxt-link
      >
      section and choose your country. You can also view our range of
      <nuxt-link class="link-bold" to="/academics/postgraduate">
        Postgraduate Taught/Master's Degrees.</nuxt-link
      >.
    </p>
  </content>
</template>

<script setup lang="ts">
const title = "Academic Requirements";
</script>

<style scoped></style>
