<script setup lang="ts">
import { LayoutHeader, LayoutSponsors, LayoutLocation, LayoutFooter } from "#components";
</script>

<template>
  <div class="text-center text-[16px] p-2 bg-bdxio-yellow-base italic">
    Nous sommes au complet ! Pour celles et ceux qui n'ont pas pu récupérer une place,
    on vous donne rendez-vous l'année prochaine 💘
  </div>
  <LayoutHeader background="dark" />
  <slot />
  <LayoutSponsors />
  <LayoutLocation />
  <LayoutFooter />
</template>
