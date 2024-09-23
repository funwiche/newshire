<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/countries.jpeg"
    msg="Country-specific entry requirements"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <content>
    <section class="grid gap-12">
      <p>
        For country-specific information, including entry requirements, details
        of education consultants and information about events near you, please
        select the country you are applying from using the list below.
      </p>
      <YourCountry />
      <p>
        If you are unable to find your country or required qualification, please
        contact us directly via&nbsp;<a
          class="link-bold"
          :href="`mailto:international@${$app.host}`"
          >international@{{ $app.host }}</a
        >&nbsp;for more information.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Countries";
</script>

<style scoped></style>
