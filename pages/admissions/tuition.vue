<template>
  <Title>{{ title }}</Title>
  <breadcrum
    :title="title"
    src="/sliders/tuition.jpg"
    :items="[{ title: 'Admissions', path: '/admissions' }]"
  />
  <content>
    <p>
      Below are sample costs for two semesters (10 courses) of a bachelor's
      degree program for new students starting in this academic year.
    </p>
    <p>
      Billing and payment are done on a semesterly basis rather than annually.
      Once you have registered for your courses you will see the fees reflected
      on your account on WebAdvisor. It takes approximately 72 hours for the
      payment to be reflected on your account.
    </p>
    <section>
      <h4>Tuition (Domestic)</h4>
      <div class="border-y table-cols-2">
        <div>
          <div>Undergraduate</div>
          <h5>£3,050</h5>
        </div>
        <div>
          <div>Graduate</div>
          <h5>£3,650</h5>
        </div>
      </div>
    </section>
    <section>
      <h4>Tuition (International students)</h4>
      <div class="border-y table-cols-2">
        <div>
          <div>Undergraduate</div>
          <h5>£5,650</h5>
        </div>
        <div>
          <div>Graduate</div>
          <h5>£5,950</h5>
        </div>
        <div>
          <div>Deposit</div>
          <h5>£500</h5>
        </div>
      </div>
    </section>
    <section>
      <h4>Scholarships and bursaries</h4>
      <p>
        One way we can help you pay for your studies is with our new Advancement
        Scholarships.
      </p>
      <p>
        You could receive a tuition fee discount worth udiv to
        <strong>£3,500</strong> for eligible master's students, up to
        <strong>£2,500</strong> for eligible undergraduate students, or up to
        <strong>£2,500</strong> for {{ $app.name }} graduates.
      </p>
    </section>
    <section>
      <h4>Other fees</h4>
      <div class="border-y table-cols-2">
        <div>
          <div>Campus Renewal</div>
          <h5>£80</h5>
        </div>
        <div>
          <div>Student Services Fee</div>
          <h5>£100</h5>
        </div>
        <div>
          <div>Students' Union</div>
          <h5>£125</h5>
        </div>
        <div>
          <div>Health Insurance</div>
          <h5>£360</h5>
        </div>
      </div>
    </section>
    <section>
      <h4>Residence - Accommodation</h4>
      <div class="border-y table-cols-2">
        <div>
          <div>Single Bedroom</div>
          <h5>£260 per month</h5>
        </div>
        <div>
          <div>Double Bedroom</div>
          <h5>£380 per month</h5>
        </div>
      </div>
    </section>
    <section>
      <h4>Residence - Meal plans</h4>
      <div class="border-y table-cols-2">
        <div>
          <div>7-Day Unlimited</div>
          <h5>£1,350 per semeter</h5>
        </div>
        <div>
          <div>5-Day Unlimited</div>
          <h5>£1,350 per semeter</h5>
        </div>
      </div>
    </section>
    <section>
      <h4>Books and supplies</h4>
      <p>
        You should be prepared to meet an expenditure to cover the cost of
        textbooks and supplies each semester. Make sure to consult with your
        professors before purchasing any new or used textbooks or laboratory
        manuals.
      </p>
    </section>
    <section>
      <h4>Other fees (dependent on program)</h4>
      <p>
        Depending on your program of study, there may be additional required
        fees (i.e. online course (CITL) fee, co-op work term fee, etc.). A
        complete list of all fees are available on the Financial and
        Administrative Services website.
      </p>
    </section>
    <section>
      <h4>Refunds</h4>
      <p>
        With the appropriate approvals, a student who withdraws from the
        university may be eligible for a refund of part of the fees, to be
        effective as of the date upon which the withdrawal notice is received in
        the Office of Studies. Outstanding Library fines and charges are
        deducted from the calculated refund. You should be aware that you may be
        asked to return government loans or external or internal scholarships.
      </p>
    </section>
    <section>
      <h4>Financial Sanction</h4>
      <p>
        A student will be placed on financial sanction when they fail to settle
        their account (pay in full or have an arrangement for payment approved
        by Student Financial Services) by the published payment deadline date.
        Financial sanction will prevent you from seeing your final grades,
        obtaining an official transcript and selecting courses/registering for
        the following semester. For the sanction to be lifted, you must pay the
        remaining balance on your account. As a graduate student, you must be
        registered every semester unless you are on an approved Leave of
        Absence.
      </p>
    </section>
  </content>
</template>

<script setup lang="ts">
const title = "Tuition and Living Costs";
</script>

<style scoped>
h4 {
  margin-bottom: 4px;
  font-weight: 900 !important;
}
</style>
