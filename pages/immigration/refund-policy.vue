<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/refund-policy.jpeg"
    :items="[{ title: 'Visas and immigration', path: '/immigration' }]"
  />
  <content>
    <section>
      <p>
        {{ $app.name }} (occasionally referred to as “the university”) makes
        every effort to ensure that the information provided to applicants about
        courses of study at {{ $app.name }} is complete and correct. However,
        the University reserves the right, at its discretion, and for any reason
        deemed fitting or necessary, to make changes or cancellations, without
        notice, for the courses mentioned herein. The {{ $app.name }} cannot
        accept liability for loss resulting from such changes or cancellations.
      </p>
      <p>
        A place is offered to you subject to the University Student Enrolment
        Conditions, which will be incorporated by reference in all contracts
        between the University and its students, for a course of study or
        programme of research. These terms and conditions contain obligations
        binding upon you and the University and which restrict the University’s
        liability. Students who have already enrolled should reference the
        University's withdrawal policy for refund guidance.
      </p>
    </section>
    <section>
      <h2>International Deposit</h2>
      <p>
        Applicants who are subject to the overseas fee status and are applying
        for a full-time on-campus course are required to pay a tuition fee
        deposit to enrol at {{ $app.name }}. Applicants who require a
        Studentvisa must pay this deposit before the Confirmation of Acceptance
        of Studies (CAS) is released. Alternatively, students receiving UKVI
        recognised sponsorship or governmental loans can use confirmation in
        lieu of a deposit payment.
      </p>
      <p>Refund exclusions</p>
      <p>
        <span>Deposit payments will </span><strong><span>NOT</span></strong
        ><span> be refunded in the following circumstances.</span>
      </p>
      <ol class="listitems">
        <li>
          <span
            >When the Student visa application has been successful, and the
            university is satisfied that the applicant travelled to the UK,
            including claims for asylum.</span
          >
        </li>
        <li>
          Where fraudulent documentation or fraudulent activity forms any part
          of the application, CAS request or visa application, regardless of
          whether the applicant directly contributed or not. This includes
          fraudulent English or academic documents, or falsified bank
          statements.
        </li>
        <li>
          Where an applicant submits different financial documents to Home
          Office than those checked and approved by {{ $app.name }}.
        </li>
        <li>
          Where the Student visa application is refused due to breaching the
          conditions of previously granted UK visas.
        </li>
        <li>
          Where the Student visa application is unsuccessful due to a previous
          UK visa refusal.
        </li>
        <li>
          <span
            >Where the Student visa is refused due to the applicant being
            subject to a UK re-entry ban.</span
          >
        </li>
        <li>
          Where the Student visa application is refused due to a failure to
          disclose a previous criminal conviction or failure to disclose any
          other information which has led to visa refusal.
        </li>
        <li>
          <span
            >Where a Student visa is granted but an applicant is refused entry
            upon arrival in the UK (e.g., where English Language proficiency or
            Genuine Intention to Study is reassessed at the UK border).</span
          >
        </li>
        <li>
          <span
            >Where an applicant is issued a CAS by the university, but the
            applicant fails to complete enrolment tasks or communicate with the
            university within the expected deadlines.</span
          >
        </li>
        <li>
          When an applicant&rsquo;s CAS is withdrawn due to failure to meet the
          Academic Engagement policy.
        </li>
      </ol>
      <p>
        If any of the above circumstances apply, a refund will not be granted,
        and {{ $app.name }} will retain the full tuition fee deposit.
      </p>
    </section>
    <section>
      <h2>Refund Eligibility</h2>
      <p>
        <span
          >Any refund made will be at the sole discretion of {{ $app.name }} and
          may be subject to a &pound;250 non-refundable tuition fee deposit. The
          university will consider all requests for a refund of deposit payments
          on an individual basis. Refunds can only be issued to your original
          payment method.</span
        ><span data-ccp-props='{"201341983":0,"335559739":160,"335559740":259}'
          >&nbsp;</span
        >
      </p>
      <p>
        <span
          >Deposit payment refunds will only be issued in the following
          instances:</span
        >
      </p>
      <ol class="listitems">
        <li>
          <span
            >Where an applicant requests to withdraw from university admission
            before being issued with a CAS, </span
          ><strong><span>or;</span></strong>
        </li>
        <li>
          <span
            >Where an applicant requests to withdraw from university admission
            before submitting their Student visa application to the UKVI, </span
          ><strong><span>or;</span></strong>
        </li>
        <li>
          <span
            >Where an applicant has applied for a Student visa which has been
            granted and</span
          >
          <span
            >The university is satisfied that the applicant has not travelled to
            the UK, </span
          ><strong><span>or;</span></strong>
        </li>
        <li>
          <span
            >Where an applicant has applied for a Student visa which has
            subsequently been refused by the Home Office, </span
          ><strong><span>and;</span></strong>
        </li>
        <li>
          <span
            >The applicant has promptly provided the University with copies of
            documents received from the Home Office </span
          ><strong><span>and;</span></strong>
        </li>
        <li>
          <span
            >The applicant can demonstrate, to the satisfaction of the
            university, that they have not contributed in any way to the
            refusal</span
          ><strong><span>, and;</span></strong>
        </li>
        <li>
          <span
            >The applicant has followed instructions from the university in
            relation to the visa application.</span
          >
        </li>
      </ol>
      <p>
        <span
          >If in the reasonable opinion of the university the student has not
          fulfilled the refund criteria the deposit will not be
          refundable.</span
        >
      </p>
    </section>
    <section>
      <h2>FAQs</h2>
      <p>
        These points are covered in the above refund policy but are highlighted
        here for emphasis.
      </p>
      <ul class="listitems">
        <li>
          Offer holders are eligible for a full tuition fee deposit refund at
          any point of the admissions process if they have not received a CAS
          from the university.
        </li>
        <li>
          Students who receive a visa refusal must promptly provide a copy of
          their refusal letter to
          <a class="link-bold" :href="`mailto:applyinternational@${$app.host}`"
            >applyinternational@{{ $app.host }}</a
          >
          or their deposit will not be refunded.
        </li>
        <li>
          Students who are granted a student visa and who travel to the UK will
          <strong>not</strong> be eligible for a deposit refund.
        </li>
        <li>
          Where a student is unable to physically travel to the UK for reasons
          outside their control, for example due to travelling restrictions,
          they must communicate this to the university promptly. They should
          submit evidence of the situation and provide proof that they are not
          currently in the UK as part of their refund request.
        </li>
      </ul>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Refund Policy";
</script>

<style scoped></style>
