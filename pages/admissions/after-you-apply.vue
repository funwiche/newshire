<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/after-you-apply.jpg"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <Subheading
    title="What happens next"
    desc="Within 24 working hours of submitting your application, you will receive written confirmation that it has been received. Our admissions team aim to process all applications as quickly as possible, and will update you as soon as a decision has been made or if any additional information is required. "
  />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <h2>Accepting Your Offer</h2>
    <p>
      If your application is successful, you will receive an offer letter which
      outlines the conditions of your acceptance. In order to officially confirm
      your place, you must submit the remaining documentation before you can
      apply for your CAS letter.
    </p>
    <h3>Unconditional Offers</h3>
    <p>
      If your UCAS offer is unconditional, all you need to do is pay the deposit
      amount stated on your offer letter to secure your place.
    </p>
    <h3>Conditional Offers</h3>
    <p>
      If your offer is conditional, you will need to satisfy all remaining
      conditions before receiving your CAS. If you applied via UCAS, please
      email all outstanding documents to
      <a :href="`mailto:applyinternational@${$app.host}`"
        >applyinternational@{{ $app.host }}</a
      >. If you applied via the University’s AIMS application portal, please
      upload all outstanding documents to your AIMS portal.
    </p>

    <h3>Conditions can include:</h3>
    <ul>
      <li>
        <strong>Deposit:</strong>
        In order to secure your place on the programme and issue you with a CAS,
        the University must receive payment from you. Details on how to pay were
        included in the email with your offer letter.
      </li>
      <li>
        <strong>English Language:</strong>
        We require a certified English language test (IELTS, Trinity) with the
        appropriate scores, passing a {{ $app.name }} English Language Test
        (UoCELT) or in some instances, country-specific English language exams
        can be accepted.
      </li>
      <li>
        <strong>Reference:</strong>

        All references, academic or employer, need to be submitted on
        institutional letterhead to be valid.
      </li>
      <li>
        <strong>Statement of Purpose:</strong>

        Your statement of purpose must be at least 500 words (MBA 750) and
        explain your reasons for joining the course. This can include why you
        are applying, why you have chosen the programme, and how it is related
        to your future career ambitions.
      </li>
      <li>
        <strong>Final Certificate:</strong>

        If you are still in the process of finishing your current studies, we
        need to receive your final transcripts and certificates. When you
        receive these documents, please forward copies to us.
      </li>
      <li>
        <strong>Passport:</strong>
        A copy of the picture and data page of your passport.
      </li>
    </ul>
    <p>
      If you do not require a Tier 4 (general) student visa to study in the UK,
      once you have met all the conditions stated on your offer letter we will
      issue you with an unconditional offer. One-two month prior to your course
      commencing you will receive information on how to enrol.
    </p>
  </content>
</template>

<script setup lang="ts">
const title = "After you apply";
</script>

<style scoped></style>
