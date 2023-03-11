<script setup lang="ts">
import { definePageMeta, useHead, useFetch, computed } from "#imports";
import { useConfig } from "~/composables";

definePageMeta({ layout: "page" });
useHead({ title: "Talk | BDX I/O" });
const { params } = useRoute();

const { API_URL } = useConfig();
const { data } = await useFetch(`${API_URL}/talks/${params.id}`, {
  params: { populate: "*" },
});
const { attributes } = data.value.data;

const presentation = computed(() => ({
  title: attributes.title || null,
  level: attributes.level || null,
  language: attributes.language || null,
  abstract: attributes.abstract || null,
  format: attributes.format.data.attributes.name || null,
  openfeedbackUrl: attributes.openfeedbackUrl || null,
  youtubeUrl: attributes.youtubeUrl || null,
}));
const category = computed(
  () => attributes.category.data.attributes.name || null
);
const speakers = computed(() => [
  ...attributes.speakers.data.map(({ attributes }) => attributes),
]);
</script>

<template>
  <main class="section section-talk">
    <talk-section-theme :category="category" />
    <talk-section-presentation :presentation="presentation" />
    <talk-section-speaker
      v-for="(speaker, index) in speakers"
      :key="index"
      :speaker="speaker"
    />
    <nuxt-link
      to="/schedule"
      class="button button-primary button-primary--light backto"
    >
      Voir le programme
    </nuxt-link>
  </main>
</template>

<style lang="scss" scoped>
.section-talk {
  background: #fff;
}

.backto {
  margin: $spc-l auto 0 auto;
  display: block;
}
</style>
