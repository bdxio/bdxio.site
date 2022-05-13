<template >
  <h3 class="section-title">{{ title }}</h3>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  font-family: "Lato";
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
  color: $dark-font;
  padding: 0;
  margin: 0;
}
</style>
