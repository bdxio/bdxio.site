<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

useHead({ title: `Mentions légales | ${ASSOCIATION_NAME}` });
</script>

<template>
  <main>
    <section class="p-section bg-white">
      <Heading level="1">
        Mentions légales
      </Heading>
      <Heading
        level="2"
        class="!text-3xl !m:text-4xl"
      >
        {{ ASSOCIATION_NAME }}
      </Heading>
      <p>Association loi 1901</p>
      <p>
        <strong>Siège social</strong>: BORDEAUX DEVELOPER EXPERIENCE, 43/45 RUE D'ARMAGNAC, CS 72073, 33088 BORDEAUX
      </p>
      <p><strong>SIRET</strong>: 811 910 520 00022</p>
      <p><strong>Présidente</strong>: Coralie BROTEILLE</p>
      <Heading
        level="2"
        class="!text-3xl !m:text-4xl mt-10"
      >
        Hébergement
      </Heading>
      <p>
        Ce site est hébérgé par
        <a
          href="https://netlify.com"
          class="text-bdxio-blue-light"
        >
          Netlify.
        </a>
      </p>
      <Heading
        level="2"
        class="!text-3xl !m:text-4xl mt-10"
      >
        Conception et réalisation
      </Heading>
      <p><strong>Direction éditoriale</strong>: {{ ASSOCIATION_NAME }}</p>
      <p><strong>Photographies</strong>: {{ ASSOCIATION_NAME }}</p>
      <p><strong>Développement et intégration</strong>: {{ ASSOCIATION_NAME }}</p>
      <p><strong>Web design</strong>: {{ ASSOCIATION_NAME }}</p>
      <Heading
        level="2"
        class="!text-3xl !m:text-4xl mt-10"
      >
        Confidentialité
      </Heading>
      <p>
        La loi Informatique et Libertés du 06 janvier 1978 vous permet à tout moment de modifier ou supprimer les
        renseignements liés vous concernant et stockés dans nos bases de données. {{ ASSOCIATION_NAME }} respecte
        la législation française sur la protection de la vie privée.
      </p>
      <p>
        Selon l'article 34 de la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification,
        de rectification et de suppression des données qui vous concernent. Pour exercer ce droit, merci de nous
        contacter directement à l'adresse
        <LinkNative href="mailto:team@bdxio.fr">
          team@bdxio.fr.
        </LinkNative>
      </p>
    </section>
  </main>
</template>
