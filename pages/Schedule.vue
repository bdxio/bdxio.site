<script setup lang="ts">
import { onMounted, onUnmounted, useNuxtApp, ref, nextTick } from "#imports";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.schedule) {
  throw createError({ statusCode: 404 });
}

const imaginaIframe = ref<HTMLIFrameElement | null>(null);
const isLoading = ref(true);

onMounted(async () => {
  await nextTick();
  window.addEventListener("message", resizeIFrame);
  setTimeout(() => {
    if (imaginaIframe.value) {
      imaginaIframe.value.onload = () => {
        isLoading.value = false;
      };
      isLoading.value = false;
    }
  }, 1000);
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
  <div
    v-if="isLoading"
    class="flex items-center justify-center text-2xl font-bold h-[950px] animate-pulse animation-delay-200"
  >
    Chargement du programme...
  </div>
  <iframe
    ref="imaginaIframe"
    scrolling="no"
    allow="geolocation"
    src="https://app.imagina.com/module/390679/111756?application_id=26639251"
    tabindex="-1"
    style="border: none; width: 100%; display: block; overflow: hidden;"
  />
</template>
