<script setup lang="ts">
import { defineProps } from "vue";
import { NuxtImg } from "#components";

defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="block text-lg text-center leading-none hover:text-bdxio-blue-dark active:text-bdxio-blue-dark
      visited:text-bdxio-blue-dark mt-8"
    aria-label="lien pour donner son avis sur openfeedback - Nouvelle fenêtre"
  >
    Donnez votre avis sur
    <NuxtImg
      src="/images/logo-openfeedback.webp"
      alt="Logo Open Feedback"
      class="h-8 inline-block mt-[5px] mx-0 mb-[3px]"
      loading="lazy"
    />
  </a>
</template>
