<script setup lang="ts">
import { useRuntimeConfig, useNuxtApp } from "#imports";

defineProps({
  talkId: {
    type: Number,
    required: true,
  },
});

const { $featureFlags } = useNuxtApp();

const config = useRuntimeConfig();

const { OPENFEEDBACK_URL } = config.public;
</script>

<template>
  <iframe
    v-if="$featureFlags.links.openfeedback && OPENFEEDBACK_URL && talkId"
    :src="`${OPENFEEDBACK_URL}/${talkId || ''}?forceColorScheme=light`"
    title="OpenfeedBack"
    class="frame overflow-hidden w-full py-4"
  />
</template>

<style>
.frame {
  padding: 0;
  height: 520px;
}
</style>
