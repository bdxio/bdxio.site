<script setup lang="ts">
import { useNuxtApp } from "#imports";

import { ASSOCIATION_NAME } from "~/services/constants";

const { $featureFlags } = useNuxtApp();

</script>

<template>
  <div class="flex flex-col m:flex-row border-t border-solid border-black mt-8 m:mt-16 pt-8 m:pt-16">
    <span class="text-lg m:mr-16 mb-4 m:mb-0">© {{ new Date().getFullYear() }} - {{ ASSOCIATION_NAME }}</span>
    <NuxtLink
      v-if="$featureFlags.pages.legalNotice"
      to="/legal-notice"
      class="text-lg m:mr-16 mb-4 m:mb-0"
    >
      Mentions légales
    </NuxtLink>
    <NuxtLink
      v-if="$featureFlags.pages.codeOfConduct"
      to="/conduct"
      class="text-lg m:mr-16 mb-4 m:mb-0"
    >
      Code de conduite
    </NuxtLink>
    <a
      v-if="$featureFlags.links.kitCommunication"
      href="/bdxio-kit-communication.zip"
      download
      class="text-lg m:mr-16"
    >
      Kit communication
    </a>
  </div>
</template>
