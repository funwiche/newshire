<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/escape-the-city.jpg"
    :items="[
      { title: 'Student Life', path: '/student-life' },
      { title: 'Living in Scotland', path: '/student-life/living-in-scotland' },
    ]"
  />
  <Subheading
    :title="title"
    desc="From woodlands and wetlands to mountains and heaths, Scotland is an
          incredibly biodiverse country. For those wishing to escape the city
          and experience the great outdoors there is plenty of beautiful
          countryside to explore and wildlife to discover. Scottish Natural
          Heritage have lots of information about enjoying Scotland's
          countryside. From suggested day trips to advice about access rights,
          you'll find all the information you need to enjoy the great outdoors
          safely and responsibly."
  />
  <hr />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <section v-for="(n, i) in items" :key="i">
      <h3 class="font-serif">{{ n.title }}</h3>
      <img
        v-if="n.image"
        :src="n.image"
        class="aspect-video object-cover object-bottom mb-3"
      />
      <p class="italic font-serif opacity-75" v-html="n.desc" />
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Escape the city";
const items = [
  {
    title: "Loch Lomond and the Trossachs National Park",
    image: "",
    desc: `Loch Lomond and the Trossachs National Park, with its breath-taking scenery, is easily accessible by public transport from Glasgow. From a gentle stroll around the shores of the loch to mountain biking and wild camping, the park has plenty to offer and is great for both day trips or longer stays alike. More information can be found on the Loch Lomond and the Trossachs National Park website`,
  },
  {
    title: "Pollok Country Park",
    image: "",
    desc: `Located just a few miles south of Glasgow, Pollok Country Park offers extensive woodland and gardens that are home to a wide variety of wildlife. Featuring woodland walks, a wildlife garden, scenic picnic spots and even Highland cattle, the park is a great place to escape the hustle and bustle of urban life. What's on Glasgow gives further information on amenities, activities and events at Pollok Country Park.`,
  },
  {
    title: "Kelburn Castle and Country Centre",
    image: "",
    desc: `Kelburn Castle and Country Centre combines beautiful woodlands with one of Scotland's most charming and unique castles. Located near Largs on the west coast, Kelburn is easily accessible from Glasgow and offers a wide range of popular attractions. From spectacular glen walks to the Secret Forest, it's a great place for an adventure. More information can be found on the Kelburn Castle website.`,
  },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
