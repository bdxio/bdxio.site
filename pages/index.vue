<template>
  <main>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $content }) {
    const page = await $content("hello").fetch();

    return {
      page,
    };
  },
};
</script>
