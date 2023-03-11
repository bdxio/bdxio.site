<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";

defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="href" target="_blank" class="openfeedback">
    donnez votre avis sur<br />
    <img src="~/assets/img/logo-openfeedback.png" alt="Logo openfeedback" />
  </a>
</template>

<style lang="scss" scoped>
.openfeedback {
  font-size: 18px;
  text-align: center;
  line-height: 1;
  margin-top: $spc-m;

  &:hover,
  &:active,
  &:visited {
    color: $primary-dark;
  }

  img {
    height: 30px;
  }

  @include mobileFirst(s) {
    margin-left: $spc-l;
    margin-top: 0;
  }
}
</style>
