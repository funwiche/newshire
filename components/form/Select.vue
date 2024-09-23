<template>
  <Label :label="label" :required="required">
    <input
      ref="input"
      v-model="model"
      :required="required"
      @invalid="checkValidity"
      style="display: none"
    />
    <div class="textfield" :class="{ focus, error }">
      <select
        v-model="model"
        :disabled="disabled"
        :readonly="readonly"
        @focus="focus = true"
        @blur="focus = false"
      >
        <option :key="n" v-for="n in items">{{ n }}</option>
      </select>
      <div class="h-7 w-7 flex-center absolute right-0 pointer-events-none">
        <i class="fa-light fa-sort" />
      </div>
    </div>
    <div class="text-[10px] pt-px h-4">
      <span v-if="message" class="text-error" v-html="message" />
      <span v-else-if="hint" class="opacity-80" v-html="hint" />
    </div>
  </Label>
</template>

<script setup lang="ts">
defineProps<{
  items: any[];
  label: string;
  hint?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
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
  (error.value = true), (message.value = getValidity(input.value.validity));
}

watch([model], checkValidity);
</script>

<style scoped></style>
