<template>
  <main class="section section-talk">
    <talk-section-theme :themeIndex="5"/>
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
  data() {
    return {
      speakers: [{
        name: 'John Doe',
        presentation: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae maxime itaque dolore odit incidunt quibusdam! Ducimus accusamus molestiae praesentium molestias.',
      }],
    };
  },
  async asyncData({ params }) {
    return { presentation: {
      id: params.id,
      type: 'Conférence',
      duration: 45,
      level: 'Tous niveaux',
      abstract: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae maxime itaque dolore odit incidunt quibusdam! Ducimus accusamus molestiae praesentium molestias.',
    } };
  },
};
</script>

<style lang="scss" scoped>
.section-talk {
  background: #fff;
}
</style>
