<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/working-in-the-uk.jpg"
    :items="[{ title: 'Visas and immigration', path: '/immigration' }]"
  />
  <content>
    <section>
      <h2>Working in the UK</h2>
      <p>Information on working in the UK on a student visa.</p>
      <p>
        Your digital visa&nbsp;or biometric card should indicate the hours you
        are allowed to work.
      </p>
      <p>
        If you are enrolled on a full-time course that lasts for at least six
        months, and you have a Student visa,&nbsp;you are generally permitted to
        work up to twenty hours during term time, full-time during vacations.
      </p>
      <p>
        You may also be able to work full-time after your official course end
        date (as stated on your CAS) if you have fully completed your programme
        by that point.
      </p>
      <p>
        <a class="link-bold" href="#careers-and-employability"
          >Careers and Employability</a
        >
        may be able to help you to find part-time or voluntary work, and can
        assist you to use these experiences in developing your employability
        skills.
      </p>
      <p>
        Further information about working during your studies can be obtained
        from the&nbsp;<a
          class="link-bold"
          href="https://www.ukcisa.org.uk/Information--Advice/Working/How-many-hours-can-you-work"
          >UKCISA website</a
        >.
      </p>
    </section>
    <section>
      <h2>Working after your studies</h2>
      <p>
        In 2021, the UK Government launched the Graduate Immigration Route for
        international students. Those who have completed a degree at
        undergraduate level or above at a Higher Education Provider and have a
        valid student visa at time of application may be eligible.
      </p>
      <p>
        This visa&nbsp;allows successful applicants to stay and work, or look
        for work, in the UK at any skill level for a maximum period of two years
        after graduation. Further information is available on our&nbsp;graduate
        visa route.
      </p>
      <p>
        Another option to stay and work in the UK after studies is the Skilled
        Worker visa. This is a worker visa where an employer sponsors the
        individuals visa.&nbsp;Graduates can either switch straight from the
        Student visa to the Skilled Worker visa, or they may wish to go&nbsp;to
        the Graduate Visa first, and then after a time from the Graduate visa to
        the Skilled Worker visa once they find an employer to sponsor
        them.&nbsp;See the UKVI's&nbsp;<a
          class="link-bold"
          href="https://www.gov.uk/skilled-worker-visa"
          >Skilled Worker visa website</a
        >&nbsp;for more information
      </p>
      <p>
        It is only possible to have one graduate visa in your lifetime. And it
        is not possible to switch from a Skilled Worker visa to a graduate visa.
        So please consider your plans carefully, and discuss with an independent
        immigration adviser for further guidance.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Working in the UK";
</script>

<style scoped></style>
