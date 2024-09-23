<template>
  <Label :label="label" :required="required">
    <input
      ref="input"
      :type="type"
      v-model="model"
      :required="required"
      @invalid="checkValidity"
      style="display: none"
    />
    <div class="textfield" :class="{ focus, error }">
      <div class="flex-1">
        <textarea
          v-if="textarea"
          v-model="model"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          @focus="focus = true"
          @blur="focus = false"
        />
        <input
          v-else
          v-model="model"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          @focus="focus = true"
          @blur="focus = false"
          @keypress.enter.prevent
          :type="
            type == 'email' || (type == 'password' && !secure) ? 'text' : type
          "
        />
      </div>
      <div
        v-if="type === 'password'"
        @click="secure = !secure"
        class="h-7 w-7 flex-center cursor-pointer"
      >
        <i v-if="secure" class="fa-light fa-eye" />
        <i v-else class="fa-light fa-eye-slash" />
      </div>
      <div
        v-if="type === 'date'"
        class="h-7 w-7 flex-center absolute right-0 pointer-events-none"
      >
        <i class="fa-light fa-calendar" />
      </div>
    </div>
    <div class="text-[10px] pt-px h-4">
      <span v-if="message" class="text-error" v-html="message" />
      <span v-else-if="hint" class="opacity-80" v-html="hint" />
    </div>
  </Label>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  hint?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  type?: "text" | "password" | "email" | "tel" | "date" | "url";
}>();
const error = defineModel("error");
const focus = defineModel("focus");
const secure = ref(true);
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

watch([model], checkValidity);
</script>

<style scoped></style>
