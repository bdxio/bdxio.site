<template>
  <div>
    <div
      class="cursor--pointer toaster"
      :class="toastClass"
      @click="resetToast"
    >
      <div v-if="toast" class="toaster__toast">{{ toast.message }}</div>
    </div>

    <Header :show-navigation="showNavigation" />
    <Nuxt />
    <Footer :show-navigation="showNavigation" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState({
      toast: (state) => state.toaster.toast,
    }),
    showNavigation() {
      return this.$showNavigation ?? false;
    },
    toastClass() {
      if (!this.toast) {
        return;
      }

      return `active toaster--${this.toast.type}`;
    },
  },
  methods: {
    ...mapActions({
      resetToast: "toaster/resetToast",
    }),
  },
};
</script>
