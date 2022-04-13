<template>
  <main class="page-container">
    <h1>BDX I/O 2023</h1>
    <div>
      <a
        class="twitter-timeline"
        data-lang="fr"
        data-width="500"
        data-height="400"
        data-theme="dark"
        href="https://twitter.com/bdxio?ref_src=twsrc%5Etfw"
        >Tweets by bdxio</a
      >
    </div>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          type: "text/javascript",
          charset: "utf-8",
          async: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Lato", sans-serif;
  font-weight: 600;
}
</style>
