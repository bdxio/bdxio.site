<script setup lang="ts">
import { computed } from "#imports";
import { Heading, SectionTalkSpeakerPicture, NuxtImg } from "#components";
import type { Speaker } from "@bdxio/bdxio.types";

const props = defineProps<{
  speaker: Speaker;
}>();

const getSocialUrl = (
  link: string,
  social:
    | Speaker["twitter"]
    | Speaker["github"]
    | Speaker["website"]
    | Speaker["linkedin"],
) => {
  if (link.startsWith("http")) {
    return link;
  }
  return `https://${social}.com/${link.replace("@", "")}`;
};

const speakerSocialLinks = computed(() => {
  const socials = [];
  if (props.speaker.twitter) {
    socials.push({
      label: "twitter",
      imgPath: "socials/twitter.svg",
      alt: "Icône Twitter",
      url: getSocialUrl(props.speaker.twitter, "twitter"),
    });
  }
  if (props.speaker.github) {
    socials.push({
      label: "github",
      imgPath: "socials/github.svg",
      alt: "Icône Github",
      url: getSocialUrl(props.speaker.github, "github"),
    });
  }
  if (props.speaker.linkedin) {
    socials.push({
      label: "linkedin",
      imgPath: "socials/linkedin.svg",
      alt: "Icône Linkedin",
      url: getSocialUrl(props.speaker.linkedin, "linkedin"),
    });
  }
  if (props.speaker.website) {
    socials.push({
      label: "site",
      imgPath: "socials/website.svg",
      alt: "Icône site personnel",
      url: props.speaker.website,
    });
  }

  return socials;
});
</script>

<template>
  <section class="bg-grey-100 p-12">
    <div class="flex items-center mb-8">
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
      class="flex flex-wrap gap-4 mb-8"
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
          />
        </a>
      </li>
    </ul>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-if="speaker.bio"
      v-html="$md.render(speaker.bio)"
    />
    <!-- eslint-enable vue/no-v-html -->
  </section>
</template>
