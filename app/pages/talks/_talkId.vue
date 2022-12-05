<template>
  <main class="section section-talk">
    <talk-section-theme :category="category" />
    <talk-section-presentation :presentation="presentation" />
    <talk-section-speaker v-for="(speaker, index) in speakers" :key="index" :speaker="speaker" />
    <nuxt-link to="/schedule" class="button button-primary button-primary--light backto">Voir le programme</nuxt-link>
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

    const response = await $axios.get(`${$config.cmsApiUrl}/talks/${talkId}`, {
      params: {
        populate: "*"
      }
    });

    const {
      data: {
        data: { attributes }
      }
    } = response;

    return {
      presentation: {
        title: attributes.title || null,
        level: attributes.level || null,
        language: attributes.language || null,
        abstract: attributes.abstract || null,
        format: attributes.format.data.attributes.name || null,
        openfeedbackUrl: attributes.openfeedbackUrl || null,
        youtubeUrl: attributes.youtubeUrl || null
      },
      category: attributes.category.data.attributes.name || null,
      speakers: [...attributes.speakers.data.map(({ attributes }) => attributes)]
    };
  }
};
</script>

<style lang="scss" scoped>
.section-talk {
  background: #fff;
}

.backto {
  margin: $spc-l auto 0 auto;
  display: block;
}
</style>
