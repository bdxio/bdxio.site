<template>
  <section class="section section-speaker">
    <div>
      <section-title section tag="h2">speakers</section-title>
      <section-title tag="h3" class="title"
        >Vous aussi, rejoignez le navire&nbsp;!</section-title
      >
      <p>
        Vous avez un talk à proposer ? Des idées à partager&nbsp;?
        <br />Rejoignez notre équipe de speakers pour cette édition 2022.
      </p>
    </div>
    <!-- <button class="bdx-button outlined" disabled>Devenir speaker</button> -->
  </section>
</template>

<script>
export default {
  name: "SectionSpeaker",
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
