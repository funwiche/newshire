<template>
  <section
    class="h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] overflow-hidden flex-center relative"
  >
    <video
      autoplay
      loop
      muted
      :controls="false"
      preload="auto"
      src="/playback/background-video.mp4"
      class="w-full h-full object-cover pointer-events-none z-0"
    />
    <div
      class="absolute w-full h-full p-4 bg-black/30 flex-center z-10 pt-20 lg:pt-36"
    >
      <div class="sm">
        <h2
          class="text-4xl sm:text-5xl font-black text-white drop-shadow-xl text-center mb-4 uppercase"
        >
          <div class="mb-2">Apply for</div>
          January 2025 Intake
        </h2>
        <div class="border-4 border-warning/80 mb-4 rounded-md overflow-hidden">
          <nuxt-link
            to="/academics/undergraduate"
            class="flex-center font-semibold bg-warning/80 hover:bg-warning h-20 text-lg"
          >
            Undergraduate Programs
          </nuxt-link>
        </div>
        <div class="border-4 border-primary/80 mb-4 rounded-md overflow-hidden">
          <nuxt-link
            to="/academics/postgraduate"
            class="flex-center text-white bg-primary/80 hover:bg-primary h-20 text-lg"
          >
            Graduate Programs
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <Subheading
    class="bg-secondary/50"
    title="Welcome"
    :desc="`Join the ${$app.name}’s 3,400+ international students from nearly 110+
        countries and discover our diversity, culture and community on campus!
        Explore our degree and co-op programs that will give you the skills and
        Scottish experience you want. Hear from current international students
        right now! We have nearly 200,000 international Graduates from over 120
        countries around the globe.`"
  />
  <section class="content pt-8 pb-12">
    <Heading title="Get future" subtitle="focused" />
    <section class="md:flex md:flex-row-reverse gap-4 container max-lg:px-4">
      <div class="flex-1 pb-4">
        <img class="w-full" src="/images/academics.webp" />
      </div>
      <div class="flex-1">
        <p>
          The {{ $app.name }} offers a wide variety of programs and courses, all
          taught by outstanding – often award-winning faculty – with a
          commitment to delivering an experience that integrates a strong
          foundation in broad-based learning with concentrated study in
          specialized and applied fields.
        </p>
        <ul class="grid gap-2">
          <li>
            <nuxt-link to="/admissions/language-requirements" class="link-bold">
              Language Requirements
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admissions/academic-requirements" class="link-bold">
              Academic Requirements
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admissions/how-to-apply" class="link-bold"
              >How to Apply</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/admissions/tuition" class="link-bold">
              Tuition and Living Costs
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/international" class="link-bold">
              International Students
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/immigration" class="link-bold">
              Visas and immigration
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/academics/programs" class="link-bold">
              Explore Programs
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admissions/deadlines" class="link-bold">
              Application deadlines
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <Heading title="Explore" subtitle="Our Campus" />
    <section class="pb-12 grid sm:grid-cols-3 gap-2 container max-lg:px-4">
      <div
        v-for="(n, i) in explore_campus"
        :key="i"
        class="bg-secondary p-4 sm:p-5 flex"
      >
        <i :class="`fa-solid fa-${n.icon} text-[24px] mt-2 w-10`" />
        <div class="flex-1">
          <h4>{{ n.title }}</h4>
          <div class="text-sm">{{ n.desc }}</div>
        </div>
      </div>
    </section>
    <section class="bg-black/85 pb-20 pt-6 text-white">
      <Heading
        title="Latest"
        subtitle="News"
        linktitle="All News"
        path="/news"
      />
      <div
        class="container max-lg:px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
      >
        <nuxt-link
          v-for="n in articles"
          :key="n.slug"
          :to="n.slug"
          class="group block nounderline"
        >
          <img :src="n.image" class="mb-4 aspect-video object-cover" />
          <div class="text-lg sm:text-xl font-semibold mb-2" v-text="n.title" />
          <p class="text-sm opacity-60">{{ n.date }}</p>
        </nuxt-link>
      </div>
    </section>
    <section class="lg:py-6">
      <Heading title="Things" subtitle="You Should Know" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 container max-lg:px-4">
        <div v-for="(n, i) in explore_city" :key="i" class="bg-secondary">
          <img :src="n.img" :alt="n.title" class="w-full" />
          <div class="p-4 pb-0 text-sm">
            <h4>{{ n.title }}</h4>
            <p>{{ n.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import news from "~/resources/news";
const articles = news.filter((el) => el.title).slice(0, 3);
const explore_campus = [
  {
    title: "Access Available Scholarships",
    desc: `More than $42.7 million in scholarships in Scotland were awarded to ${$app.name} students in 2021.`,
    icon: "sack-dollar text-info",
  },
  {
    title: "Housing For Your Needs",
    desc: "Affordable, convenient, and ranked #1 in housing for universities in Scotland! Visit the Student Housing Services today!",
    icon: "hotel text-cyan-900",
  },
  {
    title: "Experience Student Life",
    desc: `Explore the unique features at ${$app.name} with our interactive campus map.`,
    icon: "map-location-dot text-primary",
  },
  {
    title: "Clubs and Organizations",
    desc: "Student clubs that represent the diversity of our campus community, representating our global make-up.",
    icon: "users text-warning",
  },
  {
    title: "The Athletics Centre",
    desc: "Want to join a sports team? Learn how to dance? Shoot hoops between classes? You can, in our new, state of the art Athletics Centre.",
    icon: "volleyball text-pink-600",
  },
  {
    title: "Explore The Arboretum",
    desc: "Get outside! Recharge and go for a nature walk between classes.",
    icon: "tree text-success",
  },
];
const explore_city = [
  {
    title: "Airports",
    desc: "Less then an hour away from Edinburg International Airport.",
    img: "/images/airport.webp",
  },
  {
    title: "Hikes and Trails",
    desc: "St Andrew is home to many of Scotland's best Hikes and Trails, one of which is right on campus!",
    img: "/images/trail.webp",
  },
  {
    title: "Restaurants",
    desc: "From fine dining to cheap eats, St Andrew has the best selection of restaurants to satisfy your taste buds!",
    img: "/images/restaurant.webp",
  },
  {
    title: "Proximity  to Edinburg",
    desc: "St Andrew is close to Scotland's most vibrant and multicultural cities, brimming with opportunity!",
    img: "/images/urban-centre.webp",
  },
];
</script>

<style lang="scss" scoped></style>
