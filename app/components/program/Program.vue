<template>
  <div class="section section-program">
    <program-header />
    <div class="section-program__body">
      <program-themes v-if="showProgramme && program" :program="program" :themes="themes" />
      <speakers-lineup v-if="!showProgramme && speakers" :speakers="speakers" />
    </div>
  </div>
</template>

<script>
import ProgramHeader from "./ProgramHeader.vue";
import ProgramThemes from "./ProgramThemes.vue";
import SpeakersLineup from "./SpeakersLineup.vue";

export default {
  components: { ProgramHeader, ProgramThemes, SpeakersLineup },
  name: "programSection",
  computed: {
    showProgramme() {
      return this.$showProgramme ?? false;
    }
  },
  async fetch() {
    // While waiting for the program, we show speakers line up
    if (!this.$showProgramme) {
      const speakers = await this.$axios.$get(`${this.$config.cmsApiUrl}/speakers`, {
        params: { sort: "name:asc" }
      });

      if (!speakers) return;
      this.speakers = speakers.data;
    } else {
      const programPromise = this.$axios.$get(`${this.$config.cmsApiUrl}/talks`, {
        params: { sort: "id:asc" }
      });

      const themesPromise = this.$axios.$get(`${this.$config.cmsApiUrl}/themes`, {
        params: { sort: "id:asc" }
      });

      const [program, themes] = await Promise.all([programPromise, themesPromise]);

      if (!program) return;

      this.program = program;
      this.themes = themes;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-program {
  background-color: $white;

  &__body {
    display: flex;
  }
}
</style>
