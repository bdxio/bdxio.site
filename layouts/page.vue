<script setup lang="ts">
// @ts-nocheck
import { LayoutTheHeader, LayoutTheFooter } from "#components";
</script>

<template>
  <div>
    <LayoutTheHeader background="light" />
    <slot />
    <LayoutTheFooter />
  </div>
</template>
