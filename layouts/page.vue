<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="light" />
  <slot />
  <LayoutFooter />
</template>
