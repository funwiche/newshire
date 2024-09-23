<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/culture-and-heritage.jpg"
    :items="[
      { title: 'Student Life', path: '/student-life' },
      { title: 'Living in Scotland', path: '/student-life/living-in-scotland' },
    ]"
  />
  <Subheading
    :title="title"
    desc="As you would expect from a country with such a rich history, Scotland
          is home to some unique cultural traditions which every student should
          experience during their time here."
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
const title = "Culture & Heritage";
const items = [
  {
    title: "Highland dress",
    image: "https://www.uws.ac.uk/media/1119/bagpipe-349717_1920.jpg",
    desc: `At formal occasions, such as weddings, it is traditional for Scots to don the iconic Highland Dress. This consists of a kilt, sporran, wool socks, Argyll jacket, kilt pin and a small knife known as a sgian-dubh (pronounced skee-en-doo).
The kilt is made from a special material called tartan. Tartan is a woven wool fabric with horizontal and vertical bands of colours. Different coloured tartans are associated with different clans and usually Scots choose to wear a tartan related to their clan name (or a clan name in their family tree, if their surname is not originally Scottish).`,
  },
  {
    title: "Highland Games",
    image: "",
    desc: `Highland Games are held all over Scotland and vary from small local events to large world famous events, such as Braemar Highland Games. Thought to have originated as a means for the clan chiefs to recruit the best fighting men, the games were popularised in the 19th century by Queen Victoria.
<br />
Not to be confused with the Olympic Games, Highland Games have their own unique set of sporting events and traditions. The most famous sports are known as the 'heavies', including the caber toss, which require huge strength and skill. Aside from sporting events, Highland Games also include bagpipe contests and dance competitions, where dancers perform the ancient Highland Fling.`,
  },
  {
    title: "Ceilidh",
    image: "",
    desc: `A ceilidh (pronounced kay-lee) is a social gathering where traditional Scottish dancing is accompanied by folk music. Ceilidhs usually also involve some whisky drinking and finish with a rousing rendition of 'Old Lang Syne' - a traditional song that uses lyrics from Robert Burn's famous poem by the same name.
<br/>
If you'd like to experience a proper Scottish party for yourself, Sloans in Glasgow run a ceilidh every Friday night offering guided dances and lots of fun!`,
  },
  {
    title: "Haggis",
    image: "",
    desc: `A national delicacy, the infamous Haggis is a savoury dish containing sheep's heart, liver and lungs, combined with oatmeal, onions and spices. Traditionally served with neeps (turnips), tatties (potatoes) and whisky sauce, the haggis is a distinctive and delicious dish. For non-meat eaters or those of a more squeamish disposition, there is the option of vegetarian haggis containing a mix of vegetables, pulses, oatmeal and spices.`,
  },
];
</script>
