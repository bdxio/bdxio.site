<script setup lang="ts">
import { getSpeakerSocialsLinks } from "#imports";
import { Heading, SectionTalkSpeakerPicture, NuxtImg } from "#components";
import type { Speaker } from "@bdxio/bdxio.types";

const props = defineProps<{
  speaker: Speaker;
}>();

const speakerSocialLinks = getSpeakerSocialsLinks(props.speaker);
</script>

<template>
  <section class="bg-grey-100 p-12">
    <div class="flex items-center">
      <SectionTalkSpeakerPicture :speaker="speaker" />
      <Heading
        level="3"
        class="!mb-0 !text-2xl"
      >
        {{ speaker.name }}
      </Heading>
    </div>
    <ul
      v-if="speakerSocialLinks.length > 0"
      class="flex flex-wrap gap-4 mt-8"
    >
      <li
        v-for="(link, index) in speakerSocialLinks"
        :key="index"
      >
        <a
          v-if="link.url"
          :href="link.url"
          target="_blank"
          :aria-label="`Lien vers le ${link.label} du speaker ${speaker.name} - Nouvelle fenêtre`"
        >
          <NuxtImg
            :src="`/images/${link.imgPath}`"
            :alt="link.alt"
            :aria-label="link.alt"
            loading="lazy"
            :width="24"
            :height="24"
          />
        </a>
      </li>
    </ul>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-if="speaker.bio"
      class="mt-8"
      v-html="$md.render(speaker.bio)"
    />
    <!-- eslint-enable vue/no-v-html -->
  </section>
</template>
