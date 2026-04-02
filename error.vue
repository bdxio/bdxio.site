<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{
  error: { statusCode: NuxtError['status'] };
}>();
</script>

<template>
  <LayoutHeader background="light" />
  <SectionErrorMessage :statusCode="error.statusCode" />
  <LayoutFooter />
</template>
