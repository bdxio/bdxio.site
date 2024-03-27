<script setup lang="ts">
import { useHead, useRoute, definePageMeta, computed, ref, onMounted } from "#imports";
import { Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

definePageMeta({ layout: "empty" });

useHead({
  title: `Indices | ${ASSOCIATION_NAME}`,
});

const { query } = useRoute();

const mounted = ref(false);

const content = computed(() => {
  try {
    if (!query.text || typeof query.text !== "string") return null;
    const decodedString: string = atob(query.text);
    const uint8Array: Uint8Array = new Uint8Array(decodedString.length);
    for (let i = 0; i < decodedString.length; ++i) {
      uint8Array[i] = decodedString.charCodeAt(i);
    }
    return new TextDecoder("utf-8").decode(uint8Array);
  } catch (e) {
    return null;
  }
});

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <main>
    <section class="p-section bg-bdxio-blue-dark text-bdxio-light min-h-screen flex flex-col items-center">
      <Heading
        level="1"
        class="text-center"
      >
        Indices
      </Heading>
      <template v-if="mounted">
        <p
          v-if="content"
          class="w-full m:w-1/2 mt-6"
        >
          {{ content }}
        </p>
        <p
          v-else
          class="text-center"
        >
          Oups, l'URL semble erronée 😰
        </p>
      </template>
    </section>
  </main>
</template>
