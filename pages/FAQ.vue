<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, createError } from "#imports";
import { Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

definePageMeta({ layout: "page" });
useHead({ title: `FAQ | ${ASSOCIATION_NAME}` });

const { $SHOW_PAGE_FAQ } = useNuxtApp();

if (!$SHOW_PAGE_FAQ) {
  throw createError({ statusCode: 404 });
}
</script>

<template>
  <main>
    <section class="section bg-white">
      <Heading
        level="2"
        class="text-center"
      >
        F.A.Q
      </Heading>
      <p class="max-w-[500px] text-center block mx-auto">
        Que vous soyez sponsors, speakers ou encore participants découvrez les réponses 
        aux questions les plus fréquemment posées.
      </p>
    </section>
  </main>
</template>
