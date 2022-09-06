<template>
  <section class="section-themes">
    <div class="theme-item">
      <span class="theme" :class="`theme--${themeIndex}`">{{ themes[themeIndex - 1] }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TalkSectionTheme",
  props: {
    themeIndex: {
      type: Number,
      required: true,
      validator: (value) => value > 0 && value <= 7,
    },
  },
  data() {
    return {
      themes: [
        'Frontend',
        'Backend',
        'Big Data & IA',
        'Design & UX',
        'Cloud & Dev.Sec.Ops',
        'Methodo & Architecture',
        'Hors piste',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/theme";
</style>
