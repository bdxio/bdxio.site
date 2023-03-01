<template>
  <section class="section section-speaker" id="become-speaker">
    <div>
      <section-title section tag="h2">speakers</section-title>
      <section-title tag="h3" class="title"
        >Vous aussi, rejoignez le navire&nbsp;!</section-title
      >
      <p>
        Vous avez un talk à proposer&nbsp;? Des idées à partager&nbsp;?
        <br />Rejoignez notre équipe de speakers pour cette édition 2022.
      </p>
    </div>
    <a
      v-if="showCfp"
      class="button button-icon button-secondary button-secondary--grey"
      href="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
      target="_blank"
    >
      Devenir speaker
      <open-new-window color="#373739" borderColor="#373739" />
    </a>
    <button
      v-else
      class="button button-secondary button-secondary--grey disabled"
      disabled
    >
      Non disponible
    </button>
  </section>
</template>

<script>
import css from "~/assets/styles/main.scss?inline";

export default {
  name: "HomepageSectionSpeaker",
  computed: {
    showCfp() {
      return this.$showCfp ?? false;
    },
    iconColor() {
      return css.darkFont ?? "#000000";
    },
    iconBorderColor() {
      return css.darkFont ?? "#000000";
    },
  },
};
</script>

<style lang="scss" scoped>
.section-speaker {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $secondary;
  width: 100%;
}
</style>
