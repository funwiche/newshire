<template>
  <Title>{{ title }}</Title>
  <div class="flex flex-col min-h-screen auth-layout">
    <header
      class="border-primary h-20 flex items-center justify-between px-4 sm:px-6 lg:px-12"
    >
      <nuxt-link to="/">
        <img src="/nu-logo.png" class="w-32" />
      </nuxt-link>
      <button
        v-if="user && token"
        @click="logout"
        class="border rounded px-2 flex items-center h-8 text-xs border-white text-white font-bold hover:bg-white/10 hover:opacity-100 opacity-65"
      >
        <i class="fa-solid fa-power-off mr-1 text-base" />
        Logout
      </button>
    </header>
    <main class="flex-1 bg-secondary">
      <h1
        class="border-b-2 bg-white border-b-primary p-2 text-sm font-black opacity-65 text-center"
      >
        {{ title }}
      </h1>
      <div class="p-4 sm:p-10">
        <div class="container">
          <section v-if="!user" class="card p-4 sm:p-8">
            <NuxtPage />
          </section>
          <section v-else-if="user.status" class="card p-4 sm:p-8">
            <NuxtPage />
          </section>
          <section v-else>
            <section>
              <h2
                v-if="route.name === 'index'"
                class="sm:text-lg font-black py-2"
              >
                {{ user.profile.fname }} {{ user.profile.lname }} (#{{
                  user._id
                }}
                )
              </h2>
              <div v-else class="text-error font-bold text-xs mb-2">
                * required
              </div>
            </section>
            <section class="card p-4 sm:p-8">
              <NuxtPage />
            </section>
            <Apply v-if="user && route.name === 'index'" />
          </section>
        </div>
      </div>
    </main>
    <footer>
      <section class="p-4 pt-0 sm:px-6 bg-secondary">
        <div class="text-xs sm:text-sm container">
          For support please contact
          <a :href="`mailto:${$app.email}`" class="text-info hover:underline">
            {{ $app.email }}
          </a>
          or {{ $app.phone }}
        </div>
      </section>

      <section class="text-xs text-center p-4 text-white/65">
        © {{ new Date().getFullYear() }} - {{ $app.name }}
      </section>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const user = useAuthUser();
const token = useAccessToken();

const title = computed(() => route.meta.title);
const _user = computed(() => JSON.stringify(user.value));
watch(_user, (val) => (useCookie("auth_user").value = val));
onMounted(async () => {
  const [res, err] = await $fetch("/api/users/auth");
  if (err) return;
  useAuthUser().value = res;
  useCookie("auth_user").value = JSON.stringify(res);
});
function logout() {
  user.value = null;
  token.value = null;
  deleteCookie("auth_user");
  deleteCookie("access_token");
  location.href = "/account/login";
}
</script>
