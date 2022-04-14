<template>
  <div>
    <TransitionGroup name="v-toast-anim" tag="div" class="v-toasts-container">
      <div class="v-toast" :class="`v-toast-${toast.type}`" v-for="toast in toasts" :key="toast.timestamp">
        {{ toast.message }}
      </div>
    </TransitionGroup>
    <TheHeader/>
    <Nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    ...mapState('toast', [
      'toasts',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/toast";
@import "~/assets/styles/vue_transitions";
</style>
