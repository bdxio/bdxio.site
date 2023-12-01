<script setup lang="ts">
import { getNavigation } from "#imports";
import { NuxtLink } from "#components";

const navigation = getNavigation();
</script>

<template>
  <nav>
    <ul
      class="flex flex-col"
    >
      <li
        v-for="page in navigation"
        :key="page.path"
        class="mr-5 mb-2 last:mr-0 last:mb-0"
      >
        <NuxtLink
          :to="page.path"
          class="text-2xl m:text-base"
        >
          {{ page.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
