<template>
  <div>
    <img v-if="speaker.photoUrl" class="speaker-picture" :src="speaker.photoUrl" :alt="`Photo de ${speaker.name}`" />
    <div v-else class="custom-profil">
      <span>{{ speakerInitials }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpeakerProfilComponent",
  props: {
    speaker: {
      type: Object,
      validator: (s) => s.name
    }
  },
  computed: {
    speakerInitials() {
      const splittedSpeakerName = this.speaker.name.split(" ");
      return `${splittedSpeakerName[0][0].toUpperCase()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.speaker-picture {
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-right: $spc-s;
  object-fit: cover;
}

.custom-profil {
  border-radius: 50%;
  background: $primary-light;
  color: white;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: $spc-s;

  span {
    line-height: 1;
  }
}
</style>