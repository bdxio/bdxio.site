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

const filters = [{
  title: "Sponsors",
  value: "sponsors",
  image: "coffee.png",
}, {
  title: "Speakers",
  value: "speakers",
  image: "mic.png",
},
// {
//   title: "Participants",
//   value: "participants",
//   image: "participants.png",
// }
];

const faqTarget: Ref<FAQTarget["target"]> = ref("sponsors");
const questions: Ref<FAQQuestion[]> = ref([]);
const noQuestions: Ref<boolean> = ref(false);
 
const updateFaqTarget = async (newTarget : string) => {
  const target = newTarget as FAQTarget["target"];
  faqTarget.value = target;
  await getQuestions(target);
};

const getQuestions = async (target: FAQTarget["target"]) => {
  questions.value = [];
  const { data }: { data: Ref<FAQQuestion[]> } =
  await useAPI(`/faq-questions?filters[faq_target][target][$eq]=${target}`);
  if (data.value.length > 0) {
    questions.value = data.value;
  } else {
    noQuestions.value = true;
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

      <form class="flex flex-col gap-10 s:flex-row  justify-center my-14">
        <fieldset
          v-for="{title, value, image} in filters"
          :key="`filter-${value}`"
        >
          <input
            :id="value"
            v-model="faqTarget"
            type="radio"
            :value="value"
            class="hidden"
          >
          <label
            for="sponsors"
            tabindex="1"
            :class="`ml-1 shadow-card flex flex-col items-center justify-center p-10 l:p-20 rounded-xl m-0
            bg-contain bg-center bg-no-repeat uppercase cursor-pointer
            ${faqTarget === value ? 'font-bold' : 'opacity-50'}`"
            :style="{'background-image': `url(/images/drawings/${image})`}"
            @click.prevent="updateFaqTarget(value)"
            @keydown.enter.exact="updateFaqTarget(value)"
          >{{ title }}</label>
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
        v-if="noQuestions"
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
  width: 140px;
  height: 70px;
  position: absolute;
  right: -100px;
  bottom: -30px;
  z-index: -1;
  background-image: url("/images/drawings/yellow_scribbles.webp");
  background-size: contain;
  background-repeat: no-repeat;
}

</style>
