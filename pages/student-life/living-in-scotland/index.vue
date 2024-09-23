<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/living-in-scotland.jpg"
    :items="[{ title: 'Student Life', path: '/student-life' }]"
  />
  <Subheading
    :title="title"
    :desc="`Find out what student life in ${$app.country} has to offer and what makes it such an exciting and unique place to call home.`"
  />
  <div>
    <section class="pb-12 px-4">
      <div class="container">
        <p class="font-serif">
          {{ $app.country }} is an area defined by contrast. Rich in tradition
          yet culturally diverse; home to historic towns and modern cities with
          excellent transport links across the country, iconic historic sites
          and surrounded by beautiful countryside, there really is something for
          everyone. Explore the four historic {{ $app.name }} campus towns,
          Glasgow, Edinburgh and more below.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <Card
            v-for="n in scotland"
            :key="n.path"
            :title="n.title"
            :src="n.src"
            :msg="n.msg"
            :path="n.path"
          />
        </div>
      </div>
    </section>
    <section class="bg-cover bg-center bg-[url('/sliders/donan.jpg')]">
      <div class="bg-black/70 px-4">
        <div class="h-[430px] md:h-[600px] container flex items-center">
          <div class="text-white max-w-screen-md">
            <Heading title="Did" subtitle="you know?" />
            <p class="font-serif">
              The name Eilean Donan, or island of Donan, is most probably called
              after the 6th century Irish Saint, Bishop Donan who came to
              Scotland around 580 AD. The first fortified structure was not
              built on the island until the early 13th century as a defensive
              measure, protecting the lands of Kintail (part of the ancient
              territory of the Lord of the Isles) against the Vikings raiders.
              Eilean Donan offered the perfect defensive position.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = `Living in ${$app.country}`;
</script>

<style lang="scss" scoped></style>
