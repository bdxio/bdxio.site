<template>
  <main class="section section-talk">
    <talk-section-theme :categoryId="categoryId"/>
    <talk-section-presentation :presentation="presentation"/>
    <talk-section-speaker
      v-for="(speaker, index) in speakers"
      :key="index"
      :speaker="speaker"
    />
  </main>
</template>

<script>
export default {
  name: "TalkPage",
  layout: "page",
  async asyncData(context) {
    const {
      params: { id },
      $axios,
      $config
    } = context;

    let presentation, categoryId, speakers;
    await $axios
      .get(`${$config.cmsApiUrl}/talks/${id}`, {
        params: {
          populate: "*"
        }
      })
      .then(({ data }) => {
        presentation = {
          title: data.title,
          level: data.level,
          language: data.language,
          abstract: data.abstract,
        };
        categoryId = data.category.data.id;
        speakers = [...data.speakers.data];
      });
    return {
      presentation,
      categoryId,
      speakers,
    };
  },
};
</script>

<style lang="scss" scoped>
.section-talk {
  background: #fff;
}
</style>
