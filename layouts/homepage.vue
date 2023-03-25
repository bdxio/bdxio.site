<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "#components";
</script>

<template>
  <div>
    <LayoutHeader background="dark" />
    <slot />
    <LayoutFooter />
  </div>
</template>
