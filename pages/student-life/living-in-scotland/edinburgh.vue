<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/edinburgh.jpg"
    :items="[
      { title: 'Student Life', path: '/student-life' },
      { title: 'Living in Scotland', path: '/student-life/living-in-scotland' },
    ]"
  />
  <Subheading
    :title="`Living in ${title}`"
    desc="This ancient city, known as the ‘Athens of the North’, is home to numerous iconic historic sites, most notably Edinburgh Castle, Holyrood Palace, and the churches of St Giles, Greyfriars and the Canongate"
  />
  <hr />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <section>
      <h2>History</h2>
      <p>
        Edinburgh is an ancient settlement and has been a major seat of
        population for tens of thousands of years. In the Middle Ages, Edinburgh
        began as a fort with Castle Rock providing an easily defended position.
        In the late 11th Century King Malcolm III built what is now Edinburgh
        Castle followed by Duncan I's construction of the Abbey at Holyrood, and
        a thriving community grew in the surrounding area.
      </p>
      <img
        src="https://www.uws.ac.uk/media/3511/edinburgh-life-uws-2.jpg"
        class="aspect-video object-cover object-bottom mb-3"
      />
      <p>
        Throughout its history, Edinburgh has suffered constant conflict between
        the Scots and the English, with Edinburgh Castle changing hands numerous
        times between the 13th and 16th centuries. The city also suffered from
        outbreaks of plague in the late 16th and early 17th centuries. Despite
        this adversity, Edinburgh continued to grow and in the 19th century the
        city's architecturally acclaimed 'New Town' was constructed to
        accommodate the ever-increasing population.
      </p>
      <p>
        While Glasgow is the city of industry, Edinburgh is traditionally home
        to more intellectual pursuits. During the Scottish Enlightenment,
        Edinburgh became known as a "hot bed for genius", famed for its great
        philosophers, artists, authors and scientists. Today, tourism is a major
        industry for the city and Edinburgh welcomes millions of visitors each
        year from all over the world.
      </p>
    </section>
    <section>
      <h2>Top attractions</h2>
      <p>
        From its quirky medieval Old Town to the elegant Georgian New Town,
        Edinburgh is full of interesting things to do and see. It is home to
        some of Scotland's most visited tourist attractions and highlights
        include:
      </p>
      <ul>
        <li v-for="n in attractions" :key="n.link">
          <a :href="n.link" target="_blank" class="mb-2"> {{ n.name }} </a>
        </li>
      </ul>
    </section>
    <section v-for="n in items" :key="n.src">
      <hr />
      <h2>{{ n.title }}</h2>
      <img :src="n.src" class="aspect-video object-cover object-bottom mb-3" />
      <p>{{ n.desc }}</p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Edinburgh";
const attractions = [
  { name: "Edinburgh Castle", link: "https://www.edinburghcastle.gov.uk/" },
  {
    name: "The Place of Holyrood House",
    link: "https://www.royalcollection.org.uk/visit/palace-of-holyroodhouse",
  },
  {
    name: "The National Museum of Scotland",
    link: "http://www.nms.ac.uk/national-museum-of-scotland/",
  },
  { name: "Edinburgh Zoo", link: "http://www.edinburghzoo.org.uk/" },
  { name: "Dynamic Earth", link: "http://www.dynamicearth.co.uk/" },
  {
    name: "Edinburgh Dungeons",
    link: "https://www.thedungeons.com/edinburgh/en/",
  },
  {
    name: "Scottish National Gallery of Modern Art",
    link: "https://www.nationalgalleries.org/visit/scottish-national-gallery-modern-art",
  },
  {
    name: "The Royal Yacht Britannia",
    link: "http://www.royalyachtbritannia.co.uk/",
  },
];
const items = [
  {
    title: "Walking tours",
    desc: " Edinburgh is relatively compact and a walking tour is a great way to discover the city. From literary pub crawls to ghost tours exploring the darker side of the city's history, there are a wide variety of walking tours that cater to a range of interests. The List has a guide to the city's best walking tours.",
    src: "https://www.uws.ac.uk/media/1105/edinburgh-1969709_1920.jpg",
  },
  {
    title: "Eating out",
    desc: "Edinburgh boasts an outstanding choice of world-class restaurants. From celebrated Michelin restaurants to family-run bistros, there are lots of options for all tastes and budgets. Edinburgh is also a great place to sample some Scottish delicacies and local produce too, with plenty of specialist food outlets and farmers markets. This is Edinburgh has a guide to eating in the city.",
    src: "https://www.uws.ac.uk/media/1101/pexels-photo-390403.jpeg",
  },
  {
    title: "Nightlife and entertainment",
    desc: "Edinburgh is a real party city and a fantastic place to go for a great night out. Hidden in its winding streets there are a surprising number of quirky bars, nightclubs, and live music venues alongside world-class concert halls and theatres to explore.",
    src: "https://www.uws.ac.uk/media/1095/pexels-photo-196652.jpeg",
  },
  {
    title: "Bars and pubs",
    desc: "Whether you're looking for a peaceful spot to enjoy a quiet drink or two, or want a lively place to dance into the wee hours, Edinburgh is packed with options. With such variety on offer you can be certain of one thing - you won’t go thirsty in this city! TimeOut has put together a list of some of the city's best pubs and bars as a starting point.",
    src: "https://www.uws.ac.uk/media/1103/carla-oliveira-219055.jpg",
  },
  {
    title: "Nightclubs and live music",
    desc: "Edinburgh has a vibrant music scene from live folk music to internationally renowned club nights and everything in between, all genres of music are represented. What's on Edinburgh provides a comprehensive list of music events being held in the city.",
    src: "https://www.uws.ac.uk/media/1096/live-music-2219036_1280.jpg",
  },
  {
    title: "Theatre, opera and ballet",
    desc: "Home to several world-class concert halls and theatres, including the Playhouse and the Usher Hall, Edinburgh has plenty of cultural entertainment options too. What’s on Stage gives comprehensive listings of shows in the city.",
    src: "https://www.uws.ac.uk/media/1102/juggler-1938707_1920.jpg",
  },
  {
    title: "Parks and gardens",
    desc: "Edinburgh is an extremely green city with an extensive network of parks and gardens. From the manicured lawns of Princess Street Gardens to the rugged summit of Arthur's Seat, you are never far away from an open space in which to relax and regroup. The List have compiled a guide to the best green spaces in the city.",
    src: "https://www.uws.ac.uk/media/1097/rob-bye-141864.jpg",
  },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
