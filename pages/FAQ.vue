<script setup lang="ts">
import { useHead, useNuxtApp, createError, useAPI, ref } from "#imports";
import { Collapse, Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Ref } from "vue";
import type { FAQQuestion, FAQTarget } from "~/types";

const { $SHOW_PAGE_FAQ } = useNuxtApp();

if (!$SHOW_PAGE_FAQ) {
  throw createError({ statusCode: 404 });
}
useHead({ title: `FAQ | ${ASSOCIATION_NAME}` });

const faqTarget: Ref<FAQTarget["target"]> = ref("sponsors");
const questions: Ref<FAQQuestion[]> = ref([]);

const updateFaqTarget = async (event: Event) => {
  const newTarget = (event.target as HTMLInputElement).value as FAQTarget["target"];
  faqTarget.value = newTarget;
  await getQuestions(newTarget);
};

const getQuestions = async (target: FAQTarget["target"]) => {
  questions.value = [];
  const { data }: { data: Ref<FAQQuestion[]> } =
  await useAPI(`/faq-questions?filters[faq_target][target][$eq]=${target}`);
  if (data.value.length > 0) {
    questions.value = data.value;
  }
};

await getQuestions(faqTarget.value);
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
        Que vous soyez sponsors, speakers ou encore participants
        découvrez les réponses aux questions les plus fréquemment posées.
      </p>

      <form class="flex gap-4 justify-center my-14">
        <fieldset>
          <input
            id="sponsors"
            v-model="faqTarget"
            type="radio"
            value="sponsors"
            @change="updateFaqTarget($event)"
          >
          <label
            for="sponsors"
            class="ml-1"
          >Sponsors</label>
        </fieldset>
        <fieldset>
          <input
            id="speakers"
            v-model="faqTarget"
            type="radio"
            value="speakers"
            @change="updateFaqTarget($event)"
          >
          <label
            for="speakers"
            class="ml-1"
          >Speakers</label>
        </fieldset>
        
        <fieldset>
          <input
            id="participants"
            type="radio"
            value="participants"
            disabled
            @change="updateFaqTarget($event)"
          >
          <label
            for="participants"
            class="ml-1"
          >Participants</label>
        </fieldset>
      </form>

      <ul
        v-if="questions.length > 0"
        class="mt-[100px] m:max-w-[50%] m:mx-auto"
      >
        <Collapse
          v-for="question in questions"
          :key="`question-${question.id}`"
          tag="li"
          class="mb-10"
        >
          <template #title>
            <Heading
              level="2"
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

      <p
        v-else
        class="italic text-center mt-14"
      >
        Aucune réponse disponible
      </p>
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
  background: url("/images/drawings/coffee.webp") no-repeat;
  background-size: cover;
}

</style>
