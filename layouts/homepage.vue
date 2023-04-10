<script setup lang="ts">
import { LayoutHeader, LayoutLocation, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="dark" />
  <slot />
  <LayoutLocation />
  <LayoutFooter />
</template>
