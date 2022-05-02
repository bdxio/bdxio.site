<template>
  <div>
    <TransitionGroup name="v-toast-anim" tag="div" class="v-toasts-container">
      <div class="v-toast" :class="`v-toast-${toast.type}`" v-for="toast in toasts" :key="toast.timestamp">
        {{ toast.message }}
      </div>
    </TransitionGroup>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState("toast", ["toasts"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/toast";
@import "~/assets/styles/vue_transitions";
</style>
