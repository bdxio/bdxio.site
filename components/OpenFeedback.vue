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
    class="text-lg text-center leading-none mt-4 hover:text-bdxio-blue-dark active:text-bdxio-blue-dark 
      visited:text-bdxio-blue-dark s:ml-5 s:mt-0"
  >
    Donnez votre avis sur
    <img
      src="/images/logo-openfeedback.png"
      alt="Logo Open Feedback"
      class="logo h-[30px] inline-block"
    >
  </a>
</template>

<style scoped>
.logo {
  margin: 5px 0 0 3px;
}
</style>
