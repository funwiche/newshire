<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/enrolment.jpg"
    :items="[{ title: 'Visas and immigration', path: '/immigration' }]"
  />
  <content>
    <section>
      <p>
        <span
          >Enrolment is a process by which you officially become a student at
          {{ $app.name }}.
        </span>
      </p>
      <p>
        <span>All your enrolment information will be emailed to you from </span
        ><a class="link-bold" :href="`mailto:applyinternational@${$app.host}`"
          ><span>applyinternational@{{ $app.host }}</span></a
        ><span> once your CAS has been issued or </span
        ><strong><span>when</span></strong
        ><span> your unconditional offer has been issued </span
        ><em
          ><span
            >(if you do not require a student visa to study in the UK).</span
          ></em
        >
      </p>
      <p>
        <span
          >Our welcome page holds important links that will direct you to
          pre-arrival activities, including online enrolment, what you need to
          do before travelling to the UK, preparation for study, and what you
          need to do upon your arrival.</span
        >
      </p>
      <p>
        <span
          >The full enrolment process needs to be completed before your course
          start date. If you are unable to do this, you must keep in contact
          with the International Centre who will be able to advise you on any
          options available to you.  Completing your enrolment is a requirement
          of your Student Visa</span
        >
      </p>
      <p>
        <span
          >Failure to complete the full enrolment process will result in your
          student status and student visa being withdrawn. </span
        >
      </p>
      <p>
        <span
          >Enrolment consists of 3 steps. All steps must be completed for your
          enrolment to be confirmed:</span
        >
      </p>
      <p></p>
    </section>
    <section>
      <h2>Step 1: Online enrolment and submitting your photo</h2>
      <p>
        Instructions on how to complete your online enrolment will have been
        sent to your personal email address. This step needs to be completed
        before you arrive in the UK.
      </p>
    </section>
    <section>
      <h2>Step 2: Pay your fees</h2>
      <p>
        To enrol onto your programme of study, you must have paid at least
        £8,000 by the course start date and before you travel to the UK. The
        payment of fees can be done the same way you made your initial deposit
        and must be transferred directly to the University account.
      </p>
    </section>
    <section>
      <h2>Step 3: Submitting your Immigration Documents</h2>
      <p>
        <span
          >Once you have travelled to the UK you will need to submit the
          following documents to the Visa Compliance Team:</span
        >
      </p>
      <ul>
        <li><span>Passport</span></li>
        <li><span>BRP card (we need to see both the back and front)</span></li>
        <li>
          <span
            >Confirmation of your UK address, UK contact number and email
            address</span
          >
        </li>
      </ul>
      <p>
        <span
          >These documents must be presented in person to the Visa Compliance
          team at an International Enrolment Event. You will only need to attend
          one of these events to complete your enrolment.</span
        >
      </p>
      <p>
        <span
          >Details on collecting your BRP card from the Visa Compliance Team at
          one of our International Enrolment Events, or from the Post Office
          listed on your BRP collection letter, can be found below.</span
        >
      </p>
    </section>
    <section>
      <h2>
        EU, Iceland, Liechtenstein, Norway or Switzerland Passport Holders
      </h2>
      <p>
        If you have applied for your Student visa using the &ldquo;UK
        Immigration: ID Check" app you will not be issued with an entry vignette
        and a BRP card. Your immigration status will be sent to you via email.
        To enrol you will need to provide the Visa Compliance Team with the
        following:&nbsp;
      </p>
      <ul>
        <li>Passport</li>
        <li>
          Original Email from gov.uk which confirms your application for Entry
          Clearance as a Student has been successful
        </li>
        <li>
          A share code will allow us to verify your
          <a
            class="lino-bold"
            href="https://www.gov.uk/view-prove-immigration-status"
            >immigration status</a
          >.
        </li>
        <li>Your UK address, UK contact number, and email address.&nbsp;</li>
      </ul>
      <p>
        These documents must be presented in person at one of our International
        Enrolment Events in Seaborne Library (Parkgate Road, CH1 4BJ).&nbsp;
      </p>
    </section>
    <section>
      <h2>
        Collect your Biometric Residence Permit (BRP) – Student Visa holders
        only
      </h2>
      <p>
        <span
          >The location of your BRP card collection will be stated on your visa
          confirmation letter emailed to you by the Home Office when your
          passport is returned to you.</span
        >
      </p>
      <p>
        If your BRP has been delivered to {{ $app.name }}, you can collect it
        from the Visa Compliance team during one of our International Enrolment
        Events. Please note that, if your BRP is delivered to the
        {{ $app.name }}, you do not need to worry about collecting it within 10
        days of arrival; please attend one of our enrolment events to collect
        your BRP and complete your enrolment.
      </p>
      <p>
        <span
          >If you have any questions about the fees you need to pay before you
          can complete your enrolment, please contact </span
        ><a class="link-bold" :href="`mailto:fees@${$app.host}`"
          ><span>fees@{{ $app.host }}</span></a
        >
      </p>
      <p>
        <span
          >If you have any questions about completing your enrolment once you
          arrive in the UK, contact </span
        ><a class="link-bold" :href="`mailto:StudyVisa@${$app.host}`"
          ><span>StudyVisa@{{ $app.host }}</span></a
        >.
      </p>
      <p>
        <span
          >Please note, if your BRP card has been delivered to a Post Office,
          you will need to first collect this from the Post Office within 10
          days of your arrival in the UK, then bring this card to one of our
          International Enrolment Events at the Library.</span
        >
      </p>
      <p>
        <span
          >When collecting your BRP you will need to bring your passport and
          visa confirmation letter with you.</span
        >
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Enrolment";
</script>

<style scoped></style>
