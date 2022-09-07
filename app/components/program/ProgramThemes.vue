<template>
  <div class="program-themes">
    <span class="program-themes__title">Filtrer par thème</span>
    <div class="program-themes__body">Themes</div>
  </div>
</template>

<script>
export default {
  name: "ProgramThemes"
};
</script>

<style lang="scss" scoped>
.program-themes {
  background-color: $grey-100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px 105px;

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #72767a;
    margin-bottom: 40px;
  }

  &__body {
  }
}
</style>
