<template>
  <section class="talk-section-speaker">
    <section-title tag="h3">
      <img
        class="speaker-picture"
        :src="speaker.photoUrl"
        :alt="`Photo de ${speaker.name}`"
      />
      <span>{{ speaker.name }}</span>
    </section-title>
    <flex-container tag="ul" class="speaker-infos">
      <flex-item
        v-for="(speakerItem, index) in speakerInfos"
        :key="index"
        tag="li"
      >
        <img
          :src="require(`~/assets/img/${speakerItem.imgPath}`)"
          :alt="speakerItem.alt"
          class="info-logo"
        />
        <span>
          {{ speakerItem.value }}
        </span>
      </flex-item>
    </flex-container>
    <p>
      {{ speaker.bio }}
    </p>
  </section>
</template>

<script>
export default {
  name: "TalkSectionSpeaker",
  props: {
    speaker: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = true;
        ['name', 'bio'].forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(value, key)) {
            result = false;
          }
        });
        return result;
      },
    },
  },
  computed: {
    speakerInfos() {
      const result = [];
      if (this.speaker.twitter) {
        result.push({
          imgPath: 'socials/twitter.svg',
          alt: 'Icône Twitter BDX I/O',
          value: this.speaker.twitter,
        });
      }
      if (this.speaker.company) {
        result.push({
          imgPath: 'icons/company.svg',
          alt: 'Icône entreprise BDX I/O',
          value: this.speaker.company,
        });
      }
      if (this.speaker.github) {
        result.push({
          imgPath: 'socials/github.svg',
          alt: 'Icône Github BDX I/O',
          value: this.speaker.github,
        });
      }
      if (this.speaker.address) {
        result.push({
          imgPath: 'icons/location.svg',
          alt: 'Icône adresse BDX I/O',
          value: this.speaker.address,
        });
      }
      return result;
    }
  },
};
</script>

<style lang="scss" scoped>
.talk-section-speaker {
  background: #f5f5f5;
  padding: 50px;

  h3 {
    margin: 0;
    font-family: 'Lato';
    color: #000;
    font-size: 22px;
    display: flex;
    align-items: center;

    .speaker-picture {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      margin-right: 23px;
      object-fit: cover;
    }
  }

  .speaker-infos {
    gap: 80px;
    margin: 60px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      .info-logo {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
    }
  }

  p {
    margin: 0;
  }
}
</style>
