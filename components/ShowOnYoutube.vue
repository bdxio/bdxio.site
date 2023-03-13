<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import iconYoutube from "~/assets/img/socials/youtube.svg";

defineProps<{
  href: string;
}>();
</script>

<template>
  <div class="show-on-youtube">
    <a :href="href" target="_blank" class="button">
      voir sur youtube
      <img :src="iconYoutube" alt="Logo youtube" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.show-on-youtube {
  a {
    padding: 2px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
