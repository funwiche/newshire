<template>
  <div>
    <div
      @click="modal = true"
      class="p-3 flex flex-col items-center cursor-pointer hover:text-red-800"
    >
      <i class="fa-solid fa-search" />
      <div class="text-xs">search</div>
    </div>
    <div
      v-if="modal"
      class="fixed top-0 inset-0 bg-zinc-900 z-50 overflow-hidden overflow-y-auto text-white"
    >
      <div
        class="h-20 bg-zinc-900 static top-0 flex items-center justify-end px-4"
      >
        <div
          @click="modal = false"
          class="p-3 flex flex-col items-center cursor-pointer"
        >
          <i class="fa-solid fa-xmark" />
          <div class="text-xs">close</div>
        </div>
      </div>
      <form @submit.prevent="search" class="py-4 px-6 sm">
        <input
          v-model="text"
          required
          autofocus
          class="block w-full bb bg-black p-4 outline-0 text-base font-normal"
          placeholder="Search..."
        />
        <div class="p-6 place-center">
          <input
            type="submit"
            value="SEARCH"
            class="bg-white hover:opacity-95 cursor-pointer p-2 text-sm text-gray-900 w-28"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fixedBody } from "~/utils";
const route = useRoute();
const text = ref(route.query.q || "");
const modal = ref(false);
watch(
  () => route.fullPath,
  () => (modal.value = false)
);
watch(modal, fixedBody);
function search() {
  if (!text.value) return;
  if (text.value === route.query.q) return;
  navigateTo({ name: "programs", query: { ...route.query, q: text.value } });
}
</script>

<style scoped></style>
