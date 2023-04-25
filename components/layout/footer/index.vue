<script setup lang="ts">
import {
  LayoutFooterLogo,
  LayoutFooterAddress,
  LayoutFooterSocials,
  LayoutFooterNavigation,
  LayoutFooterContact,
  LayoutFooterNewsletter,
  LayoutFooterSite,
} from "#components";
</script>

<template>
  <footer class="p-section !pb-0 mb-8 m:mb-16 flex flex-col">
    <LayoutFooterLogo />
    <div class="flex flex-col m:flex-row">
      <div class="flex flex-col m:w-1/3 mb-8 m:mb-0">
        <LayoutFooterAddress class="mb-8 m:mb-16" />
        <LayoutFooterSocials />
      </div>
      <LayoutFooterNavigation class="m:w-1/3 mb-8 m:mb-0" />
      <div class="m:w-1/3">
        <LayoutFooterContact class="mb-8" />
        <LayoutFooterNewsletter />
      </div>
    </div>
    <LayoutFooterSite />
  </footer>
</template>
