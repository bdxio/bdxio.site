<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { NuxtError } from "#app";

const props = defineProps<{
  error: any;
}>();

const edition = useEdition();

const getErrorContent = (statusCode: NuxtError["statusCode"]) => {
  switch (statusCode) {
    case 404:
      return "La page que vous demandez n'existe pas.";
    case 400:
      return "Un problème empêche le chargement de la page demandée.";
    case 500:
    default:
      return "Une erreur est survenue.";
  }
};
</script>

<template>
  <div class="font-body text-base">
    <LayoutHeader background="light" />
    <section class="p-section flex flex-col gap-10 justify-center items-center">
      <div>
        <Heading
          level="1"
          class="text-center text-bdxio-blue-dark"
        >
          {{ getErrorContent(props.error.statusCode) }}
        </Heading>
        <div class="w-1/2 mx-auto flex flex-col gap-4">
          <p>
            Nous nous excusons pour la gêne occasionnée et vous invitons à vous rediriger sur la
            <LinkNative href="/">
              page d'accueil.
            </LinkNative>
          </p>
          <p>
            Si le problème persiste n'hésitez pas à <LinkNative href="mailto:team@bdxio.fr">
              nous contacter.
            </LinkNative>
          </p>
        </div>
      </div>
      <NuxtImg
        src="/images/association/team2025.jpeg"
        :alt="`Photo de l'équipe ${ASSOCIATION_NAME} ${Number(edition) - 1}`"
        aria-hidden="true"
        class="mb-6"
        width="500"
      />
    </section>
    <LayoutFooter />
  </div>
</template>
