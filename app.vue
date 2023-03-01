<script lang="ts" setup>
// @ts-ignore
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
    <NuxtWelcome />
  </div>
</template>
