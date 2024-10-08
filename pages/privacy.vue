<template>
  <Title>{{ title }}</Title>

  <breadcrum :title="title" />
  <section class="content container py-6 max-lg:px-4">
    <p>
      The Information Access and Privacy (IAP) Office supports transparency and
      accountability at the {{ $app.name }}, guided in particular by the Privacy
      and Information Request policies. The IAP Office offers strategic and
      day-to-day advisory services on information access and privacy:
    </p>

    <ul>
      <li>
        manages requests for information under the
        <em>Access to Information and Protection of Privacy Act, 2015</em>
        (ATIPP requests)
      </li>
      <li>conducts privacy impact assessments</li>
      <li>manages privacy breaches</li>
      <li>manages privacy complaints</li>
      <li>delivers access and privacy awareness/training</li>
    </ul>

    <p class="mt-4">
      The IAP Office assists the {{ $app.name }} in compliance with the
      provincial
      <em>
        Access to Information and Protection of Privacy Act, 2015 (ATIPPA)
      </em>
      and other applicable privacy legislation, as well as developing best
      practices in information access and privacy. Because smart information
      management is important to effectively fulfill access and privacy
      obligations, the IAP Office works closely with Information Management and
      Protection.
    </p>

    <p>
      The IAP Office benefits from the guidance of the IAP Advisory Committee.
    </p>
  </section>
</template>

<script setup lang="ts">
const title = "Information Access and Privacy (IAP) Office";
</script>

<style lang="scss" scoped></style>
