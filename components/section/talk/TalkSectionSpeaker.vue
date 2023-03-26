<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { computed } from "#imports";
import { SectionTitle, SectionTalkSpeakerProfile } from "#components";

type Speaker = {
  name: string;
  bio: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
};

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
      imgPath: "socials/twitter.svg",
      alt: "Icône Twitter",
      url: getSocialUrl(props.speaker.twitter, "twitter"),
    });
  }
  if (props.speaker.github) {
    socials.push({
      imgPath: "socials/github.svg",
      alt: "Icône Github",
      url: getSocialUrl(props.speaker.github, "github"),
    });
  }
  if (props.speaker.linkedin) {
    socials.push({
      imgPath: "socials/linkedin.svg",
      alt: "Icône Linkedin",
      url: getSocialUrl(props.speaker.linkedin, "linkedin"),
    });
  }
  if (props.speaker.website) {
    socials.push({
      imgPath: "socials/website.svg",
      alt: "Icône site personnel",
      url: props.speaker.website,
    });
  }

  return socials;
});
</script>

<template>
  <section class="talk-section-speaker">
    <div class="talk-section-speaker__header">
      <SectionTitle tag="h3">
        <SectionTalkSpeakerProfile :speaker="speaker" />
        <span>{{ speaker.name }}</span>
      </SectionTitle>
      <div
        v-if="speakerSocialLinks.length > 0"
        tag="ul"
        class="speaker-socials"
      >
        <div
          v-for="(link, index) in speakerSocialLinks"
          :key="index"
          tag="li"
          class="speaker-infos__details"
        >
          <a
            v-if="link.url"
            :href="link.url"
            target="_blank"
          >
            <img
              :src="`/images/${link.imgPath}`"
              :alt="link.alt"
              class="info-logo"
            >
          </a>
        </div>
      </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <p
      v-if="speaker.bio"
      v-html="$md.render(speaker.bio)" 
    />
  </section>
</template>

<style lang="scss" scoped>
.talk-section-speaker {
  background: #f5f5f5;
  padding: 50px;

  @include mobileFirst(m) {
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 80px;
  }

  h3 {
    margin: 0;
    font-family: "Lato";
    color: #000;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  .speaker-socials {
    margin-top: $spc-l;
    gap: 20px;

    @include mobileFirst(m) {
      margin-top: 0;
      margin-left: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .speaker-infos {
    gap: 80px;
    margin: 60px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info-logo {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
    }
  }

  p {
    margin: 0;
  }
}
</style>
