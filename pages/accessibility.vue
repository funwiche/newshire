<template>
  <Title>{{ title }}</Title>
  <breadcrum :title="title" />
  <section class="content container py-6 max-lg:px-4">
    <p>
      {{ $app.name }} is committed to making its campuses and websites
      accessible to users of all abilities, regardless of age or location.
    </p>

    <p>
      Through the use of modern web development methods and accepted best
      practices, we strive to meet and exceed
      <a href="https://www.w3.org/TR/WCAG20/"
        >Web Content Accessibility Guidelines</a
      >
      (WCAG) 2.0, Level A, for our websites.
    </p>

    <p>
      Our commitment to providing our university community with campus physical
      accessibility is strong. We strive to provide {{ $app.name }}
      students, faculty, staff, alumni and visitors with accessible routes,
      entrances, telephones and facilities for people with mobility, hearing,
      visual and other disabilities.
    </p>

    <p>
      The Glenn Roy Blundon Centre at {{ $app.name }} provides and co-ordinates
      programs and services that enable students with disabilities to maximize
      their educational potential and to increase awareness of inclusive values
      among all members of the university community.
    </p>
  </section>
</template>

<script setup lang="ts">
const title = "Accessibility";
</script>

<style lang="scss" scoped></style>
