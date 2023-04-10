<script setup lang="ts">
import { LayoutHeader, LayoutLocation, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="light" />
  <slot />
  <LayoutLocation />
  <LayoutFooter />
</template>
