<script setup lang="ts">
import { useRuntimeConfig, useNuxtApp } from "#imports";

defineProps({
  talkId: {
    type: Number,
    required: true,
  },
});

const { $SHOW_LINK_OPENFEEDBACK } = useNuxtApp();

const config = useRuntimeConfig();

const { OPENFEEDBACK_URL } = config.public;
</script>

<template>
  <iframe
    v-if="$SHOW_LINK_OPENFEEDBACK && OPENFEEDBACK_URL && talkId"
    :src="`${OPENFEEDBACK_URL}/${talkId || ''}`"
    title="OpenfeedBack"
    class="frame overflow-hidden w-full py-4"
  />
</template>

<style>
.frame {
  background-color: #303030;
  height: 520px;
}
</style>
