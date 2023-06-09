<script setup lang="ts">
import { LayoutHeader, LayoutSponsors, LayoutLocation, LayoutFooter } from "#components";
</script>

<template>
  <LayoutHeader background="dark" />
  <slot />
  <LayoutSponsors />
  <LayoutLocation />
  <LayoutFooter />
</template>
