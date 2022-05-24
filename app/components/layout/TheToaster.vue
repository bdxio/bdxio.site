<template>
  <div class="cursor--pointer toaster" :class="toastClass" @click="resetToast">
    <div v-if="toast" class="toaster__toast">{{ toast.message }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TheToaster",
  computed: {
    ...mapState({
      toast: (state) => state.toaster.toast,
    }),
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
