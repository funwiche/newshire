<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/language-requirements.jpg"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <Subheading
    title="English proficiency"
    desc="Entry into undergraduate and postgraduate programmes is dependent on your English Language proficiency"
  />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <h2>English language entry requirements</h2>
    <p>
      Applicants whose first language is not English must demonstrate that they
      have an appropriate level of English language to be eligible to study one
      of our foundation, undergraduate or postgraduate courses. The level of
      English required depends on the
      <nuxt-link class="link-bold" to="/academics/programs">course</nuxt-link>
      applied for.
    </p>
    <h3>In-country English language qualifications</h3>
    <p>
      In addition to the above tests, we also accept some country-specific
      in-country English language qualifications for entry to our courses. To
      see if we accept an in-country English language qualification from your
      home country, please visit the
      <nuxt-link class="link-bold" to="/admissions/countries"
        >Your Country</nuxt-link
      >
      section and choose your country.
    </p>
    <h3>Majority English Speaking Countries</h3>
    <p>
      Applicants from Majority English Speaking Countries will normally not need
      to provide further evidence of English language proficiency.
    </p>
    <ul>
      <li>Antigua and Barbuda</li>
      <li>Australia</li>
      <li>The Bahamas</li>
      <li>Barbados</li>
      <li>Belize</li>
      <li>Canada</li>
      <li>Dominica</li>
      <li>Grenada</li>
      <li>Guyana</li>
      <li>Jamaica</li>
      <li>New Zealand</li>
      <li>St Kitts and Nevis</li>
      <li>St Lucia</li>
      <li>St Vincent and the Grenadines</li>
      <li>Trinidad and Tobago</li>
      <li>United States of America</li>
    </ul>
    <h3>Other English language qualifications</h3>
    <p>
      We also accept a number of additional English language qualifications for
      entry to our courses.
    </p>
    <div class="overflow-x-auto">
      <div class="min-w-[600px] text-sm">
        <div class="flex gap-3 border-y border-black py-6 font-bold text-base">
          <div class="flex-1">Qualification</div>
          <div class="flex-1">Undergraduate</div>
          <div class="flex-1">Postgraduate</div>
        </div>
        <div
          :key="i"
          v-for="(n, i) in items"
          class="flex gap-3 border-b border-black py-6"
        >
          <div class="flex-1 font-bold" v-text="n.name" />
          <div class="flex-1" v-html="n.ug" />
          <div class="flex-1" v-html="n.pg" />
        </div>
      </div>
    </div>
  </content>
</template>

<script setup lang="ts">
const title = "Language Requirements";
const items = [
  {
    name: "IELTS Academic",
    ug: "6.0 (Min. 5.5 in each-sub-skill)",
    pg: "6.5 (Min 5.5 in each sub-skill)",
  },
  {
    name: "PTE Academic",
    ug: "61 overall (Min. 59 in each sub-skill)",
    pg: "65 overall (Min. 59 in each sub-skill)",
  },
  { name: "International Baccalaureate", ug: "Grade 4", pg: "Grade 4" },
  {
    name: "GCSE/IGCSE English Language",
    ug: "Grade C or above",
    pg: "Grade C or above",
  },
  { name: "OxfordAQA GCSE", ug: "Grade 4", pg: "Grade 4" },
  {
    name: "Cambridge Upper Main Suite",
    ug: "B2 First Grade B overall",
    pg: "C1 Advanced Grade C / B2 First Grade A",
  },
  {
    name: "Trinity College London ISE",
    ug: "ISEII - Distinction in all 4 components",
    pg: "",
  },
  {
    name: "TOEFL iBT (and TOEFL At Home) ",
    ug: "Overall score: 79 <br/> Min sub skill: <br/>Listening: 17 <br/>Reading: 18 <br/>Speaking: 20 <br/>Writing: 17 ",
    pg: "Overall score:91 <br/> Min sub skill: <br/>Listening: 19 <br/>Reading: 20 <br/>Speaking: 21 <br/>Writing: 20 ",
  },
  {
    name: "Oxford International English Language Test (ELLT)",
    ug: "B2+ overall with at least B2 in each band OR 6 overall with no less than 5 in each band",
    pg: "C1 overall with at least B2 in each band OR 7 overall with no less than 5 in each band",
  },
  {
    name: "Password Skills Plus At-home Test",
    ug: "Password 6.0 with no less than Password 5.5 in each band",
    pg: "Password 6.5 with no less than Password 5.5 in each band",
  },
  {
    name: "LanguageCert Academic ",
    ug: "Overall 65 with no less than 60 in each band",
    pg: "Overall 70 with no less than 60 in each band",
  },
  {
    name: "Kaplan International Tools for English (KITE)",
    ug: "444 overall with no less than 425 in each component",
    pg: "478 overall with no less than 425 in each component",
  },
];
</script>

<style scoped></style>
