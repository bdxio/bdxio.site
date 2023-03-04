<script setup lang="ts">
import { computed, inject } from "#imports";

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
const showOpenfeedback = computed(() => inject("showOpenfeedback") ?? false);
const showYoutube = computed(() => inject("showYoutube") ?? false);
</script>

<template>
  <section class="section talk-section-presentation">
    <section-title tag="h2">
      {{ presentation.title }}
    </section-title>
    <img
      src="~/assets/img/drawings/cyan_scribble_3.png"
      alt="Gribouillages BDXI/O"
      aria-hidden="true"
      class="underline-scribble"
    />
    <flex-container class="tag-container">
      <flex-item class="tag"
        >{{ presentation.format }} - {{ duration }}min</flex-item
      >
      <flex-item class="tag">{{ presentation.level }}</flex-item>
      <flex-item class="tag" v-if="presentation.language">{{
        presentation.language
      }}</flex-item>
      <flex-item v-if="showOpenfeedback && presentation.openfeedbackUrl">
        <open-feedback :href="presentation.openfeedbackUrl" />
      </flex-item>
      <flex-item v-if="showYoutube && presentation.youtubeUrl">
        <show-on-youtube :href="presentation.youtubeUrl" />
      </flex-item>
    </flex-container>
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
