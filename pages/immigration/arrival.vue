<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/arrivals.jpg"
    :items="[{ title: 'Visas and immigration', path: '/immigration' }]"
  />
  <content>
    <section>
      <h3 class="font-bold text-lg sm:text-2xl">Airport Transfer</h3>
      <p>
        Students have a number of options when traveling from the airport to
        their UK accommodation. Please note that students
        <strong>must</strong> book their own transport from the airport.
      </p>
      <ol>
        <li>
          Taxi or Uber - If arriving into Edinburg or Glasgow Airport, the most
          convenient option is to book an Uber or taxi. When booking a taxi, it
          is best to book in advance for the cheapest rates. We would recommend
          booking with
          <a
            class="link-bold"
            href="https://www.kingkabs.co.uk/online-taxi-bookings/"
            target="_blank"
            rel="noopener"
            >KingKabs</a
          >. This option is not recommended for travel from other airports.
        </li>
        <li>
          Train - To travel by train, you can explore route options and book
          your train ticket directly from the respective train operator without
          any extra charges, or from third parties such as
          <a
            class="link-bold"
            href="https://www.thetrainline.com/"
            target="_blank"
            rel="noopener"
            >Trainline</a
          >
          or
          <a
            class="link-bold"
            href="https://www.mytrainpal.com/"
            target="_blank"
            rel="noopener"
            >TrainPal</a
          >, where a booking fee may sometimes be added to the cost of your
          tickets. Recommended for travel from London and other UK airports.
        </li>
        <li>
          Coach - You can get more information on routes and costs, as well as
          book your ticket via
          <strong
            ><a
              class="link-bold"
              href="https://www.nationalexpress.com/en"
              target="_blank"
              rel="noopener"
              >nationalexpress.com</a
            ></strong
          >. Recommended for travel from London and other UK airports.
        </li>
      </ol>
      <h3 class="font-bold text-lg sm:text-2xl mt-4">
        Temporary Accommodation
      </h3>
      <p>
        If you are unable to book permanent accommodation before you travel, you
        must ensure you secure temporary accommodation prior to leaving your
        home country. The University does not have temporary accommodation
        available. You can find a list of available hotels, B&amp;B&rsquo;s and
        budget accommodations available at:
        <a
          class="link-bold"
          href="https://www.visitcheshire.com/accommodation"
          target="_blank"
          rel="noopener"
          >visitcheshire.com/accommodation</a
        >.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Arrival";
</script>

<style scoped></style>
