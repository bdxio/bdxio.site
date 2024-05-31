<script setup lang="ts">
import { onMounted, onUnmounted, useNuxtApp, ref, nextTick } from "#imports";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.ticketing) {
  throw createError({ statusCode: 404 });
}

const imaginaIframe = ref<HTMLIFrameElement | null>(null);

onMounted(async () => {
  await nextTick();
  window.addEventListener("message", resizeIFrame);
});

onUnmounted(() => {
  window.removeEventListener("message", resizeIFrame);
});

function resizeIFrame(event: MessageEvent) {
  if (event.data && event.data.height && imaginaIframe.value) {
    imaginaIframe.value.style.height = event.data.height;
    imaginaIframe.value.height = event.data.height;
  }
}

</script>

<template>
  <iframe
    ref="imaginaIframe"
    scrolling="no"
    allow="geolocation"
    src="https://app.imagina.com/module/390678/111756?application_id=22841448"
    tabindex="-1"
    style="border: none; width: 100%; display: block; overflow: hidden;"
  />
</template>
