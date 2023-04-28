<script setup lang="ts">
import { Heading, HeadingSection } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const categories = [
  {
    name: "Frontend",
    icon: "/images/drawings/categories/frontend.webp",
  },
  {
    name: "Backend",
    icon: "/images/drawings/categories/backend.webp",
  },
  {
    name: "Big Data & IA",
    icon: "/images/drawings/categories/bigdataia.webp",
  },
  {
    name: "Design & UX",
    icon: "/images/drawings/categories/designux.webp",
  },
  {
    name: "Cloud & Dev.Sec.Ops",
    icon: "/images/drawings/categories/cloudetdevsecops.webp",
  },
  {
    name: "Methodo & Architecture",
    icon: "/images/drawings/categories/methodoarchitecture.webp",
  },
  {
    name: "Hors piste",
    icon: "/images/drawings/categories/horspiste.webp",
  },
];
</script>

<template>
  <section class="p-section flex flex-col m:flex-row">
    <div class="w-full m:w-2/5">
      <HeadingSection
        level="2"
        class="text-subtitle"
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
    </div>
    <div class="grid gap-7 grid-cols-2 m:grid-cols-3 mt-8 m:mt-0 m:ml-32">
      <div
        v-for="category in categories"
        :key="category.name"
        class="shadow-card flex flex-col items-center justify-center p-4 rounded-xl"
      >
        <img
          :src="category.icon"
          class="h-12"
        >
        <span class="font-bold uppercase mt-4 text-center text-small m:text-base">{{ category.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
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
