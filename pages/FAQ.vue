<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { FAQQuestion, FAQTarget } from "@bdxio/bdxio.types";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.faq.show) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `FAQ | ${ASSOCIATION_NAME}` });

const { query } = useRoute();
const router = useRouter();

const filters: Array<{
  title: string;
  value: FAQTarget["target"];
  image: string;
}> = [
  {
    title: "Participants",
    value: "participants",
    image: "participants.png",
  },
  {
    title: "Sponsors",
    value: "sponsors",
    image: "coffee.png",
  },
  {
    title: "Speakers",
    value: "speakers",
    image: "mic.png",
  },
];

const targets: FAQTarget["target"][] = filters.map((filter) => filter.value);

const { data }: { data: Ref<FAQQuestion[]> } = await useAPI("/faq-questions", {
  params: {
    populate: "*",
    "pagination[limit]": 200,
  },
});

const questions = computed(() => {
  return targets.reduce((result, target) => {
    result[target] = data.value.filter((question) => question.faq_target?.target === target);
    return result;
  }, {} as Record<FAQTarget["target"], FAQQuestion[]>);
});

const currentTarget = ref<FAQTarget["target"]>(filters[0].value);

function changeTarget(target: FAQTarget["target"]) {
  currentTarget.value = target;
}

watch(currentTarget, () => router.replace({ query: { target: currentTarget.value } }));

onMounted(() => {
  if (targets.includes(query.target as FAQTarget["target"])) {
    currentTarget.value = query.target as FAQTarget["target"];
  } else {
    router.replace({ query: { target: currentTarget.value } });
  }
});
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
        Que vous soyez sponsors, speakers ou encore participants,
        découvrez les réponses aux questions les plus fréquemment posées.
      </p>
      <form class="flex flex-col gap-10 s:flex-row  justify-center my-14">
        <fieldset
          v-for="{ title, value, image } in filters"
          :key="`filter-${value}`"
        >
          <input
            :id="value"
            v-model="currentTarget"
            type="radio"
            :value="value"
            class="hidden"
          >
          <label
            for="sponsors"
            tabindex="1"
            :class="`ml-1 shadow-card flex flex-col items-center justify-center p-10 l:p-20 rounded-xl m-0
            bg-contain bg-center bg-no-repeat uppercase hover:opacity-100
            ${currentTarget === value ? 'font-bold' : 'opacity-50 cursor-pointer'}`"
            :style="{ 'background-image': `url(/images/drawings/${image})` }"
            @click.prevent="changeTarget(value)"
            @keydown.enter.exact="changeTarget(value)"
          >
            {{ title }}
          </label>
        </fieldset>
      </form>
      <template
        v-for="target in targets"
        :key="target"
      >
        <ul :class="`mt-[100px] m:max-w-[50%] m:mx-auto ${target !== currentTarget ? 'hidden' : null}`">
          <details
            v-for="question in questions[target]"
            :key="`question-${question.id}`"
            tag="li"
            class="mb-10"
          >
            <summary class="flex items-center cursor-pointer">
              <span class="arrow-icon mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <Heading
                level="2"
                class="!text-xl !m-0 !text-bdxio-blue-dark !font-body !font-bold"
              >
                {{ question.title }}
              </Heading>
            </summary>
            <div>
              <Markdown
                :content="question.answer"
                class="mt-3"
              />
            </div>
          </details>
        </ul>
      </template>
    </section>
  </main>
</template>

<style scoped lang="css">
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

/* Custom arrow styling */
summary {
  list-style: none;
  display: flex;
  align-items: center;
}

summary::-webkit-details-marker {
  display: none;
}

.arrow-icon {
  transition: transform 0.3s ease;
  color: var(--bdxio-blue-dark, #00394f);
}

details[open] .arrow-icon {
  transform: rotate(90deg);
}

details:not([open]) .arrow-icon {
  transform: rotate(0deg);
}
</style>
