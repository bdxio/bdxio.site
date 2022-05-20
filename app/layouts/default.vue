<template>
  <div>
    <!-- <Transition
      name="v-toast-anim"
      tag="div"
      class="v-toasts-container"
      v-if="toast"
    > -->
    <div class="toast" :class="`toast--${toast.type}`">
      {{ toast.message || "toooooooast" }}
    </div>
    <!-- </Transition> -->
    <Header :show-navigation="showNavigation" />
    <Nuxt />
    <Footer :show-navigation="showNavigation" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters({
      toast: "toast/toast",
    }),
    showNavigation() {
      return this.$showNavigation ?? false;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
}
</style>
