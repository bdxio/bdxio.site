<script setup lang="ts">
import { useNuxtApp } from "#imports";

import { ASSOCIATION_NAME } from "~/services/constants";

const { $featureFlags } = useNuxtApp();
const categories = [
  {
    name: "Frontend",
    icon: "/images/drawings/categories/frontend.webp",
    width: "36",
    height: "48",
  },
  {
    name: "Backend",
    icon: "/images/drawings/categories/backend.webp",
    width: "37",
    height: "48",
  },
  {
    name: "Big Data & I.A.",
    icon: "/images/drawings/categories/bigdataia.webp",
    width: "51",
    height: "48",
  },
  {
    name: "Design & UX",
    icon: "/images/drawings/categories/designux.webp",
    width: "50",
    height: "48",
  },
  {
    name: "Cloud & DevSecOps",
    icon: "/images/drawings/categories/cloudetdevsecops.webp",
    width: "60",
    height: "48",
  },
  {
    name: "Méthodo & Architecture",
    icon: "/images/drawings/categories/methodoarchitecture.webp",
    width: "54",
    height: "48",
  },
  {
    name: "Hors-piste",
    icon: "/images/drawings/categories/horspiste.webp",
    width: "47",
    height: "48",
  },
];
</script>

<template>
  <section class="p-section flex flex-col m:flex-row">
    <div class="w-full m:w-2/5">
      <HeadingSection
        level="2"
        class="text-xl"
      >
        Thématiques
      </HeadingSection>
      <Heading
        level="3"
        class="relative z-10 scribble"
      >
        Quels seront les thématiques abordées&nbsp;?
      </Heading>
      <p>
        {{ ASSOCIATION_NAME }} propose des conférences autour de 7 thématiques différentes,
        avec des durées différentes et pour tous les niveaux : vous trouverez
        forcément votre bonheur&nbsp;!
      </p>
      <div
        v-if="$featureFlags.pages.schedule || $featureFlags.links.schedulePdf"
        class="mt-8 flex items-center gap-2"
      >
        <LinkSecondary
          v-if="$featureFlags.links.schedulePdf"
          type="link"
          color="light"
          to="/bdxio-2024-programme.pdf"
          download="bdxio-2024-programme.pdf"
        >
          Télécharger le programme
        </LinkSecondary>
        <LinkPrimary
          v-if="$featureFlags.pages.schedule"
          type="link"
          color="light"
          
          href="/schedule"
          aria-label="Lien vers la page programme"
        >
          Voir le programme
        </LinkPrimary>
      </div>
    </div>
    <div
      class="
        grid
        gap-7
        grid-cols-2
        m:grid-cols-3
        mt-8
        m:mt-0
        m:ml-32"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="shadow-card flex flex-col items-center justify-center p-4 rounded-xl"
      >
        <NuxtImg
          :src="category.icon"
          alt=""
          :aria-hidden="true"
          class="h-12"
          loading="lazy"
          :width="category.width"
          :height="category.height"
        />
        <span class="font-bold uppercase mt-4 text-center text-sm m:text-base">{{ category.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
.scribble:before {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  width: 110px;
  height: 60px;
  z-index: -1;
  background: url("/images/drawings/cyan_scribble_2.png") center no-repeat;
  background-size: contain;
}
</style>
