<template>
  <section>
    <label class="block mb-1 text-xs font-bold">{{ label }}*</label>
    <input
      required
      ref="input"
      :type="type"
      v-model="model"
      @invalid="checkValidity"
      style="display: none"
    />
    <textarea
      v-if="textarea"
      v-model="model"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
      class="textinput py-2"
      :class="{ focus, error }"
      rows="3"
    />
    <input
      v-else
      v-model="model"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
      @keypress.enter.prevent
      :type="type"
      class="textinput"
      :class="{ focus, error }"
    />
    <div class="text-[10px] pt-px h-5">
      <span v-if="message" class="text-error" v-html="message" />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  textarea?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url";
}>();
const error = defineModel("error");
const focus = defineModel("focus");
const model: any = defineModel();
const input: any = ref(null);
const message: any = ref("");
async function checkValidity() {
  await delay(20);
  if (input.value.validity.valid)
    return (error.value = false), (message.value = "");
  (error.value = true),
    (message.value = getValidity(input.value.validity, props.type));
}

watch(model, checkValidity);
</script>

<style scoped></style>
