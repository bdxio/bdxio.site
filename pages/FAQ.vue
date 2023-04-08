<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, createError, useAPI } from "#imports";
import { Collapse, Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

type Question = {
  id: number;
  title: string;
  answer: string;
}

const { $SHOW_PAGE_FAQ } = useNuxtApp();

if (!$SHOW_PAGE_FAQ) {
  throw createError({ statusCode: 404 });
}
definePageMeta({ layout: "page" });
useHead({ title: `FAQ | ${ASSOCIATION_NAME}` });

const {data} = await useAPI("/faq-questions", {});
const questions: Question[] = data;
</script>

<template>
  <main>
    <section class="section bg-white">
      <Heading
        level="2"
        class="text-center !text-bdxio-blue-dark"
      >
        F.A.Q
      </Heading>
      <p class="max-w-[500px] text-center block mx-auto">
        Que vous soyez sponsors, speakers ou encore participants découvrez les réponses 
        aux questions les plus fréquemment posées.
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
            <p class="m-0 mt-4">
              {{ question.answer }}
            </p>
          </template>
        </Collapse>
      </ul>
    </section>
  </main>
</template>
