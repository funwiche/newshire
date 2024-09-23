<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/images/research.jpg"
    msg="+50% of research is World Leading or Internationally Excellent"
  />
  <Subheading
    title="Research"
    desc="Our portfolio contains both work that is at the leading edge of its subject discipline and research that brings about changes to policy, practice and services. These benefit the economic, social and cultural well-being of our region and the wider community."
  />
  <Heading title="Explore" subtitle="Research" />
  <section class="max-lg:px-4 container mb-8">
    <p class="mb-5">
      Postgraduate Research degrees from Northport University enable you to work
      at the cutting-edge of your industry or sector and contribute to the
      advancement of knowledge. Explore the options below to start your research
      journey
    </p>
    <div
      class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
    >
      <Card
        alt
        v-for="n in areas"
        :key="n.path"
        :title="n.title"
        :src="'https://www.uws.ac.uk' + n.src"
        :msg="n.msg"
        :path="n.path"
      />
    </div>
  </section>
  <Heading title="Make" subtitle="your mark" />
  <section class="content md max-lg:px-4 pb-12">
    <p>
      Entry onto a postgraduate research degree normally requires you to have
      obtained a good Honours degree (First or Upper Second Class) or a
      postgraduate qualification in a relevant area of study. More information
      about academic entry requirements is listed on the individual course
      pages.
    </p>
    <p>
      Postgraduate research degrees vary in terms of structure, duration,
      purpose and academic rigour.
    </p>
    <ul class="listitems">
      <li v-for="deg in degrees" :key="deg" class="pm-2">
        {{ deg }}
      </li>
    </ul>
    <p class="font-bold pt-4">For more information please email:</p>

    <a :href="`mailto:pgr@${$app.host}`" class="link-bold text-success"
      >pgr@{{ $app.host }}</a
    >
  </section>
</template>

<script setup lang="ts">
const title = "Research";
const areas = [
  {
    title: "Computing Science",
    msg: "Research opportunities leading to MRes, MPhil or PHD.",
    path: "/academics/research",
    src: "/media/3504/computing-uws-3.jpg",
  },
  // {
  //   title: "Dementia Studies",
  //   msg: "Research opportunities in Dementia Studies leading to MRes.",
  //   path: "/academics/research",
  //   src: "/media/2977/health-studies-family-health-uws.jpg",
  // },
  {
    title: "Economics",
    msg: "Research opportunities leading to MRes, MPhil or PhD.",
    path: "/academics/research",
    src: "/media/3495/business-uws-3.jpg",
  },
  {
    title: "Education",
    msg: "Research opportunities leading to a PhD qualification.",
    path: "/academics/research",
    src: "/media/5579/pgde-teacher.jpg",
  },
  {
    title: "Enterprise, Innovation and Strategy",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/4200/international-foundation-programme-business-uws.jpg",
  },
  {
    title: "Environmental Science",
    msg: "Research opportunities leading to MPhil or PhD",
    path: "/academics/research",
    src: "/media/2744/applied-bioscience-and-zoology-uws.jpg",
  },
  {
    title: "Events and Tourism",
    msg: "Research opportunities leading to , MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/1139/glasgow-2-uws.jpg",
  },
  {
    title: "Law",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/2676/individual-student-52.jpg",
  },
  {
    title: "Leadership Studies",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/2859/business-with-english-language-uws.jpg",
  },
  {
    title: "Microbiology",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/2752/pharmacy-science-and-health-uws.jpg",
  },
  {
    title: "Music",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/3008/music-uws.jpg",
  },
  {
    title: "Musculoskeletal Science/Human Health",
    msg: "Research opportunities leading to MRes, MPhil and PhD.",
    path: "/academics/research",
    src: "/media/2992/acute-mental-health-care-uws.jpg",
  },
  {
    title: "Nuclear Physics",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/2765/science-uws-4.jpg",
  },
  {
    title: "People, Work and Organisations",
    msg: "Research opportunities leading to MPhil or PhD",
    path: "/academics/research",
    src: "/media/2744/applied-bioscience-and-zoology-uws.jpg",
  },
  {
    title: "Performance Arts",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/7070/img_9697.jpg",
  },
  {
    title: `Psychology Research Degrees | ${$app.name}`,
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/3433/psychology-uws.jpg",
  },
  {
    title: "Social Sciences",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/3433/psychology-uws.jpg",
  },
  {
    title: "Social Work",
    msg: "Research opportunities leading to PhD.",
    path: "/academics/research",
    src: "/media/3438/masters-in-public-administration-uws.jpg",
  },
  {
    title: "Sport & Sporting Events",
    msg: "Research opportunities leading to MRes, MPhil or PhD",
    path: "/academics/research",
    src: "/media/3927/camera-event-football_rz.jpg",
  },
];
const degrees = [
  "Master of Research (MRes)",
  "Master of Philosophy (MPhil)",
  "Doctor of Philosophy (PhD)",
  "Doctor of Philosophy (PhD) by Publication",
  "Doctor of Business Adminstration (DBA)",
  "Doctor of Professional Studies (DProf)",
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
