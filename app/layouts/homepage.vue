<template>
  <div>
    <TheToaster />
    <TheHeader background="dark" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheToaster from "~/components/layout/TheToaster.vue";
import TheHeader from "~/components/layout/TheHeader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheToaster,
    TheHeader,
    TheFooter,
  },
};
</script>
