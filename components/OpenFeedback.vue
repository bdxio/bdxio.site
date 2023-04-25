<script setup lang="ts">
import { defineProps } from "vue";

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
  >
    Donnez votre avis sur
    <img
      src="/images/logo-openfeedback.png"
      alt="Logo Open Feedback"
      class="logo h-8 inline-block"
    >
  </a>
</template>

<style scoped lang="postcss">
.logo {
  margin: 5px 0 0 3px; /* Align the logo vertically with the text */
}
</style>
