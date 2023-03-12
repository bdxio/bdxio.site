<script lang="ts" setup>
import { ref, useHead } from "#imports";

const title = ref("BDX I/O");
const description = ref(/* @TODO : fill it */ "");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
