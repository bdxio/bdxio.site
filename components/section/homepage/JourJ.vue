<script setup lang="ts">
import { Heading, LinkSecondaryNuxt } from "#components";
</script>

<template>
  <section class="p-section flex flex-col justify-center items-center bg-bdxio-blue-light w-full">
    <div>
      <Heading
        level="2"
        class="text-white"
      >
        Prêt.e.s pour le jour J&nbsp;?
      </Heading>

      <LinkSecondaryNuxt
        color="white"
        to="/sponsors"
        class="mt-10 mx-auto"
      >
        Découvrir nos sponsors 2023
      </LinkSecondaryNuxt>
    </div>
  </section>
</template>
