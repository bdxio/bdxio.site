<template>
  <div>
    <div class="toast" :class="{ active: toast }">
      <div
        v-if="toast"
        class="toast__item"
        :class="`toast__item--${toast.type}`"
      >
        {{ toast.message }}
      </div>
    </div>
    <Header :show-navigation="showNavigation" />
    <Nuxt />
    <Footer :show-navigation="showNavigation" />
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
  computed: {
    showNavigation() {
      return this.$showNavigation ?? false;
    },
    toast() {
      return this.$store.state.toast.toast;
    },
  },
};
</script>
