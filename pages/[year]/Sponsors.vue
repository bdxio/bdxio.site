<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

const edition = useEdition();

useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });
</script>

<template>
  <main>
    <SectionSponsors :edition="edition" />
  </main>
</template>
