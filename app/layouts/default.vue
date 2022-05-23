<template>
  <div>
    <div v-if="toast" class="toast" :class="`toast--${toast.type}`">
      {{ toast.message }}
    </div>
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
      toast: "toaster/toast",
    }),
    showNavigation() {
      console.log(this.$store);
      return this.$showNavigation ?? false;
    },
  },
};
</script>
