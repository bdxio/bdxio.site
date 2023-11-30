<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="dark" />
  <slot />
  <LayoutFooter />
</template>
