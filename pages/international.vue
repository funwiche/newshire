<template>
  <Title>{{ title }}</Title>

  <breadcrum :title="title" src="/sliders/banner5.webp" />
  <Subheading
    :title="title"
    :desc="`${$app.name} is a truly international university with origins dating back to 1897. Our degrees will provide you with a global outlook and prepare you for the best international opportunities available.`"
  />
  <section class="md content max-lg:px-4 md:pb-12 -mt-12">
    <h3>Information for international students</h3>
    <p>
      Every year at the University of the {{ $app.name }}, we welcome hundreds
      of international students into our vibrant and diverse academic community.
      We do everything we can to help them prepare for life at
      {{ $app.name }} as well as supporting them during their studies.
    </p>

    <h3>Hours of Operation</h3>
    <p>
      The Internationalization Office is open, and staff are available to meet
      with students in person or virtually by appointment to address questions
      and concerns. In addition, you can meet with an advisor during Webex
      drop-in hours , or by booking an appointment through Navigate.
    </p>

    <p>
      Regularly scheduled programming, including Discussion Group and Coffee
      Club are advertised through the listserv. If you wish to be added to the
      email listserv, please email
      <a :href="`mailto:${$app.email}`">{{ $app.email }}</a>
      .
    </p>

    <p>
      A reminder that all {{ $app.name }} students have 24/7 access to FREE
      mental health support with Keep.meSAFE. Download the 'My SSP' app or call
      {{ $app.phone }} to talk to a counsellor in your preferred language.
    </p>

    <p>
      As always, please feel free to connect with us at
      <a :href="`mailto:${$app.email}`">{{ $app.email }}</a>
      .
    </p>

    <h3>International Students coming to {{ $app.city }}</h3>
    <p>
      Thank you for choosing {{ $app.name }} of Newfoundland. Please check our
      <nuxt-link to="/immigrations"
        >International Students Arrivals section</nuxt-link
      >
      for help to guide you through some of the steps required to travel to the
      {{ $app.country }} and {{ $app.city }}.
    </p>

    <h3>Housing Information</h3>
    <p>
      For those looking for off-campus housing options, there is a new section
      on the
      <nuxt-link to="/student-life/accommodation">our website</nuxt-link> to
      assist with your search. When we receive housing listings, we will publish
      the information on our website.
    </p>

    <h3>Learning Abroad</h3>
    <p>
      Learning Abroad Programs - study abroad, exchange, visiting research
      placements - are set to resume in subsequent semesters. It is never too
      early to start planning. For more information, please select the program
      of interest:
    </p>

    <ul class="mb-4">
      <li>
        Outbound learning abroad programs - students from
        {{ $app.name }} going to international destinations
      </li>
      <li>
        Inbound exchange and visiting students - students from International
        Destinations coming to {{ $app.name }} for short term study or research
      </li>
    </ul>

    <p>
      For additional inquiries, or to get in touch with our team, please
      <nuxt-link to="/contact">contact us</nuxt-link>.
    </p>

    <h3>Events, Activities & Opportunities</h3>
    <p>
      Getting involved in campus life is an essential component of the
      university experience. And because there are so many things happening at
      the Internationalization Office, we thought the easiest way to showcase
      these activities is on our events page. Please check out our events
      calendar for activities, events, sessions, seminars, and much more
      regarding all of the supports and services provided by the
      Internationalization Office.
    </p>

    <h3>International Units at {{ $app.name }}</h3>
    <ul>
      <li>
        The English as a Second Language Unit provides English Courses and a
        bridging program from Grenfell Campus .
      </li>
      <li>
        The Office of Student Recruitment (Registrar's Office) completes a wide
        range of recruitment and outreach activities to Scottish and
        international prospective undergraduate students.
      </li>
      <li>
        The<nuxt-link to="/academics/postgraduate">
          School of Graduate Studies</nuxt-link
        >
        administers all master's and doctoral programs at
        {{ $app.name }} and facilitates international research collaboration,
        joint programs, joint supervision and short-term visits.
      </li>
      <li>
        Go Abroad is a pan-university collaboration to encourage students to
        participate in Learning Abroad experiences.
      </li>
    </ul>

    <h3>About the Internationalization Office</h3>
    <p>
      {{ $app.name }} is committed to internationalization, international
      co-operation, studentmobility and cultural sensitivity. We welcome
      international visitors and we strive to collaborate with educational
      institutions, businesses, governments, foundations, benefactors and alumni
      around the world in order to enrich research and teaching, and to ensure
      we offer outstanding programs for faculty and students.
    </p>
  </section>
</template>

<script setup lang="ts">
const title = "Internationalization";
</script>

<style lang="scss" scoped></style>
