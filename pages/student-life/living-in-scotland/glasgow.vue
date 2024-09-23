<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/glasgow.jpg"
    :items="[
      { title: 'Student Life', path: '/student-life' },
      { title: 'Living in Scotland', path: '/student-life/living-in-scotland' },
    ]"
  />
  <Subheading
    :title="`Living in ${title}`"
    desc="Steeped in history, yet undeniably modern, it’s known for being one of Scotland’s friendliest places. Its music scene and pubs, clubs and restaurants could keep you busy every night of the week and its famous 'Style Mile' is the UK’s most successful shopping location outside of London’s West End."
  />
  <hr />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <section>
      <h2>History</h2>
      <p>
        Glasgow is an ancient city with a history that can be traced back to
        prehistoric times. However, it is Saint Mungo who is credited with
        founding the city after establishing a church in the area in the 6th
        century. During the Middle Ages, Glasgow was a small trading town and
        held weekly markets that attracted craftsmen and traders from all over
        Scotland. However, it was the Industrial Revolution that really put
        Glasgow on the map.
      </p>
      <img
        src="https://www.uws.ac.uk/media/3512/glasgow-life-uws-1.jpg"
        class="aspect-video object-cover object-bottom mb-3"
      />

      <p>
        During this time, many industries flourished in Glasgow, including sugar
        processing, linen making, cotton spinning, tobacco trading and glass
        manufacturing. But it was ship building that made the city famous - an
        industry that survives to this day. With direct access to the Atlantic
        via the Clyde, Glasgow was also perfectly positioned to become a trade
        hub for the American colonies.
      </p>
      <p>
        In recent years, the city has seen a number of large scale urban renewal
        and regeneration programmes, including the Clyde Waterfront regeneration
        project, making it one of Europe’s most vibrant, dynamic and stylish
        cities.
      </p>
    </section>
    <section>
      <hr />
      <h2>Top attractions</h2>
      <p>
        With such a rich and extensive history, it is no surprise that Glasgow
        is home to a huge variety of world-class visitor attractions. From
        Glasgow Cathedral, the jewel in Glasgow's architectural crown, to
        Kelvingrove Art Gallery and Museum there is something for everyone.
        Glasgow's top attractions include:
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
const title = "Glasgow";
const attractions = [
  { name: "Glasgow Cathedral", link: "http://www.glasgowcathedral.org.uk/" },
  {
    name: "Glasgow Science Centre",
    link: "http://www.glasgowsciencecentre.org/",
  },
  {
    name: "Kelvingrove Art Gallery and Museum",
    link: "http://www.glasgowlife.org.uk/museums/kelvingrove/pages/default.aspx",
  },
  { name: "The Hunterian", link: "http://www.gla.ac.uk/hunterian/" },
  {
    name: "Glasgow City Chambers",
    link: "https://www.visitscotland.com/info/see-do/glasgow-city-chambers-p246401",
  },
];
const items = [
  {
    title: "City bus tours",
    desc: "With so much to offer, the best way to see Glasgow is by taking an open-topped city bus tour. These offer an insight into Glasgow's colourful past while taking in all the major attractions and historic sites. They are generally hop-on and hop-off, so you can stop whenever you want to explore the city further on foot.",
    src: "https://www.uws.ac.uk/media/1089/jason-briscoe-132232.jpg",
  },
  {
    title: "Eating out",
    desc: "The culinary scene in Glasgow is famous for its variety, quality and innovation. From fine dining restaurants to street food trucks, and with plenty of options in between, there is enough to keep even the most discerning foodie happy. Explore Glasgow offer a comprehensive guide to eating out in the city. ",
    src: "https://www.uws.ac.uk/media/1045/casey-lee-105763.jpg",
  },
  {
    title: "Nightlife and entertainment",
    desc: "From comedy to cabaret and live gigs to musicals, there is a nearly endless selection of night time entertainment options in Glasgow. Whether you are partial to a cocktail or two, or prefer a more sophisticated night at the opera, there is something to suit all tastes ",
    src: "https://www.uws.ac.uk/media/1046/people-party-dancing-music.jpg",
  },
  {
    title: "Bars and pubs",
    desc: "Glasgow offers an extensive choice of drinking establishments. Whether you fancy a traditional pub serving classic ales or a boutique bar offering trendy cocktails, there is something to keep everyone happy. TimeOut have produced a guide to the best pubs in Glasgow to get you started. ",
    src: "https://www.uws.ac.uk/media/1047/pexels-photo-196031.jpeg",
  },
  {
    title: "Nightclubs and live music",
    desc: "Glasgow has a lively music scene with something exciting going on every night of the week. Nightclubs range in size from large warehouse venues to small basement rooms and play an equally wide range of music. What’s on Glasgow provides a comprehensive list of music events taking place in the city. ",
    src: "https://www.uws.ac.uk/media/1090/gonzalo-poblete-450.jpg",
  },
  {
    title: "Theatre, opera and ballet",
    desc: "Home to world famous institutions such as the Scottish Opera, Scottish Ballet and the National Theatre of Scotland, Glasgow offers plenty in the way of more high-brow entertainment too. What's on stage is the go-to guide for show listings in the city. ",
    src: "https://www.uws.ac.uk/media/1048/ballet-production-performance-don-quixote-45258.jpeg",
  },
  {
    title: "Parks and gardens",
    desc: "Glasgow means 'dear green place' in Gaelic and has over 90 parks and gardens in which to escape the hustle and bustle of city life. Highlights include Glasgow Green, the city's oldest park, and Victoria Park with its bright floral displays. People Make Glasgow have a guide to green spaces in the city. ",
    src: "https://www.uws.ac.uk/media/1091/pexels-photo-325521.jpeg",
  },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
