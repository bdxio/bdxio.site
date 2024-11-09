<script setup lang="ts">
import { EDITION } from "~/services/constants";

import type { Sponsor } from "@bdxio/bdxio.types";

const { data: sponsorsBalthazar }: {data: Ref<Sponsor[]>} = await useAPI("/sponsors", {
  params: {
    "populate": "*",
    "filters[offers][edition][year][$eq]": EDITION,
    "filters[offers][label][$eq]": "Balthazar",
  },
});
</script>

<template>
  <section
    v-if="sponsorsBalthazar"
    class="p-section bg-bdxio-blue-darker"
  >
    <Heading
      level="2"
      class="title text-bdxio-light text-center !mb-10"
    >
      Ils nous soutiennent&nbsp;!
    </Heading>
    <div class="flex flex-col items-center justify-center mb-12">
      <ul
        v-if="sponsorsBalthazar.length > 0"
        class="flex flex-wrap items-center justify-center w-full s:w-4/5 m:w-3/5"
      >
        <li
          v-for="sponsor in sponsorsBalthazar"
          :key="sponsor.id"
        >
          <component
            :is="sponsor.url ? 'a' : 'span'"
            :href="sponsor.url || '#'"
            :target="sponsor.url && '_blank'"
            :class="`flex items-center justify-center p-4 m-4 bg-bdxio-light rounded-lg h-32 w-32`"
          >
            <NuxtImg
              :src="sponsor.logo.url"
              :width="96"
              :alt="`Logo ${sponsor.name}`"
            />
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
