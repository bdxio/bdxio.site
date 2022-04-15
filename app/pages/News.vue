<template>
  <main class="page-container">
    <h1>Actualités</h1>
    <div>
      <a class="twitter-timeline" data-lang="fr" data-width="500" data-height="400" data-theme="dark" href="https://twitter.com/bdxio?ref_src=twsrc%5Etfw">Tweets by bdxio</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </main>
</template>

<script>
export default {
  name: "NewsPage",
  head() {
    return {
      title: 'Actualités | BDX I/O',
    };
  },
};
</script>
