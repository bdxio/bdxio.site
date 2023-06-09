<script setup lang="ts">
import { LayoutHeader, LayoutSponsors, LayoutLocation, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="light" />
  <slot />
  <LayoutSponsors />
  <LayoutLocation />
  <LayoutFooter />
</template>
