<template>
  <Label :label="label" :required="required">
    <input
      ref="input"
      v-model="model"
      :required="required"
      @invalid="checkValidity"
      style="display: none"
    />
    <div class="flex flex-wrap gap-1 pt-1">
      <div v-for="(n, i) in items" class="flex-start pr-6 h-7">
        <input
          type="radio"
          :name="key"
          :value="n"
          v-model="model"
          :id="key + i"
        />
        <label :for="key + i" v-html="n" class="text-xs flex-start" />
      </div>
    </div>
    <div class="text-[10px] pt-px h-4 -mt-1">
      <span v-if="message" class="text-error" v-html="message" />
      <span v-else-if="hint" class="opacity-80" v-html="hint" />
    </div>
  </Label>
</template>

<script setup lang="ts">
defineProps<{
  items: any[];
  hint?: string;
  label: string;
  required?: boolean;
}>();
const model = defineModel();
const key = `radio-${Date.now()}`;
const input: any = ref(null);
const message: any = ref("");
const error = defineModel("error");

async function checkValidity() {
  await delay(20);
  if (input.value.validity.valid)
    return (error.value = false), (message.value = "");
  (error.value = true), (message.value = getValidity(input.value.validity));
}

watch([model], checkValidity);
</script>

<style scoped></style>
