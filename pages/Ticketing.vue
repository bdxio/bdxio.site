<script setup lang="ts">
import { onMounted, onUnmounted, useNuxtApp, ref, nextTick } from "#imports";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.ticketing.show) {
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
    Chargement de la billetterie
  </div>
  <iframe
    ref="imaginaIframe"
    scrolling="no"
    allow="geolocation"
    src="https://app.imagina.com/module/436613/112144?application_id=34251165"
    tabindex="-1"
    style="border: none; width: 100%; display: block; overflow: hidden;"
  />
</template>
