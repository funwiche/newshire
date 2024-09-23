<template>
  <Title>{{ title }}</Title>
  <Breadcrum :title="title" src="/sliders/banner1.webp" />
  <Subheading
    title="Study"
    :desc="`${$app.name} influences the economic, social and cultural development of Scotland and beyond by providing career-relevant, high quality, inclusive higher education alongside innovative, internationally recognised research.`"
  />
  <Heading title="Your journey" subtitle="starts here." />
  <section
    class="pb-8 md:pb-20 max-lg:px-4 container grid sm:grid-cols-2 md:grid-cols-3 gap-4"
  >
    <Card
      v-for="n in links"
      :key="n.path"
      :title="n.title"
      :src="n.src"
      :msg="n.msg"
      :path="n.path"
    />
  </section>
  <section class="py-8 md:py-20 px-4 bg-secondary">
    <div class="container flex gap-8 flex-col sm:flex-row">
      <div class="flex-1">
        <img src="/images/undergraduate.jpg" />
      </div>
      <div class="flex-1">
        <h2 class="subheading mb-5">Undergraduate study</h2>
        <p>
          Kick-start your career with an undergraduate degree from
          {{ $app.name }}.
        </p>
        <p>
          Our undergraduate prospectus is digital! Just provide a few details
          and in a matter of moments you’ll get access to your personalised
          downloadable prospectus packed with the information that matters most
          to you. No filler. No jargon. Just your {{ $app.name }}. Your way
        </p>
        <nuxt-link class="btn bg-primary mt-6" to="/academics/undergraduate">
          view our undergraduate courses
        </nuxt-link>
      </div>
    </div>
  </section>
  <section class="py-8 md:py-20 px-4">
    <div class="container flex gap-8 flex-col sm:flex-row-reverse">
      <div class="flex-1">
        <img src="/images/postgraduate.jpg" />
      </div>
      <div class="flex-1">
        <h2 class="subheading mb-5">Postgraduate study</h2>
        <p>
          {{ $app.name }} postgraduate & post-experience taught degree courses
          are career-focused and will help you develop advanced knowledge and
          understanding in your chosen field.
        </p>
        <p>
          Whether you’re looking to build on your undergraduate studies, boost
          your professional experience, or are interested in taking your career
          in a new direction, our 2023/24 digital postgraduate and
          post-experience prospectus is here to help you take your skills to the
          next level. Simply tell us a little about yourself and we’ll send your
          personalised digital prospectus, packed with the information that
          matters most to you, straight to your inbox.
        </p>
        <nuxt-link class="btn bg-primary mt-6" to="/academics/postgraduate">
          view our postgraduate courses
        </nuxt-link>
      </div>
    </div>
  </section>
  <section class="py-8 md:py-20 px-4 bg-secondary">
    <div class="container flex gap-8 flex-col sm:flex-row">
      <div class="flex-1">
        <img src="/images/research.jpg" />
      </div>
      <div class="flex-1">
        <h2 class="subheading">Postgraduate research</h2>
        <h2 class="subheading mb-5">opportunities</h2>
        <p>
          Postgraduate Research degrees from University of the West of Scotland
          enable you to work at the cutting-edge of your industry or sector and
          contribute to the advancement of knowledge.
        </p>
        <p>
          We offer a wide range of research degrees in all Academic Schools and
          subject areas.
        </p>
        <p>
          Find out more about our research degrees (Master of Research (MRes),
          Master of Philosophy (MPhil), Doctor of Philosophy (PhD), Doctor of
          Business Administration (DBA) & Professional Doctorate (DProf),
          tuition fees, studentships and how to apply.
        </p>
        <p>
          Join us and work with cutting-edge facilities, specialist knowledge
          and world-leading and internationally excellent experts, and help
          develop research outputs that have a tangible impact on society across
          the globe.
        </p>
        <nuxt-link class="btn bg-primary mt-3" to="/academics/research">
          view research degrees
        </nuxt-link>
      </div>
    </div>
  </section>
  <Life />
</template>

<script setup lang="ts">
const title = "Academics";
const links = [
  // {
  //   title: "",
  //   msg: "",
  //   path: "",
  //   src: "",
  // },
  {
    title: "Undergraduate Degrees",
    msg: `Kick-start your career with an undergraduate degree from ${$app.name}.  Information on the range of our undergraduate study options and Clearing choices.`,
    path: "/academics/undergraduate",
    src: "/sliders/undergraduate.jpg",
  },
  {
    title: "Postgraduate Degrees",
    msg: `Postgraduate & Post-experience degree courses, scholarships, and tuition fee information from ${$app.name} enable you to study at an advanced level, supported by expert academic tuition and guidance.`,
    path: "/academics/postgraduate",
    src: "/sliders/postgraduate.jpg",
  },
  {
    title: "Research Degrees",
    msg: `Postgraduate Research Degrees (MRes, MPhil, PhD, DBA, DProf) at ${$app.name} enable you to study independently, up to doctorate level.`,
    path: "/academics/research",
    src: "/sliders/research.jpg",
  },
  // {
  //   title: "Continuing Professional Development opportunities",
  //   msg: "  Our Centre for Continuing Professional Development has a growing catalogue of courses.",
  //   path: "/academics/cpd",
  //   src: "/sliders/cpd.jpg",
  // },
  // {
  //   title: "Money, Fees & Funding",
  //   msg: `Thinking about finance and funding will be high on your agenda while at ${$app.name}, whether it’s making arrangements to pay for university accommodation or tuition fees, or looking for advice and guidance.`,
  //   path: "/admissions/tuition",
  //   src: "/sliders/tuition.jpg",
  // },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
