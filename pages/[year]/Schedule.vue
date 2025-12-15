<script setup lang="ts">
import { onMounted, onUnmounted, useNuxtApp, ref, nextTick } from "#imports";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.schedule.show) {
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

const route = useRoute();
const year = route.params.year as string;
</script>

<template>
  <LinkPrimary v-if="$featureFlags.pages.schedule.links.downloadPdf"
               type="link"
               color="light"
               :href="`/programme-bdxio-${year}.pdf`"
               :download="`programme-bdxio-${year}.pdf`"
               class="whitespace-nowrap block mx-auto mb-6"
  >
    Télécharger le programme
  </LinkPrimary>
  <div v-if="isLoading"
       class="flex items-center justify-center text-2xl font-bold h-[950px] animate-pulse animation-delay-200"
  >
    Chargement du programme...
  </div>
  <iframe ref="imaginaIframe"
          scrolling="no"
          class="website-section-iframe"
          allow="geolocation"
          src="https://app.imagina.com/module/436648/112144?application_id=40947770"
          tabindex="-1"
          style="border: none; width: 100%; display: block; overflow: hidden;"
  />
</template>

