<script setup lang="ts">
import { defineProps } from "vue";
import { LayoutHeader, LayoutFooter, LinkPrimaryNuxt, NuxtImg } from "#components";

const props = defineProps<{
  error: any;
}>();

const status = props.error?.statusCode || 500;
</script>

<template>
  <div class="font-body text-base">
    <LayoutHeader background="light" />
    <section class="p-section flex flex-col items-center">
      <NuxtImg
        src="/images/association/team2022.webp"
        alt="Photo de l'équipe bdxio 2022"
        class="mb-6"
        width="500"
      />
      <p v-if="status === 404">
        Oups ! Vous êtes perdus ? <br>
      </p>
      <p v-else>
        Oups ! Il semblerait qu'il y ait eu une erreur.<br>
      </p>
      <LinkPrimaryNuxt
        color="dark"
        to="/"
        class="mt-5"
      >
        Revenir à l'accueil
      </LinkPrimaryNuxt>
    </section>
    <LayoutFooter />
  </div>
</template>
