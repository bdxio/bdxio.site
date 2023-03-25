<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "#components";
</script>

<template>
  <div>
    <LayoutHeader background="light" />
    <slot />
    <LayoutFooter />
  </div>
</template>
