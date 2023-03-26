<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { useNuxtApp, computed } from "#imports";
import {
  SectionTitle,
  ShowOnYoutube,
  SectionAssociationOpenFeedback,
} from "#components";

const props = defineProps<{
  presentation: {
    title: string;
    format: string;
    level: string;
    abstract: string;
    openfeedbackUrl: string;
    youtubeUrl: string;
  };
}>();

const { $SHOW_LINK_OPENFEEDBACK, $SHOW_LINK_YOUTUBE } = useNuxtApp();

const duration = computed(() => {
  switch (props.presentation.format) {
    case "Quickie":
      return 15;
    case "Hands on lab":
      return 100;
    default:
      return 45;
  }
});
</script>

<template>
  <section class="section talk-section-presentation">
    <SectionTitle tag="h2">
      {{ presentation.title }}
    </SectionTitle>
    <img
      src="/images/drawings/cyan_scribble_3.png"
      alt="Gribouillages BDXI/O"
      aria-hidden="true"
      class="underline-scribble"
    >
    <div class="tag-container">
      <div class="tag">
        {{ presentation.format }} - {{ duration }}min
      </div>
      <div class="tag">
        {{ presentation.level }}
      </div>
      <div
        v-if="presentation.language"
        class="tag"
      >
        {{ presentation.language }}
      </div>
      <div v-if="$SHOW_LINK_OPENFEEDBACK && presentation.openfeedbackUrl">
        <SectionAssociationOpenFeedback :href="presentation.openfeedbackUrl" />
      </div>
      <div v-if="$SHOW_LINK_YOUTUBE && presentation.youtubeUrl">
        <ShowOnYoutube :href="presentation.youtubeUrl" />
      </div>
    </div>
    <p v-html="$md.render(presentation.abstract)" />
  </section>
</template>

<style lang="scss" scoped>
.talk-section-presentation {
  padding-top: 0;
  padding-bottom: 5rem;
}

h2 {
  margin-bottom: 0;
}

.underline-scribble {
  margin: 10px 0 33px -69px;
}

.tag-container {
  gap: 20px;
}

.tag {
  border: 2px solid #242457;
  border-radius: 130px;
  font-size: 18px;
  padding: 12px 20px;
  line-height: 18px;
  height: 46px;
}

.openfeedback {
  display: block;
  margin-left: 0;
}
</style>
