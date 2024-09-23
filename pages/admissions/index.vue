<template>
  <Title>{{ title }}</Title>
  <Breadcrum
    :title="title"
    src="/sliders/admissions.jpg"
    msg="We are one of Scotland's Top Comprehensive universities. Our degrees will provide you with a global outlook and prepare you for the best international opportunities available."
  />
  <Subheading
    title="Join our vibrant student community"
    desc="Join one of our 200+ courses at Undergraduate, Postgraduate, and Research Degree level, and enjoy student life in one of the UK’s greatest cities!"
  />
  <Heading title="Study" subtitle="with us" />
  <section class="px-4 pb-8 md:pb-16">
    <div class="container grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card
        v-for="n in links"
        :key="n.path"
        :title="n.title"
        :src="n.src"
        :msg="n.msg"
        :path="n.path"
      />
    </div>
  </section>
  <section class="py-8 md:py-20 px-4 bg-secondary">
    <div class="container flex gap-8 flex-col sm:flex-row">
      <div class="flex-1">
        <img src="/images/study-at.png" />
      </div>
      <div class="flex-1">
        <h2 class="subheading pb-6">Study at {{ $app.name }}</h2>
        <p>
          As a {{ $app.name }} graduate, you'll be work-ready and feel prepared
          to contribute both locally and globally. Your learning and teaching
          experience will be student-centred, personalised and distinctive -
          preparing you for a rewarding future. Our cutting-edge courses are
          career-focused and will help you develop advanced knowledge and
          understanding in your chosen field.
        </p>

        <nuxt-link class="btn bg-primary mt-6" to="/academics/undergraduate">
          undergraduate courses
        </nuxt-link>
        <div />
        <nuxt-link class="btn bg-primary mt-6" to="/academics/postgraduate">
          postgraduate courses
        </nuxt-link>
      </div>
    </div>
  </section>
  <section class="py-8 md:py-20 px-4">
    <div class="container flex gap-8 flex-col sm:flex-row-reverse">
      <div class="flex-1">
        <img src="/images/english-lang.jpg" />
      </div>
      <div class="flex-1">
        <h2 class="subheading pb-6">English Language Requirements</h2>
        <p>
          All international applicants are required to meet minimum English
          language standards. There are certain exemptions, eg. native speakers
          of English. Find out more by clicking the link below:
        </p>

        <nuxt-link
          class="btn bg-primary mt-6"
          to="/admissions/language-requirements"
        >
          English Language Requirements
        </nuxt-link>
      </div>
    </div>
  </section>
  <section class="py-8 md:py-20 px-4 bg-secondary">
    <div class="container flex gap-8 flex-col sm:flex-row">
      <div class="flex-1">
        <img src="/images/visa-support.jpg" />
      </div>
      <div class="flex-1">
        <h2 class="subheading mb-6">
          Visa Support & Resources for new International Students
        </h2>
        <p>
          For key resources to support you with applying for a visa from
          overseas and to help prepare you for living in the UK, please check
          out all the useful guides from the International Student Support team.
        </p>
        <nuxt-link class="btn bg-primary mt-3" to="/visas-and-immigration">
          visit International Student Support team
        </nuxt-link>
      </div>
    </div>
  </section>
  <Life />
</template>

<script setup lang="ts">
const title = "Become a student";
const links = [
  {
    title: "Study Options",
    msg: `${$app.name} offers a range of career-focused undergraduate, postgraduate and research degree opportunities across four academic schools.`,
    path: "/academics/programs",
    src: "/sliders/study-options.jpg",
  },
  {
    title: "Money, Fees & Funding",
    msg: `Thinking about finance and funding will be high on your agenda while at ${$app.name}, whether it’s making arrangements to pay for university accommodation or tuition fees, or looking for advice and guidance.`,
    path: "/admissions/tuition",
    src: "/sliders/tuition.jpg",
  },
  {
    title: "Language Requirements",
    msg: `To be successful at ${$app.name}, all students need to meet the minimum standard of English required for academic study. If English is not your native language, check whether you meet the entry requirements.`,
    path: "/admissions/language-requirements",
    src: "/sliders/language-requirements.jpg",
  },

  {
    title: "Academic Requirements",
    msg: "All academic entry criteria each applicant must satisfy for their chosen course of study inorder to be eligible to study.",
    path: "/admissions/academic-requirements",
    src: "/sliders/academic-requirements.jpg",
  },
  {
    title: "How to Apply",
    msg: `Step-by-step guides to the ${$app.name} application processes for international students at undergraduate, postgraduate and research degree level.`,
    path: "/admissions/how-to-apply",
    src: "/sliders/how-to-apply.jpg",
  },

  {
    title: "After you apply",
    msg: "Check our step-by-step guide on what to expect once you've submitted your application. From arranging your visa, accommodation and travel.",
    path: "/admissions/after-you-apply",
    src: "/sliders/after-you-apply.jpg",
  },
];
</script>

<style lang="scss" scoped></style>
