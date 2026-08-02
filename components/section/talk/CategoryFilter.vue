<script lang="ts">
import type { Category } from '~/types';

export const ALL_CATEGORIES = 'all';
</script>

<script setup lang="ts">
defineProps<{
  categories: Category[];
  modelValue: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const isOpen = ref(false);

function setFilter(categoryId: string) {
  emit('update:modelValue', categoryId);
}
</script>

<template>
  <div v-if="categories.length" class="category-filter-accordion">
    <button type="button" class="category-filter-toggle" @click="isOpen = !isOpen">
      <span aria-hidden="true">🔍</span> Filtrer par thématiques
    </button>
    <ul class="category-filter" :class="{ 'category-filter--open': isOpen }">
      <li class="category-filter-item" @click="setFilter(ALL_CATEGORIES)">
        <input
          :id="ALL_CATEGORIES"
          type="radio"
          :checked="modelValue === ALL_CATEGORIES"
          class="category-filter-input"
        >
        <label :for="ALL_CATEGORIES" class="category-filter-label" style="border-color: black"> Tous </label>
      </li>
      <li
        v-for="category in categories"
        :key="`filter-${category.id}`"
        class="category-filter-item"
        @click="setFilter(category.id.toString())"
      >
        <input
          :id="category.name"
          type="radio"
          :checked="modelValue === category.id.toString()"
          class="category-filter-input"
        >
        <label
          :for="category.name"
          class="category-filter-label"
          :style="{
            'border-color': category.color,
          }"
        >
          {{ category.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.category-filter-accordion {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: theme('screens.l')) {
    margin-bottom: 5rem;
    padding-left: 0;
    padding-right: 0;
  }
}

.category-filter-toggle {
  display: block;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: theme('screens.l')) {
    display: none;
  }
}

.category-filter {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem auto 0;
}

.category-filter--open {
  display: flex;
}

@media screen and (min-width: theme('screens.l')) {
  .category-filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
    width: 50%;
    margin-top: 0;
  }
}

.category-filter-item {
  text-align: center;
}

.category-filter-input {
  display: none;
}

.category-filter-label {
  cursor: pointer;
}

.category-filter-input:checked + .category-filter-label,
.category-filter-label:hover {
  padding-bottom: 5px;
  border-bottom: 3px solid;
}
</style>
