<template>
  <Title>{{ item.title }}</Title>

  <breadcrum
    :title="item.title"
    :items="[{ title: 'news', path: '/news' }]"
    :msg="item.date"
    :src="item.image"
  />
  <section class="p-4 md:p-8">
    <div class="md">
      <section class="section pb-6 bb">
        <nuxt-link
          to="/news"
          class="flex items-center text-overline text-sm font-bold hover:underline underline-offset-8"
        >
          <i class="fa-solid fa-left-long pr-1"></i>back
        </nuxt-link>
      </section>
      <img :src="item.image" alt="" />
      <div class="py-6 news-content font-sans text-sm" v-html="item.desc" />
      <section class="section pt-6 bt">
        <nuxt-link
          to="/news"
          class="flex items-center text-overline text-sm font-bold hover:underline underline-offset-8"
        >
          <i class="fa-solid fa-left-long pr-1"></i>back
        </nuxt-link>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import items from "~/resources/news";
const route = useRoute();
const item: any = computed(() => items.find(({ slug }) => route.path == slug));
</script>

<style lang="scss">
.news-content {
  p {
    margin-bottom: 18px;
  }
  blockquote {
    color: #c11430;
    padding: 12px 0 12px 32px;
    font-size: 16px;
    border-left: 6px solid #c11430;
    line-height: 20px !important;
  }
  cite {
    font-size: 14px;
    display: block;
    margin-bottom: 20px;
    padding-left: 38px;
  }
}
</style>
