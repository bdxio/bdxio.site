<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "#imports";
import type { Category } from "~/types";

const props = defineProps<{
  category: Category;
}>();

const categoryNumber = computed(() => {
  switch (props.category.name) {
    case "Frontend":
      return 1;
    case "Backend":
      return 2;
    case "Big Data & I.A.":
      return 3;
    case "Design & UX":
      return 4;
    case "Cloud & DevSecOps":
      return 5;
    case "Méthodo & Architecture":
      return 6;
    case "Hors-piste":
      return 7;
    default:
      return null;
  }
});
</script>

<template>
  <section class="text-center mb-16">
    <span
      :class="`bg-no-repeat bg-center bg-contain py-4 text-[32px] leading-8 category--${categoryNumber}`"
    >
      {{ category.name }}
    </span>
  </section>
</template>

<style lang="scss" scoped>
.category {
  &--1 {
    background-image: url("/images/drawings/themes/theme-1.png");
  }
  &--2 {
    background-image: url("/images/drawings/themes/theme-2.png");
  }
  &--3 {
    background-image: url("/images/drawings/themes/theme-3.png");
  }
  &--4 {
    background-image: url("/images/drawings/themes/theme-4.png");
  }
  &--5 {
    background-image: url("/images/drawings/themes/theme-5.png");
  }
  &--6 {
    background-image: url("/images/drawings/themes/theme-6.png");
  }
  &--7 {
    background-image: url("/images/drawings/themes/theme-7.png");
  }
}
</style>