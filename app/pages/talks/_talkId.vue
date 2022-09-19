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
      params: { talkId },
      $axios,
      $config
    } = context;

    let presentation, categoryId, speakers;
    await $axios
      .get(`${$config.cmsApiUrl}/talks/${talkId}`, {
        params: {
          populate: "*"
        }
      })
      .then(({ data: { data: { attributes } } }) => {
        presentation = {
          title: attributes.title,
          level: attributes.level,
          language: attributes.language,
          abstract: attributes.abstract,
          format: attributes.format.data.attributes.name,
        };
        categoryId = attributes.category.data.id;
        speakers = [...attributes.speakers.data.map(({ attributes }) => attributes)];
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
