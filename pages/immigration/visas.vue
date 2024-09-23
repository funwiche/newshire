<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/visas.jpg"
    :items="[{ title: 'Visas and immigration', path: '/immigration' }]"
  />
  <content>
    <section>
      <p>In this section:</p>
      <ul>
        <li>
          <a class="link-bold" href="#applying">Applying for Your Visa</a>
        </li>
        <li>
          <a class="link-bold" href="#current">
            Current Students: Extending your Leave to Remain
          </a>
        </li>
        <li>
          <a class="link-bold" href="#regulations">Visa Regulations</a>
        </li>
        <li>
          <a class="link-bold" href="#outcomes">Visa Outcome</a>
        </li>
        <li>
          <a class="link-bold" href="#delays">Visa Delays</a>
        </li>
        <li>
          <a class="link-bold" href="#graduate">Graduate Route Visa</a>
        </li>
        <li>
          <a class="link-bold" href="#other-information">Other Information</a>
        </li>
      </ul>
    </section>
    <section id="applying">
      <h2>Applying for your Visa</h2>
      <p>
        Once you have obtained your CAS from the {{ $app.name }} you will be
        able to make your student visa application. You should make your visa
        application as early as possible. If making your visa application from
        overseas you must ensure that you allow enough time to apply, receive
        your visa and book travel to the UK by the start date stated on your CAS
        statement. If you are making your visa application from within the UK,
        you must submit your visa application to change your sponsorship over
        the {{ $app.name }}, before the start date of your course.
      </p>
      <p>
        Students applying for a student visa to enter the UK will be assessed
        under a Points Based System, and must apply for a student visa. When
        applying for a visa you must show that:
      </p>
      <ul>
        <li>
          You have evidence of sufficient funds to pass a maintenance test
          (currently £9,207 + unpaid tuition fees) and evidence that these funds
          have been held for at least 28 continuous days.
        </li>
        <li>
          You have your original education and English Language supporting
          documents (i.e. certificates and transcripts) used in order to obtain
          an offer, as stated on your CAS letter.
        </li>
        <li>You have been issued a CAS from the {{ $app.name }}.</li>
      </ul>
      <p>
        Before making your visa application you need to ensure that you have the
        correct documents and are fully prepared for the visa application
        process. The steps below provide information on what you need to check
        and prepare before and during the student visa application process:
      </p>
      <p>
        <a class="link-bold" href="/docs/FAQ-Student-Visa.pdf" target="_blank"
          >FAQ Student Visa</a
        >
      </p>
      <p>
        <a
          class="link-bold"
          href="/docs/How-to-apply-for-your-UK-Student-Visa.pdf"
          target="_blank"
          >How to apply for your UK Student Visa</a
        >
      </p>
    </section>
    <section id="current">
      <h2>Current Students: Extending your Leave to Remain</h2>
      <p>
        If you are a current {{ $app.name }} student and you wish to extend your
        current student visa this can be done under certain circumstances.
      </p>
      <p>
        To apply for an extension of your current student visa you will first
        need to complete a Satisfactory Payment and Progression Form. If your
        visa extension is approved, you will need to read the CAS policy for
        continuing students and complete the CAS request form document along
        with the other supporting documents outlined in the How to Apply - CAS
        Process section.
      </p>
    </section>
    <section id="regulations">
      <h2>Visa Regulations</h2>
      <h4>Information about studying and working in the UK</h4>
      <p>
        You must make sure that you do not breach the conditions of your student
        visa immigration status.
      </p>
      <p>
        The University has published a Protect Your Visa guide for further
        information.
      </p>
      <h4>Remember you must:</h4>
      <ul>
        <li>Report to the University within 10 days of arrival in the UK.</li>
        <li>
          Make sure you do not work more hours than you are allowed to. Please
          see the
          <a
            href="https://www.ukcisa.org.uk/Information--Advice/Working/Student-work"
            class="link-bold"
            >UKCISA</a
          >
          website for further details.
        </li>
        <li>
          Attend and check in for all your classes and lectures. You must not
          have any unauthorized absences.
        </li>
        <li>
          Inform the University and International Centre if your contact details
          change (e.g. your email address, phone number or home address).
        </li>
        <li>
          You may need to inform the UKVI or Home Office of relevant changes;
          this can be done with the
          <a
            href="https://www.gov.uk/government/publications/notification-of-change-of-circumstances-form-mcc"
            class="link-bold"
            >Notification of Change of Circumstances: Form MCC</a
          >
        </li>
        <li>Be aware that you are not allowed to access public funds.</li>
        <li>
          Make sure you inform the International Centre if your immigration
          status changes.
        </li>
        <li>
          Make sure you renew your visa if it is expiring and you are staying in
          the UK.
        </li>
        <li>
          Make sure you inform the International Centre if you decide to
          withdraw or suspend your studies.
        </li>
      </ul>
    </section>
    <section id="outcomes">
      <h2>Visa Outcome</h2>
      <p>
        <strong>What to do when you receive your visa decision.</strong>
      </p>
      <p>
        Once you have submitted your student visa application you will be
        expected to keep the {{ $app.name }} updated with the outcome of your
        visa application. This can be done by updating your Visa Status on CAS
        Sheild.
      </p>
      <p>
        The next steps you need to take will depend on the outcome of your visa
        application:
      </p>
      <p>
        <strong>1. Your student visa application is successful.</strong>
      </p>
      <p>
        If your visa application is successful, you will need to update your
        Visa Status on CAS Shield and upload a copy of your decision letter and
        vignette (sticker) in your passport directly to CAS Shield.  Once your
        travel plans have been confirmed, please update your Arrival Status on
        CAS Shield, and upload a copy of your travel itinerary.
      </p>
      <p>
        The Home Office have introduced a new process for some students who
        apply for student visas from outside the UK and who are coming to study
        for more than 6 months. If you are part of this new process you will be
        issued with a vignette (sticker) which will be secured in your passport;
        this temporary visa will be valid for 90 days.
        <strong
          >You must arrive in the UK before your temporary 90 day visa expires.
          Failure to do so will mean you will not be able to enter the UK and
          you will be required to obtain a new CAS and make a new visa
          application.</strong
        >
      </p>
      <p>Do read our Protect Your Visa guide for further information.</p>
      <p>
        Upon arriving in the UK, students must collect their BRP card, which
        will cover the full length of your course. You will need to collect your
        BRP card from the allocated location outlined in the decision letter you
        received with your passport and temporary visa.
        <strong
          >Failure to collect your BRP card within this time will result in your
          sponsorship being withdrawn and you having to leave the UK.</strong
        >
      </p>
      <p>
        You will need your BRP card along with your passport to enrol at the
        {{ $app.name }}. For more information on the enrolment process please
        visit our enrolment page.
      </p>
      <p><strong>2. Your student visa application is refused.</strong></p>
      <p>
        If you receive a visa refusal, please update your Visa Status on CAS
        Shield immediately and upload a copy of your full visa refusal letter
        directly to CAS Shield. Upon receipt of the visa refusal letter, the
        {{ $app.name }} will review the reasons for refusal and confirm if we
        believe there are grounds for an Administrative Review (AR). If we do
        not believe an AR should be submitted, we will inform you if the
        University is able to issue you with another CAS and if so, what
        documents need to be submitted for this to take place.
      </p>
      <p>
        Please read the University
        <nuxt-link class="link-bold" to="/immigration/refund-policy"
          >Refund policy</nuxt-link
        >
        for further information.
      </p>
    </section>
    <section id="delays">
      <h2>Visa Delays</h2>
      <p>
        If you are experiencing delays obtaining your student visa and you are
        concerned you are going to miss your course start date, or your course
        has already started, please contact the International Centre as soon as
        possible on
        <a class="link-bold" :href="`mailto:applyinternational@${$app.host}`"
          >applyinternational@{{ $app.host }}</a
        >. We will advise if any further extensions can be provided and if
        necessary provide you with supporting documents to confirm this.
      </p>
    </section>
    <section id="graduate">
      <h2>Graduate Route Visa</h2>
      <p><strong>Remaining in the UK after your studies</strong></p>
      <p>
        <span data-contrast="auto"
          >The Graduate Route Visa allows {{ $app.name }} Bachelor's and
          Master's graduates to remain in the UK and work for up to two years
          after completing their studies. PhD graduates can stay for up to three
          years. The current application fee for the Graduate Route Visa is
          &pound;822.</span
        ><span
          data-ccp-props='{"201341983":0,"335559685":720,"335559739":160,"335559740":259}'
          >&nbsp;</span
        >
      </p>
      <p>
        <span data-contrast="auto"
          >More information on the Graduate Route Visa can be found on the UK
          Government </span
        ><a class="link-bold" href="https://www.gov.uk/graduate-visa"
          ><strong><span data-contrast="none">guidance page</span></strong
          ><span data-contrast="none">.</span></a
        >
      </p>
      <h3 class="font-bold text-lg sm:text-2xl">Who is eligible?</h3>
      <ul>
        <li>
          Students who have a valid Student visa or&nbsp;Tier 4 visa at the
          point their results go to an awards board, i.e. the date they are
          officially awarded their degree.
        </li>
        <li>
          Students who have successfully completed their full degree.
          Certificates, diplomas and other non-degree qualifications may not
          qualify (except for the PGCE which is a qualification specific to
          teacher training in the UK).
        </li>
        <li>Those who spent enough time studying inside the UK.</li>
        <li>Those who have never had a graduate route visa before.</li>
      </ul>
      <p>
        To be eligible for the Graduate visa, your student visa must still be
        valid at the date your degree is awarded. Awards boards only take
        place&nbsp;a few times per&nbsp;year, and happen usually around two
        months&nbsp;after your final submission/assessment/exam. If your course
        end date is delayed due to a deferral, a re-submission, or a resit exam,
        you may not go to an awards board until after your student visa expires,
        and so would not be eligible for the graduate visa. Please note, it is
        not possible to extend your student visa for the purposes of waiting for
        results, or due to deferrals or re-submissions. The only way to ensure
        eligibility for the Graduate route is to successfully complete your
        studies on time.
      </p>
      <p>
        An eligible students must also have studied in the UK for a minimum
        period of the course for which they received their current student visa,
        as detailed in this table;
      </p>
      <ul>
        <li><b>12 months or less:</b> Full duration of course</li>
        <li><b>Longer than 12 months:</b> At least 12 months</li>
      </ul>
      <h3 class="font-bold text-lg sm:text-2xl">When can I apply?</h3>
      <p>
        You can submit your Graduate visa application to the UKVI after the
        {{ $app.name }} has confirmed your degree at an awards board and has
        informed the UKVI of your succesful award. We will email you to confirm
        that we have made the report to UKVI and that you are now able to apply
        to the Graduate route. The email will come from<a
          :href="`mailto:studyvisa@${$app.host}`"
          >studyvisa@{{ $app.host }}</a
        >to your {{ $app.name }} email account.
      </p>
      <p>
        The deadline for submitting a graduate visa application is midnight on
        the last day of your student visa.
      </p>
      <h3 class="font-bold text-lg sm:text-2xl">
        Do I need to be in the UK to apply?
      </h3>
      <p>Yes, applications must be submitted from inside the UK.</p>
      <h3 class="font-bold text-lg sm:text-2xl">
        What can I do with the graduate visa?
      </h3>
      <p>
        The graduate visa is valid for any kind of work, including self-employed
        work. The only exception seems to be working as a professional
        sportsperson or coach, which is not permitted.
      </p>
      <p>
        The graduate visa is not valid for the sort of study that you can do on
        a student visa. However, it is valid for non-degree level study such as
        evening courses or vocational courses.
      </p>
      <p>
        <em
          >Further information on the graduate route can be found
          here:&nbsp;</em
        ><a
          href="https://www.gov.uk/graduate-visa"
          target="_blank"
          rel="noopener"
          class="link-bold"
          >www.gov.uk/graduate-visa</a
        >
      </p>
      <p>
        <em>Please note that a UK government rule (</em
        ><a
          class="link-bold"
          href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/997895/Student_Sponsor_Guidance_-_Doc_2_-_Sponsorship_Duties_2021-07_FINAL.pdf"
          target="_blank"
          rel="noopener"
          ><em>sponsor guidance document 2 paragraph 7.9</em></a
        ><em
          >) means that {{ $app.name }} staff are unable to advise students on
          their graduate visa applications</em
        >
      </p>
    </section>
    <section id="other-information">
      <h2>Other Information</h2>
      <div>
        <Expansion title="1. Check your CAS." :index="0" v-model="open">
          As soon as you receive your CAS, you must check it to ensure that all
          the information included is correct. If there are any mistakes on your
          CAS, you must contact the {{ $app.name }} International Centre
          immediately. Only once these mistakes have been corrected, can you
          proceed with making your visa application. Failure to inform us of any
          mistakes stated on your CAS may result in your visa application being
          refused.
        </Expansion>
        <Expansion
          title="2. Academic and English Language documents"
          :index="1"
          v-model="open"
        >
          In the evidence to obtain section of your CAS statement, we will
          outline the documents we have used to obtain your admission to the
          University. Any academic transcripts, certificates and English
          Language documents outlined in this section of your CAS must be
          included with your visa application. The documents you submit with
          your visa application <strong> must be originals</strong>. The use of
          photocopies, scanned documents, or print-outs from a website will
          result in a visa refusal.</Expansion
        >
        <Expansion title="3. Financial Documents" :index="2" v-model="open">
          To obtain your CAS, you provided us with financial documents to prove
          that you have sufficient money to obtain a student visa. The same
          documents must be submitted with your visa application. Again, please
          ensure that the documents you submit are <strong>originals</strong> ,
          as the use of photocopies, scanned documents, or print-outs from a
          website will result in a visa refusal. <br />
          <br />
          In addition, when submitting financial documents please ensure that
          the documents are dated within one month of the visa application date.
          <br />
          <br />

          If you are a “low risk” national as stipulated by the UKVI, you will
          not be required to submit evidence of financials with your visa
          application. However, these documents can be requested by the UKVI at
          any point during the visa application process. We therefore advise you
          to prepare these documents in case they are requested at a later date.
        </Expansion>
        <Expansion
          title="4. Tuberculosis (TB) Screening"
          :index="3"
          v-model="open"
        >
          The UKVI have introduced compulsory tuberculosis testing for some
          students. The list of countries where a TB screening certificate must
          be presented with a visa application has recently expanded. For a full
          list of countries please visit&nbsp;<a
            href="https://www.gov.uk/tb-test-visa/countries-where-you-need-a-tb-test-to-enter-the-uk"
            class="link-bold"
            >this UK Government page. </a
          >&nbsp;The screening certificate must be issued by a medical
          practitioner from a medical clinic on the UKVI list. There is a cost
          for this screening and it is your responsibility to meet this cost.
          The certificate you provide with your visa application must be valid
          on the date you submit your visa application.</Expansion
        >
        <Expansion title="5. ATAS Certificate" :index="4" v-model="open">
          If an ATAS certificate is required for your course you must ensure
          that you submit the original certificate with your visa application.
          If you require an ATAS certificate this will be stated on both your
          offer letter and your CAS statement.</Expansion
        >
        <Expansion
          title="6. Immigration Health Surcharge"
          :index="5"
          v-model="open"
          >Students now coming to study a course 6 months or longer will need to
          pay an Immigration Health Surcharge (IHS) at the time of application.
          Paying the IHS will enable you to access NHS services whilst in the
          UK. The details of how much the IHS payment is can be found in the
          Immigration Health Surcharge 2024 FAQS
        </Expansion>
        <Expansion title="7. Credibility Interviews" :index="6" v-model="open">
          The UK Home Office often interviews students in order to determine if
          your desire to study in the UK is genuine. The interview selection is
          random and does not mean something is wrong with your application, but
          it is something you should be prepared for. Students may be expected
          to attend two credibility interviews with the UKVI before a decision
          on your student visa application will be made. We have produced the
          following Credibility Interviews Guide to give you an idea of topics
          you should consider.</Expansion
        >
        <Expansion
          title="8. Biometric Residence Permits"
          :index="7"
          v-model="open"
          >If you are coming to study a course for a period which exceeds six
          months you will only be issued with a 30-day vignette (entry
          clearance). You will then be required to collect your Biometric
          Residence Permit (BRP) within 10 days of arriving in the UK.
        </Expansion>
      </div>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Visas";
const open = ref(null);
</script>

<style scoped></style>
