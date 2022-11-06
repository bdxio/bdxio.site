<template>
  <div>
    <the-header background="light" />
    <section class="section section-error">
      <div class="message">
        <img src="~/assets/img/404-img.png" alt="Une illlustration représentant un ordinateur retro" />
        <p>
          Oups ! Il semblerait qu'une erreur soit survenue. N'hésitez pas à utiliser la navigation pour retourner sur le
          site
        </p>
      </div>
    </section>
    <the-footer />
    <go-to-top />
  </div>
</template>

<script>
export default {
  name: "ErrorLayout",
  props: ["error"]
};
</script>

<style lang="scss" scoped>
.section-error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 500px;
    }

    .error {
      padding: 30px;
      background: $black;
      border-radius: 12px;
      color: $light;
    }
    a {
      margin-top: $spc-m;
    }
  }
}
</style>
