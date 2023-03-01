<template>
  <div class="back-to-top" :style="`position:fixed;bottom:40px;right:30px;`" v-show="visible" @click="backToTop">
    <img src="~/assets/img/drawings/backtotop.png" alt="icone permettant de remonter en haut de page" />
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    visibleoffset: {
      type: [String, Number],
      default: window.innerHeight
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.smoothscroll = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(window.innerHeight);
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible = pastTopOffset;
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll();
    }
  }
};
</script>

<style lang="scss" scoped>
.back-to-top {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  @include z-index(upper);

  img {
    width: 50px;
    height: 50px;
    transform: translate(25%, 25%);
  }
}
</style>
