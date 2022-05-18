<template>
  <div class="container">
    <img
      :src="require(`~/assets/img/drawings/${imgName}`)"
      :alt="imgAlt"
      aria-hidden="true"
      :style="{
        zIndex,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "BdxDrawing",
  props: {
    imgName: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: "Pictogramme dessiné BDX I/O",
    },
    scale: {
      type: Number,
      default: 1,
    },
    rotation: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 998,
    },
  },
};
</script>

<style lang="scss" scoped></style>
