<template>
  <Label
    :label="label"
    :required="required"
    class="pt-3 pb-0 mb-0 border-b border-b-white max-w-full"
  >
    <Alert v-model="err" />

    <input
      ref="input"
      :value="model?.name || ''"
      :required="required"
      @invalid="checkValidity"
      style="display: none"
    />
    <input
      ref="file"
      type="file"
      class="hidden"
      accept=".png,.jpg,.jpeg,.pdf"
      @change="upload"
    />
    <a
      v-if="model"
      target="_blank"
      :href="`${$app.baseUrl}/api/uploads/${model.slug}`"
      rel="noopener noreferrer"
      class="flex-start mb-2 h-7"
    >
      <div class="flex-1">
        <div class="text-xs font-semibold text-info hover:underline">
          {{ model.name }}
        </div>
      </div>
      <Loader v-if="loading" :size="16" />
      <div
        v-else
        @click.prevent="DEL(model?.slug)"
        class="h-7 w-7 flex-center cursor-pointer hover:bg-error/10"
      >
        <i class="fa-solid fa-trash-can text-error" />
      </div>
    </a>
    <div v-else>
      <div class="min-h-7 flex">
        <div class="flex-1">
          <button
            :disabled="loading"
            type="button"
            @click="file.click()"
            class="h-6 bg-secondary cursor-pointer hover:bg-black/10 px-4 text-xs shadow border-zinc-700 border-b border-r"
          >
            Choose a file
          </button>
        </div>
        <Loader v-if="loading" />
      </div>
      <div class="text-[10px] pt-px h-5">
        <span v-if="message" class="text-error" v-html="message" />
        <span v-else-if="hint" class="opacity-80" v-html="hint" />
      </div>
    </div>
  </Label>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: string;
  label: string;
  hint?: string;
  required?: boolean;
}>();
const user: any = useState("auth_user");
const err = ref("");
const error = ref(false);
const model = computed<{ name: string; slug: string } | null>(
  () => user.value.uploads?.[props.field]
);
const loading = ref(false);
const file: any = ref(null);
const input: any = ref(null);
const message: any = ref("");
async function checkValidity() {
  await delay(20);
  if (input.value.validity.valid)
    return (error.value = false), (message.value = "");
  (error.value = true), (message.value = getValidity(input.value.validity));
}
watch(() => model.value?.name, checkValidity);
async function upload(ev: Event) {
  const target = ev.target as HTMLInputElement;
  if (!target) return;
  const file = target.files?.[0];
  if (!file) return;
  const body = new FormData();
  body.append(props.field, file);
  loading.value = true;
  try {
    const [data, e]: any = await $fetch("/api/uploads", {
      method: "POST",
      body,
    });
    if (e) err.value = e;
    user.value.uploads[props.field] = data;
  } catch (error: any) {
    err.value = error.message;
  } finally {
    loading.value = false;
  }
}
async function DEL(id: any) {
  if (!id) return;
  loading.value = true;
  try {
    const [_, er]: any = await $fetch(`/api/uploads/${id}`, {
      method: "DELETE",
    });
    if (er) return (err.value = er);
    user.value.uploads[props.field] = null;
  } catch (error: any) {
    err.value = error.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
