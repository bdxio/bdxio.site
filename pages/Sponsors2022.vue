<script setup lang="ts">
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  useAPI,
  createError,
} from "#imports";
import { Heading } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";

const { $SHOW_PAGE_SPONSORS2022 } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS2022) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({ title: `Sponsors ${EDITION} | ${ASSOCIATION_NAME}` });

const { data: offers } = await useAPI("/offers", {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

function getOfferClass(index: number) {
  return ["purple", "green", "yellow", "orange"][index];
}
</script>

<template>
  <main class="section bg-white section-sponsors-2022">
    <header class="flex flex-col justify-center items-center text-center">
      <Heading
        level="1"
        class="relative z-relative m:before:w-[120px] m:before:h-[120px] m:before:-left-[110px] title"
      >
        Nos sponsors {{ EDITION }}
      </Heading>
      <p>
        L’équipe de {{ ASSOCIATION_NAME }} tient à remercier tous les partenaires et sponsors
        pour nous permettre de vous proposer cette édition {{ EDITION }}.
      </p>
    </header>

    <section class="section-sponsors-2022__body mt-[100px]">
      <ul v-if="offers.length">
        <li
          v-for="(offer, index) in offers"
          :key="`offer-${offer.id}`"
          class="mb-12 offer"
        >
          <Heading
            level="2"
            class="!text-[20px] !mb-0 uppercase tracking-[3px] font-bold"
            :class="getOfferClass(index)"
          >
            {{ offer.label }}
          </Heading>
          <ul
            v-if="offer.sponsors?.length"
            class="flex gap-[30px] flex-wrap self-center p-8 sponsors"
          >
            <li
              v-for="sponsor in offer.sponsors"
              :key="sponsor.name"
              class="card min-w-[180px] min-h-[180px] block mx-auto my-0 s:min-w-[210px] s:min-h-[210px] s:m-0"
            >
              <a
                :href="sponsor.url || '#'"
                target="_blank"
                class="block w-full h-full relative z-relative"
                :title="sponsor.name"
              >
                <img
                  class="w-1/2 absolute z-absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  :src="
                    sponsor.logo && sponsor.logo
                      ? sponsor.logo.formats.thumbnail.url
                      : '/images/bdxio_logo_blue.png'
                  "
                  :alt="`Logo de ${sponsor.name}`"
                >
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p v-else>
        Pas de sponsors...
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.title::before {
  content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  left: -65px;
  bottom: -10px;
  background: url("/images/drawings/blue_presentation_left.png") center no-repeat;
  background-size: cover;
}

.purple {
  color: $purple;
}

.green {
  color: $green;
}

.yellow {
  color: $yellow;
}

.orange {
  color: $orange;
}
</style>
