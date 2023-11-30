<script setup lang="ts">
import { LayoutHeader } from "#components";
</script>

<template>
  <div class="min-h-screen bg-bdxio-blue-dark ">
    <LayoutHeader background="dark" />
    <slot />
  </div>
</template>
