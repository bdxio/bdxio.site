<template>
  <div class="show-on-youtube">
    <a :href="href" target="_blank" class="button">
      voir sur youtube
      <img src="~/assets/img/socials/youtube.svg" alt="Logo youtube" />
    </a>
  </div>
</template>

<script>
export default {
  name: "ShowOnYoutube",
  props: {
    href: {
      type: String,
      required: true
    }
  }
};
</script>

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