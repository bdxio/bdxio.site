<template>
  <div class="container">
    <div class="drawing-container" v-for="drawing in drawings" :key="drawing">
      <h4>
        {{ drawing }}
      </h4>
      <BdxDrawing :img-name="drawing" />
    </div>
  </div>
</template>

<script>
import BdxDrawing from "~/components/BdxDrawing.vue";

export default {
  name: "LibraryPage",
  components: {
    BdxDrawing,
  },
  data() {
    return {
      drawings: [],
    };
  },
  methods: {
    importAll(r) {
      let images = {};
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return Object.keys(images);
    },
  },
  mounted() {
    this.drawings = this.importAll(
      require.context("~/assets/img/drawings/", true, /\.png$/)
    );
  },
};
</script>

<style lang="scss" scoped>
.drawing-container {
  display: inline-block;
}
</style>
