<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/accommodation.jpg"
    :items="[{ title: 'Student Life', path: '/student-life' }]"
  />
  <Subheading
    title="Accommodation"
    :desc="`Find your people and make new friends in our accommodation sites in ${$app.city}. All University accommodation is conveniently located either on site or very close-by, to help you make the most of your university experience.`"
  />
  <Heading title="Home" subtitle="away from home" />
  <section class="pb-8 md:pb-20 px-4">
    <div class="container flex gap-8 flex-col sm:flex-row">
      <div class="flex-1">
        <img src="/images/accommodation.jpg" />
      </div>
      <div class="flex-1">
        <p>
          At {{ $app.name }}, we offer accommodation that is
          <strong>guaranteed*</strong>, <strong>secure</strong
          ><strong> and </strong><strong>easy</strong>:
        </p>
        <ul class="listitems mb-3">
          <li>
            To make things stress free for you, you are guaranteed a room in
            University or partnership accommodation if {{ $app.name }} is your
            Firm choice.
          </li>
          <li>
            Everybody should feel safe and secure in their living spaces. Our
            Residential Life Team are here to help you settle in and our porters
            will keep you safe round the clock.
          </li>
          <li>
            We want to make your transition to student accommodation easy. Our
            sites are conveniently located to ensure you get the best out of
            your university experience.
          </li>
        </ul>
        <p>
          Our click and collect service is handy for when you just want to eat
          some food on the run or are craving a takeout. For commuting students,
          we also offer overnight self-catered accommodation so you don&rsquo;t
          miss a course night out, or you can enjoy a weekend on site or in the
          city with friends. Please note that this is subject to availability.
        </p>
        <!-- <p>
          Staying in University accommodation during your studies is a great way
          to meet new people, make new friends and gain some independence with
          the reassurance that our Residence Life team are always onsite for
          help and support.
        </p>
        <p>
          Each {{ $app.name }} campus has a choice of accommodation on offer. A
          variety of self-catered accommodation is available at our campuses in
          Ayr and Paisley in the form of shared flats or studios. All offer a
          safe and friendly environment close to main campus buildings and near
          to local amenities within the Scotland.
        </p> -->
      </div>
    </div>
  </section>
  <section class="pb-12">
    <Heading title="Explore" subtitle="Accommodation" />
    <div
      class="max-lg:px-4 container grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3"
    >
      <nuxt-link :key="i" v-for="(n, i) in items" class="border-b grid">
        <img :src="n.img" class="aspect-video" />
        <div class="pt-3 pb-6">
          <div class="text-xl sm:text-2xl font-bold mb-2">
            {{ n.title }}
          </div>
          <div class="text-sm opacity-85">
            {{ n.desc }}
          </div>
          <div class="py-4 text-sm">
            <div class="flex items-center gap-3">
              <i class="fa-light fa-location-dot text-error text-lg" />
              <div class="flex-1 opacity-85">{{ $app.city }}</div>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-light fa-utensils text-error text-lg" />
              <div class="flex-1 opacity-85">Self-catered</div>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-light fa-buildings text-error text-lg" />
              <div class="flex-1 opacity-85">Undergraduate, Postgraduate</div>
            </div>
          </div>
          <div class="font-bold">{{ n.price }} per month</div>
        </div>
      </nuxt-link>
    </div>
  </section>
  <section class="pb-12">
    <Heading title="How to apply" subtitle="in four steps" />
    <content class="pt-0 sm:pt-0 md:pt-0">
      <h2 class="subheading pt-4">
        Read our guidance on how to apply for university accommodation.
      </h2>
      <div>
        <Expansion
          title="1. Register for the Accomodation Application Portal"
          :index="0"
          v-model="open"
        >
          <p>
            To start the application process, head to our
            <nuxt-link class="link-bold" to="/apply"
              >accommodation portal</nuxt-link
            >. To register, you will need your Student ID number, surname and
            date of birth. Your Student ID number is a seven digit number which
            normally starts with your first year of study. It can be found in
            the email you should receive, and is different to your UCAS ID. You
            will then be prompted to create a password. Once registered, you can
            start making your application by logging into the accommodation
            application portal using your Student ID and newly created password.
          </p>
        </Expansion>
        <Expansion
          title="2. Select Accommodation Preferences"
          :index="1"
          v-model="open"
        >
          When applying, you will be asked to select your preferred
          accommodation type, such as quiet accommodation, single sex
          accommodation or alcohol free accommodation. After this, you'll have
          to select your room preferences: for accommodation in {{ $app.city }},
          rank your preferred room type from one to eight. It is also a good
          idea to have a budget in mind and prioritise accordingly when making
          your selection.
        </Expansion>
        <Expansion title="3. Review Your APplication" :index="2" v-model="open">
          You’ll see a screen with all the information you’ve submitted, and
          don’t worry if there are any details you need to change, as you can
          edit your information at this stage before submitting. If you’re happy
          with everything you just need to tick the box to indicate you have
          understood the conditions and then confirm your application.
        </Expansion>
        <Expansion
          title="4. Agree to Terms and Pay Deposit"
          :index="3"
          v-model="open"
        >
          Once your application is received, we will contact you to confirm the
          accommodation you have been allocated, and provide you with the full
          terms and conditions of the accommodation offer you are made.
          Applicants will be asked to pay a deposit of <strong>£250</strong> to
          secure the room – this will later be returned as a deduction from your
          final term’s rent. Payments, terms and processes will be slightly
          different to those referred to partner accommodation, you will be
          contacted by ourselves and partners in the event of any referral.
        </Expansion>
      </div>
      <div class="grid gap-5">
        <h3 class="font-bold text-lg sm:text-2xl mt-4">Allocation Policy</h3>
        <p>
          Our aim at {{ $app.name }} is to help all first-year undergraduates
          find suitable accommodation either in University residences, our
          partnership accommodation, or in the private sector.
        </p>
        <p>
          Priority for University and partnership accommodation is given to all
          Firm choice applicants who live furthest afield, as well as applicants
          with specific needs.
        </p>
        <p>We expect this to be the same this year.</p>
        <ul class="listitems">
          <li>{{ $app.name }} as first choice of study.</li>
          <li>
            Geographical location of the students' home base; places are
            allocated to those who live the furthest from the University.
          </li>
          <li>
            Special needs or circumstances e.g. special medical conditions and
            care leavers.
          </li>
          <li>
            Late Application - Students who apply late, gain entry through an
            insurance choice or via Clearing are less likely to be offered their
            preferred choices of University accommodation.
          </li>
        </ul>
      </div>
    </content>
  </section>
