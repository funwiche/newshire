<template>
  <Title>About</Title>
  <breadcrum :title="title" src="/sliders/about_us.jpg" />
  <Subheading
    title="About"
    desc="A forward-thinking Modern University at the heart of a Historic City."
  />
  <section>
    <Heading title="Awards" subtitle="& Honours" />
    <div class="md max-lg:px-4 content">
      <p>
        {{ $app.name }}’s faculties have been recognized with numerous awards
        and honours for their meaningful contributions to society. The Arctic
        Inspiration Prize, SSHRC Impact Awards (including Gold Medal and Insight
        Award), Governor General’s Innovation Award (2018 and 2019), and the
        UN’s Climate Solution Award are just a few of the national and
        international accolades that demonstrate {{ $app.name }}’s place as a
        global research university.
      </p>
      <p>
        Most recently, {{ $app.name }} was named top challenger in North America
        by University Business Incubators, and the {{ $app.name }} Centre for
        Entrepreneurship was been recognized as one of the top five emerging
        entrepreneurship centres in the world.
      </p>
      <p>
        Many individuals affiliated with {{ $app.name }} are nationally and
        internationally recognized including:
      </p>
      <ul>
        <li>31 fellows of the Royal Society of UK</li>
        <li>21 Scotish Research Chairs</li>
        <li>19 fellows of the Scotish Academy of Engineering</li>
        <li>13 fellows of the Acotish Academy of Health Sciences</li>
      </ul>
    </div>
  </section>
  <section>
    <Heading title="Teaching" subtitle="& Learning" />
    <div class="md max-lg:px-4 content">
      <p>
        Offering more than
        <nuxt-link to="/academics/programs"
          >200 degree programs, professional development courses and certificate
          programs</nuxt-link
        >, {{ $app.name }} is one of the largest universities in the UK.
      </p>
      <p>
        With an ambition to deliver a premium, personalised and purposeful
        student experience, there are three fundamental and guiding principles
        that underpin our approach teaching and learning.
      </p>
      <h3>Research and practice-informed teaching</h3>
      <p>
        With a rich research culture at the University, students benefit from
        studying on a course that is research and practice-informed, helping
        them to become highly valuable and knowledgeable specialists within
        their chosen area of study.
      </p>
      <h3>Social and immersive learning</h3>
      <p>
        With social and immersive learning collectively helping to foster a
        sense of community and offering our students real-world opportunities,
        this contributes to helping our students to become &lsquo;World
        Ready&rsquo; graduates of the University.
      </p>
      <h3>Authentic assessment</h3>
      <p>
        With assessments often mirroring tasks our graduates might undertake in
        the workplace, this ensures our graduates are ready for the world of
        work.
      </p>
    </div>
  </section>
  <section class="pb-8">
    <Heading title="Inter-" subtitle="nationalization" />
    <div class="md max-lg:px-4 content">
      <p>
        {{ $app.name }} is privileged to be able to bring together students,
        faculty and staff from {{ $app.country }} and other countries, building
        mutual respect, cultural understanding and meaningful relationships.
        That's why {{ $app.name }} is committed to internationalization,
        international co-operation, student mobility and cultural sensitivity.
      </p>

      <p>
        According to the Scotish Association for Graduate Studies,
        {{ $app.name }} has the highest percentage of full-time international
        master's and doctoral students in {{ $app.country }}. In 2015,
        {{ $app.name }} ranked first among British universities in the
        International Student Barometer in the category of support from the
        graduate school.
      </p>

      <ul>
        <li>3,400+ international students from 110+ countries.</li>
        <li>
          20% of the student population is international students and nearly 40%
          of all graduate students are international students
        </li>
        <li>125 exchange agreements in more than 40 countries</li>
      </ul>
    </div>
  </section>
  <section class="bg-black/85 pb-20 pt-6 text-white">
    <Heading title="Latest" subtitle="News" linktitle="All News" path="/news" />
    <div
      class="container max-lg:px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
    >
      <nuxt-link
        v-for="n in articles"
        :key="n.slug"
        :to="n.slug"
        class="group block"
      >
        <img :src="n.image" class="mb-4 aspect-video object-cover" />
        <h2
          class="text-lg sm:text-xl font-semibold underline-offset-[6px] decoration-4 group-hover:underline mb-2"
          v-text="n.title"
        />
        <p class="text-sm opacity-60">{{ n.date }}</p>
      </nuxt-link>
    </div>
  </section>
  <section class="pb-20 pt-6">
    <Heading title="Information" subtitle="about..." />
    <div class="container max-lg:px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card
        alt
        v-for="n in items"
        :key="n.path"
        :title="n.title"
        :src="n.img"
        :path="n.path"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import news from "~/resources/news";
const articles = news.filter((el) => el.title).slice(0, 3);
const title = "About the University";
const items = [
  {
    title: "Find a course",
    path: "/academics",
    img: "/sliders/banner1.webp",
  },
  {
    title: "Work with us",
    path: "/careers",
    img: "/sliders/career.jpeg",
  },
  {
    title: "Faculties",
    path: "/faculties",
    img: "/sliders/banner3.webp",
  },
  {
    title: "Contact us",
    path: "/contact",
    img: "/sliders/contact_us.jpg",
  },
];
</script>

<style lang="scss" scoped></style>
