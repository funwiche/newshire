<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/banner9.webp"
    :items="[{ title: 'Student Life', path: '/student-life' }]"
  />
  <Subheading
    title="Sport and Active Lifestyle"
    desc="We are committed to looking after your fitness, health and wellbeing whilst at University and we offer a variety of facilities, programmes, activities, challenges and events that cater to you."
  />
  <section class="md:flex bg-warning mb-6">
    <img
      src="https://www.chester.ac.uk/media/media/photography/photography/sports-/RS45285_AU20Sports20Societies-21-scr.jpg"
      class="md:w-1/2 object-cover"
    />
    <div class="md:w-1/2 p-6 sm:p-24">
      <div class="text-4xl sm:text-6xl font-bold">Great facilities and</div>
      <div class="text-4xl sm:text-6xl font-serif mb-5">
        1st class support network
      </div>
      <p>
        Whether you are a seasoned competitor, new to sport and exercise or
        simply just want to give something a go, then we can accommodate you.
        <br />
        <br />
        Great facilities, passionate professionals and a first class support
        network to help you engage in sport at any level will help you to both
        settle into life at {{ $app.city }} and enhance your student experience.
        <br />
        <br />

        The {{ $app.name }} recognises the importance of sport, fitness and
        health to its institutional mission and core values. Sport and fitness
        plays an integral part of this in ensuring that there is a pursuit of
        excellence, a distinctive student experience, inclusiveness and a
        supportive culture. We continue to develop and enhance our facilities,
        provision and support of sport to ensure that all students and staff are
        able to participate at appropriate levels to fulfil their sport and
        fitness needs and desires. <br />
        <br />

        We are also home to some of {{ $app.city }}'s sports clubs namely:
        {{ $app.city }} Football Club, {{ $app.city }} Rugby Club, City of
        {{ $app.city }} Swimming Club and {{ $app.city }} Hockey Club. By
        working closely with the Students Union, Sport and Exercise Sciences
        academic teams, the Grounds and Gardens department, and many other
        individuals, departments, groups and agencies, we aim to continue to
        enhance the sporting profile of the University.
      </p>
    </div>
  </section>
  <Heading title="What we" subtitle="Offer" />
  <section
    class="pb-8 md:pb-20 max-lg:px-4 container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
  >
    <div
      :key="i"
      v-for="(n, i) in items"
      class="aspect-[3/4] bg-black/85 text-white text-center p-6 pt-[40%]"
    >
      <i class="fa-light fa-plus text-3xl text-warning"></i>
      <div class="pt-1 font-semibold">
        {{ n }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = "Sports & Physical Activities";
const items = [
  "Fitness suite and Athletics’ Union memberships",
  "On campus gym and spin studio",
  "Swimming pool",
  "Active campus sessions, challenges and events",
  "6 and 12 week fitness, strength, toning and weight loss programmes",
  "Sports therapy and strength and conditioning",
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
