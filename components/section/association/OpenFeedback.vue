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
    donnez votre avis sur<br>
    <img
      src="/images/logo-openfeedback.png"
      alt="Logo openfeedback"
      class="h-[30px]"
    >
  </a>
</template>
