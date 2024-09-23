<template>
  <form @submit.prevent="submit">
    <p class="text-xs mb-4">
      If English is not your first language, and/or you will be applying for a
      Student Visa to enter the UK for study purposes, you must demonstrate your
      English language proficiency as part of the admissions process.
    </p>
    <Alert v-model="error" />
    <Divider title="In-country Tests" class="mb-2" />
    <p class="text-xs mb-3">
      We accept a number of in-country and UK GCSE equivalent English Language
      qualifications as an alternative was of satisfying our English Language
      entry criteria.
    </p>
    <Select
      v-model="post.language.proficiency"
      label="Test Name"
      :items="tests"
    />
    <Textfield
      v-model="post.language.other"
      v-if="post.language.proficiency == 'Other'"
      label="If 'Other' please enter details"
    />
    <Divider title="IELTS" class="mb-2" />
    <p class="text-xs mb-3">
      If you have a valid IELTS Academic test, and you wish for us to use this
      to assess your English Language proficiency, please state the score below.
      You will be required to upload your certificate within the document upload
      section before submission.
    </p>
    <Textfield v-model="post.language.ielts.writing" label="IELTS Writing" />
    <Textfield v-model="post.language.ielts.reading" label="IELTS Reading" />
    <Textfield v-model="post.language.ielts.speaking" label="IELTS Speaking" />
    <Textfield
      v-model="post.language.ielts.listening"
      label="IELTS Listening"
    />
    <Textfield
      v-model="post.language.ielts.overall"
      label="IELTS Overall Score"
    />
    <Textfield
      type="date"
      v-model="post.language.ielts.date"
      label="Date IELTS completed"
    />
    <Submit title="Save and continue" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "auth",
  title: "English Language proficiency",
});
const router = useRouter();
const user = useAuthUser();
const tests = [
  "American High School Diploma (completed in USA)",
  "Bachelor degree taught in English",
  "Bahasa Ingerris (Malaysia)",
  "Brunei O Level English 1120",
  "Cameroon GCE O Level English",
  "College of North Atlantic Qatar Diploma",
  "HKDSE English Language",
  "IGCSE English Language",
  "Indian Standard 12th Examination/Higher Education English",
  "International Baccalaureate English A1 or A2",
  "International Baccalaureate English B",
  "KSCE English Language",
  "Malaysia O Level English 1123 or 1119",
  "Mauritius O Level English 1125 or 1126",
  "NECO English Language",
  "Namibia Senior Secondary Certificate English Language",
  "Qatar University Foundation English",
  "Singapore O Level English 1127",
  "South African Senior Certificate/National Senior Certificate English Language",
  "Sri Lankan GCE O Level English",
  "Tanzania CSE/GCE O Level English",
  "UCE English Language",
  "Videregaende Opplaering English",
  "WAEC English Language",
  "WASSCE English Language",
  "ZGCE English Language",
  "ZSSC English Language",
  "BGCSE English",
  "HKCEE English",
  "Other",
];
const post: any = ref({
  language: user.value.language
    ? { ...user.value.language }
    : {
        ielts: {
          writing: "",
          reading: "",
          speaking: "",
          listening: "",
          overall: "",
          date: "",
        },
        proficiency: "",
        other: "",
      },
});
const error = ref("");
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    const [res, err]: any = await $req.update("/users", post.value);
    if (err) return (error.value = err);
    useAuthUser().value = res;
    useCookie("auth_user").value = JSON.stringify(res);
    router.replace("/apply/uploads");
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