</template>

<script setup lang="ts">
const title = "Accommodation";
const open = ref(null);
const items = [
  {
    title: "Student Roost Tramways",
    desc: `Tramways offers stylish and modern accommodation in a great location in the centre of ${$app.city}`,
    price: "From £259",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Tramways-University-of-Chester-Slide-6.jpg",
  },
  {
    title: "Tudor Place Collegiate AC",
    desc: `Tudor Place is a luxury residence, perfectly positioned for the university and the city centre.`,
    price: "£270 - £284",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Tudor-Place-Exterior.jpg",
  },
  {
    title: "Granary Studios Collegiate AC",
    desc: `Granary Studios is the perfect home for students in the city, in a fantastic location in the heart of ${$app.city}.`,
    price: "£284 - £294",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Granary-Studios-1.jpg",
  },
  {
    title: "Sumner House",
    desc: `Sumner House is a mix of full board and self-catered en-suite accommodation and is situated a short five minute walk away from University town.`,
    price: "£242 - £299.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/sumner-house/RS46145_Sumner20House20Sept202023-30-scr.jpg",
  },
  {
    title: "Grosvenor House",
    desc: `Located at the heart of University town, Grosvenor House offers self-catered accommodation for 202 residents. This comprises single occupancy studio flats and a communal area and laundette.`,
    price: "£267",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/RS19182_Chester20Buildings20Sept202020-56-scr.jpg",
  },
  {
    title: "Student Roost The Towpath",
    desc: `The Towpath offers a superb location right on the canal side.`,
    price: "From £279",
    img: "https://www.chester.ac.uk/media/website/content-assets/images/accommodation/The-Towpath-University-of-Chester-Slide-1.jpeg",
  },
  {
    title: "Powys Court",
    desc: `Powys Court is located in the heart of the city and houses 72 students split between 12 houses.`,
    price: "£223",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Powys-Court_Bedroom_RS21768_IMG_6144-lpr.jpg",
  },
  {
    title: "Hollybank Court",
    desc: `Hollybank Court is located opposite the entrance to University town.`,
    price: "£229.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Holly_B_Court_RS21754_IMG_6101-lpr.jpg",
  },
  {
    title: "Church College Close",
    desc: `Church College Close is made up of 14 self-contained houses within University town.`,
    price: "£210.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Church-College-Close_AB-Showroom-Marketing-Photos-F0207699-1.jpg",
  },
  {
    title: "Astbury House",
    desc: `Astbury House is full board accommodation set in the grounds of University town.`,
    price: "£294.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Astbury-House_IMGL_0034.jpg",
  },
  {
    title: "Fisher House",
    desc: `Fisher House is full board accommodation set in the grounds of University town.`,
    price: "£294.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/RS38223_IMGL0002-jpg.jpg",
  },
  {
    title: "John Douglas Court",
    desc: `John Douglas Court is a self-catered residence, located on the border of University town.`,
    price: "£210.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/JOhn-Douglas-2.jpg",
  },
  {
    title: "Gladstone House",
    price: "£294.50",
    desc: "Gladstone House is full board accommodation set in the grounds of University town",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Gladstone-House-room.jpg",
  },
  {
    title: "The Grange",
    desc: `The Grange is self-catered accommodation, a short walk from University town.`,
    price: "£215 - £229.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/chichester-street/IMGL_0068_0.jpg",
  },
  {
    title: "Gannochy House",
    price: "£215 - £229.50",
    desc: `Gannochy House accommodation offers self-catered residences close to the  University town.`,
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/chichester-street/IMGL_0072.jpg",
  },
  {
    title: "Cheyney Road",
    desc: `Accommodation at Cheyney Road consists of six terraced houses on the boundary of University town.`,
    price: "£210.50 - £215",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Cheyney_Road.jpg",
  },
  {
    title: "Bridge St Row",
    desc: `Bridge St Row is located in the centre of ${$app.city} and offers single standard study bedrooms.`,
    price: "£218 - £235",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/Web__1_0.jpg",
  },
  {
    title: `Angus House`,
    desc: `Angus House is self-catered en-suite accommodation, situated a short walk from University town.`,
    price: "£235",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/37-liverpool-2_1.jpg",
  },
  {
    title: "Hayes Park",
    desc: `An individual property for five students on the boundary of University town.`,
    price: "£210.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/RS40815_IMGL0471-lpr.jpg",
  },
  {
    title: "Arden Court",
    desc: `Arden House is a 10-minute walk away from University town with a mix of bedrooms.`,
    price: "£210.50 - £229.50",
    img: "https://www.chester.ac.uk/media/media/photography/photography/accommodation/DSC00676_0.JPG",
  },
];
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 12px;
}
</style>
