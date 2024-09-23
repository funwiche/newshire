<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    msg="Supporting your academic success."
    src="/sliders/library.jpg"
  />
  <Subheading
    :title="title"
    desc="The University libraries hold over 200,000 books, plus journals and other resources. In addition we hold a wealth of electronic resources covering a range of subject areas."
  />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <section>
      <img src="/images/library.jpg" class="mb-5" />
      <p>
        There is a Library on each {{ $app.name }} campus, with a wide range of
        digital and print resources available to support you during your time at
        {{ $app.name }}. Our digital resources are available online 24/7.
      </p>
      <p>
        The Library Team are available to assist you at our Library Info Points
        on campus.
      </p>
      <p>
        To find full details of all the services and resources available, plus
        library opening hours, collection searches, and more, contact the
        <a
          :href="`mailto:${$app.email}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $app.name }} Library here.</a
        >
      </p>
    </section>
    <section>
      <h2>Library Privacy Notice</h2>
      <p>
        The {{ $app.name }} Library Service is committed to looking after any
        information that you make available to us in line with all statutory
        requirements. This privacy notice outlines when and why we collect
        personal information from you and how we keep your information secure
        and your rights in relation to this information.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Library";
</script>

<style scoped></style>
