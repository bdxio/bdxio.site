<script setup lang="ts">
import { EDITION } from "~/services/constants";
</script>

<template>
  <div class="p-section flex flex-col bg-bdxio-blue-dark text-bdxio-light m:justify-between l:flex-row">
    <div class="flex flex-col justify-center w-full l:w-5/12">
      <HeadingSection
        level="2"
        class="text-bdxio-light text-xl"
      >
        Thème {{ EDITION }}
      </HeadingSection>
      <Heading
        level="3"
        class="text-bdxio-light"
      >
        Dix&nbsp;ans d’innovation, dix ans d’impact:
        <br>
        La technologie au service de la société
      </Heading>
      <p class="font-medium">
        Célébrez avec nous la 10e édition de BDX I/O,
        un événement qui façonne l'écosystème tech bordelais
        depuis une décennie.
      </p>
    </div>
    <div class="w-full l:w-5/12 flex justify-center item-center mt-16 m:mt-0">
      <NuxtImg
        src="/images/illustrations/birthday-cake-bdxio-2025.png"
        alt="Illustration de la planète Terre connectée et entourée de feuillages"
        :aria-hidden="true"
        class="object-contain max-w-md xs:w-1/2 l:w-full"
        loading="lazy"
        width="875"
        height="1205"
        size="xs:50vw lg:100vw"
      />
    </div>
  </div>
</template>
