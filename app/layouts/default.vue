<template>
  <div>
    <TheHeader/>
    <Nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>

</style>
