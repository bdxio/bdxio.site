<script setup lang="ts">
import { LayoutHeader, LayoutFooter, LinkPrimary, NuxtImg } from "#components";

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
        src="/images/association/team2023.webp"
        alt=""
        aria-hidden="true"
        class="mb-6"
        width="500"
      />
      <p v-if="status === 404">
        Oups ! Vous êtes perdus ? <br>
      </p>
      <p v-else>
        Oups ! Il semblerait qu'il y ait eu une erreur.<br>
      </p>
      <LinkPrimary
        type="nuxt"
        color="dark"
        href="/"
        class="mt-5"
      >
        Revenir à l'accueil
      </LinkPrimary>
    </section>
    <LayoutFooter />
  </div>
</template>
