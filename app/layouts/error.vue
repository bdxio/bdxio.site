<template>
  <section class="section section-error">
    <div class="message">
      <code class="error">{{ error }}</code>
      <nuxt-link to="/" class="button">Retour à l'acceuil</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ErrorLayout",
  props: ["error"],
};
</script>

<style lang="scss" scoped>
.section-error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;

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
