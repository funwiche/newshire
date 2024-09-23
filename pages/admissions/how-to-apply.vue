<template>
  <Title>{{ title }}</Title>

  <breadcrum
    :title="title"
    src="/sliders/how-to-apply.jpg"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
    msg="Information to guide you through your important journey – applying to university."
  />
  <Subheading
    title="Your journey starts here"
    desc="This page outlines the neccessary step to required to make an application - it's simple and straightforward."
  />
  <content class="pt-0 sm:pt-0 md:pt-0">
    <div>
      <h2>Admissions Overview</h2>
      <Expansion title="1. Choose a programme" :index="0" v-model="open">
        <p>
          Before making an application, you will need to decide on your course.
          Information on the range of courses available to international
          students can be found on the
          <nuxt-link class="link-bold" to="/academics/programs"
            >course pages</nuxt-link
          >
          of our website.
        </p>
      </Expansion>
      <Expansion title="2. Entry requirements" :index="1" v-model="open">
        <p class="mb-4">
          Entry into undergraduate and postgraduate programmes is dependent on
          your academic qualifications
          <span class="font-black uppercase">and</span> English Language
          proficiency.
        </p>
        <p class="mb-4">
          Applicants must satisfy both the University’s
          <nuxt-link class="link-bold" to="/admissions/academic-requirements"
            >Academic requirements</nuxt-link
          >
          and
          <nuxt-link class="link-bold" to="/admissions/language-requirements"
            >Language requirements</nuxt-link
          >
          for their chosen course in order to be eligible to study.
        </p>
        <p class="mb-4">
          To find the specific qualifications we look for, please visit
          <nuxt-link class="link-bold" to="/admissions/countries"
            >your country page</nuxt-link
          >. If you are unable to find your country or required qualification,
          please contact us directly via
          <a class="link-bold" :href="`mailto:international@${$app.host}`"
            >international@{{ $app.host }}</a
          >
          for more information.
        </p>
        <p class="mb-4">
          When submitting your application, you must also provide additional
          documentation. This should include the following:
        </p>
        <ul class="listitems">
          <li>A copy of your passport</li>
          <li>Academic transcripts/marksheets and certificates</li>
          <li>
            Proof of English language e.g. IELTS, WAEC, GCSE/GCE O Level (please
            note we accept a wide range of country-specific English Language
            qualifications. For more information please see your relevant
            <nuxt-link class="link-bold" to="/admissions/countries"
              >country page</nuxt-link
            >.
          </li>
          <li>Statement of purpose (<em>if applicable</em>)</li>
          <li>
            If have previously studied or worked in the UK you must also provide
            a copy of your previous and/or current visa and any previous and/or
            current CAS letters (<em>if applicable</em>)
          </li>
        </ul>
      </Expansion>
      <Expansion title="3. Submit your application" :index="2" v-model="open">
        <p class="pb-5">
          We've made it easier than ever to make an application
          <nuxt-link class="link-bold" to="/apply"
            >using our online system</nuxt-link
          >
          - once you've signed up, you're ready to go! After submitting your
          contact details and choosing your course, you'll be asked to upload
          your academic certificates/transcripts, Proof of English language and
          a copy of your passport.
        </p>
        <section>
          <p class="pb-5 font-bold">
            It is free to apply to {{ $app.name }} and you can apply for any
            undergraduate or postgraduate taught programme:
          </p>
          <nuxt-link
            to="/apply"
            class="link-bold text-white bg-error px-4 pt-2 pb-4 inline-block mb-6"
          >
            Apply Now
          </nuxt-link>
        </section>
        <p class="pb-5 font-bold">
          Please note, to apply for a MPhil, PhD or other postgraduate research
          programme you will need to apply using the email below. Please do not
          use this application to apply for a taught course. International/EU
          students applying for a postgraduate taught programme must apply via
          the link above.
        </p>
        <a :href="`mailto:pgr@${$app.host}`" class="link-bold inline-block mb-4"
          >pgr@{{ $app.host }}</a
        >
      </Expansion>
      <Expansion title="4. Receive an offer" :index="3" v-model="open">
        Our admissions team will aim to process your application as soon as
        possible. If your application is successful, you’ll be issued with a
        conditional or unconditional offer. If conditional, you will need to
        satisfy any remaining conditions before receiving your Confirmation of
        Acceptance of Studies (CAS). The CAS allows you to apply for your
        student visa.
      </Expansion>
      <Expansion
        title="5. Satisfy the conditions of your offer"
        :index="4"
        v-model="open"
      >
        As mentioned, you may need to satisfy a number of conditions in order to
        receive your CAS. These can include; paying a deposit, meeting English
        language requirements, providing academic references and submitting
        copies of your passport.
      </Expansion>
      <Expansion title="6. Apply for accommodation" :index="5" v-model="open">
        <p>
          Applications for university-owned
          <nuxt-link class="link-bold" to="/student-life/accommodation"
            >accommodation</nuxt-link
          >
          open in April and the priority deadline is in August. You will receive
          information on how to apply for accommodation by email once you have
          paid a deposit or made us your firm choice on UCAS.
        </p>
        <p>
          >Following the deadline, the Accommodation Team will be in touch
          regarding your application, and you'll be allocated your room once
          your place has been confirmed. Alternatively, you can also book
          private or partner accommodation if you prefer.
        </p>
      </Expansion>
      <Expansion title="7. Apply for a student visa" :index="6" v-model="open">
        <p>
          Once you have obtained your CAS, you'll be able to apply for your
          student visa which allows you to study in the UK. We recommend
          students do this as soon as possible, up to six months before the
          course start date. You must ensure you have the correct documents and
          are fully prepared for the visa application process before you start.
          <nuxt-link class="link-bold" to="/immigration/visas"
            >See the full breakdown of requirements</nuxt-link
          >.
        </p>
      </Expansion>
      <Expansion
        :title="`8. Arrive in ${$app.city}, ${$app.country}`"
        :index="7"
        v-model="open"
      >
        <p>
          The final step of your journey! We’ve put together a list of things
          you’ll probably need to do before and when you arrive. Don’t forget to
          arrange airport transfers in advance to take you to your
          accommodation.
        </p>
      </Expansion>
    </div>
  </content>
</template>

<script setup lang="ts">
const title = "How to apply";
const open = ref(null);
</script>

<style scoped></style>
