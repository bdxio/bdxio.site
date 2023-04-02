<script setup lang="ts">
import { Heading } from "#components";
</script>

<template>
  <section class="section section-jobs">
    <Heading tag="h2">
      Les jobs de <span class="sponsor">nos partenaires</span>
    </Heading>
    <!-- @TODO : idk what this component is -->
    <!-- <jobs-widget
      color="#7D7DF2"
      locale="fr"
      items="40"
      hidePartnership="false"
      hideFooter="false"
      referralCode="BDXIO"
      customAlgoliaFilters="inSelections.-NGVxFQ3IDZ1Ep5hDwMu > 0"
      eventMode="true"
    /> -->
  </section>
</template>

<style lang="css" scoped>
.section-jobs {
  --w3d-main-color: #7d7df2;
  --w3d-accent-color: #fff;
}
</style>
