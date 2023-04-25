<script setup lang="ts">
import { useHead, useNuxtApp, createError, useAPI } from "#imports";
import { Collapse, Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Ref } from "vue";
import type { FAQQuestion } from "~/types";

const { $SHOW_PAGE_FAQ } = useNuxtApp();

if (!$SHOW_PAGE_FAQ) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `FAQ | ${ASSOCIATION_NAME}` });

const { data: questions }: { data: Ref<FAQQuestion[]> } = await useAPI("/faq-questions", {});
</script>

<template>
  <main>
    <section class="p-section bg-white">
      <Heading
        level="1"
        class="text-center !text-bdxio-blue-dark !relative !z-10 title w-fit mx-auto"
      >
        F.A.Q
      </Heading>
      <p class="max-w-[500px] text-center block mx-auto text-bdxio-blue-dark">
        Découvrez les réponses aux questions les plus fréquemment posées.
      </p>

      <ul class="mt-[100px] m:max-w-[50%] m:mx-auto">
        <Collapse
          v-for="question in questions"
          :key="`question-${question.id}`"
          tag="li"
          class="mb-10"
        >
          <template #title>
            <Heading
              level="3"
              class="!text-base !m-0 !text-bdxio-blue-dark !font-body !font-bold"
            >
              {{ question.title }}
            </Heading>
          </template>
          <template #content>
            <p class="m-0 mt-4 text-bdxio-blue-dark">
              {{ question.answer }}
            </p>
          </template>
        </Collapse>
      </ul>
    </section>
  </main>
</template>

<style scoped lang="postcss">
.title::after {
  content: "";
  display: block;
  width: 110px;
  height: 110px;
  position: absolute;
  top: -17px;
  right: -80px;
  z-index: -1;
  background: url("/images/drawings/coffee.png") no-repeat;
  background-size: cover;
}

</style>
