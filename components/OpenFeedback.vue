<script setup lang="ts">
defineProps({
  talkId: {
    type: Number,
    default: null,
  },
});

const { $featureFlags } = useNuxtApp();

const config = useRuntimeConfig();

const { OPENFEEDBACK_URL } = config.public;
</script>

<template>
  <a
    v-if="$featureFlags.links.openfeedback && OPENFEEDBACK_URL"
    :href="`${OPENFEEDBACK_URL}/${talkId || ''}`"
    target="_blank"
    class="block text-lg text-center leading-none hover:text-bdxio-blue-dark active:text-bdxio-blue-dark
      visited:text-bdxio-blue-dark mt-8"
    aria-label="lien pour donner son avis sur openfeedback - Nouvelle fenêtre"
  >
    Donnez votre avis sur
    <NuxtImg
      src="/images/logo-openfeedback.webp"
      alt=""
      :aria-hidden="true"
      class="h-8 inline-block mt-[5px] mx-0 mb-[3px]"
      loading="lazy"
    />
  </a>
</template>
