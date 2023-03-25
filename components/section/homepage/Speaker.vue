<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { SectionTitle, IconsOpenNewWindow, LinkSecondary } from "#components";

const { SHOW_LINK_CFP } = useNuxtApp();
</script>

<template>
  <section
    id="become-speaker"
    class="section flex flex-col justify-between items-start bg-bdxio-yellow-base w-full"
  >
    <div>
      <SectionTitle
        section
        tag="h2"
      >
        speakers
      </SectionTitle>
      <SectionTitle
        tag="h3"
        class="title"
      >
        Vous aussi, rejoignez le navire&nbsp;!
      </SectionTitle>
      <p>
        Vous avez un talk à proposer&nbsp;? Des idées à partager&nbsp;?
        <br>Rejoignez notre équipe de speakers pour cette édition 2022.
      </p>
    </div>
    <LinkSecondary
      v-if="SHOW_LINK_CFP"
      color="grey"
      to="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
      target="_blank"
    >
      Devenir speaker
      <IconsOpenNewWindow
        color="#373739"
        border-color="#373739"
      />
    </LinkSecondary>
    <ButtonSecondary
      v-else
      color="grey"
      disabled
    >
      Non disponible
    </ButtonSecondary>
  </section>
</template>