<template>
  <Title>{{ title }}</Title>
  <breadcrum :title="title" src="/sliders/banner7.webp" />
  <Subheading
    :title="title"
    desc="Going to university is about much more than getting a qualification, it’s also the chance to enjoy an exciting social life, gain some independence and make the most of the new opportunities available."
  />
  <Heading title="Campus" subtitle="life" />

  <div>
    <section class="pb-12 px-4">
      <div class="container grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
    <section
      class="bg-cover bg-center bg-[url('/sliders/escape-the-city.jpg')]"
    >
      <div class="bg-black/70 px-4">
        <div class="h-[430px] md:h-[600px] container flex items-center">
          <div class="text-white max-w-screen-md">
            <Heading title="Living in" :subtitle="$app.country" />
            <p class="font-serif pb-6">
              The west of Scotland is an area defined by contrast. Rich in
              tradition yet culturally diverse; home to historic towns and
              modern cities with excellent transport links across Scotland,
              iconic historic sites and surrounded by beautiful countryside,
              there really is something for everyone.
            </p>
            <div class="grid sm:grid-cols-2 gap-x-8">
              <nuxt-link
                v-for="n in scotland"
                :key="n.path"
                :to="n.path"
                class="flex items-center text-success bt border-zinc-500 py-4"
              >
                <div class="flex-1 underline font-bold">{{ n.title }}</div>
                <i class="fa-solid fa-right-long text-xs" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = "Student Life";
const links = [
  {
    title: "Accommodation",
    msg: "From managed flats to private rentals, there are accommodation options for everyone.",
    path: "/student-life/accommodation",
    src: "/sliders/accommodation.jpg",
  },
  {
    title: "Sports & Physical Activities",
    msg: "Find opportunities to ensure you keep your body active as well as your mind.",
    path: "/student-life/sports",
    src: "/sliders/banner9.webp",
  },
  {
    title: "Library",
    msg: "The University libraries hold over 200,000 books, plus journals and other resources.",
    path: "/library",
    src: "/sliders/library.jpg",
  },
  {
    title: "Living in Scotland",
    msg: "Find out what student life in Scotland has to offer and what makes it exciting",
    path: "/student-life/living-in-scotland",
    src: "/sliders/living-in-scotland.jpg",
  },
];
</script>

<style lang="scss" scoped></style>
