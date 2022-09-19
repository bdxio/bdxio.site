<template>
  <section class="talk-section-speaker">
    <section-title tag="h3">
      <img class="speaker-picture" :src="speaker.photoUrl" :alt="`Photo de ${speaker.name}`" />
      <span>{{ speaker.name }}</span>
    </section-title>
    <flex-container tag="ul" class="speaker-infos" v-if="speakerLinks.length">
      <flex-item v-for="(link, index) in speakerLinks" :key="index" tag="li">
        <img :src="require(`~/assets/img/${link.imgPath}`)" :alt="link.alt" class="info-logo" />
        <a :href="link.url" target="_blank" v-if="link.url">
          {{ link.value }}
        </a>
        <span v-else> {{ link.value }}</span>
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
        ["name", "bio"].forEach((key) => {
          if (!Object.prototype.hasOwnProperty.call(value, key)) {
            result = false;
          }
        });
        return result;
      }
    }
  },
  computed: {
    speakerLinks() {
      const result = [];
      if (this.speaker.twitter) {
        result.push({
          imgPath: "socials/twitter.svg",
          alt: "Icône Twitter BDX I/O",
          value: this.getSocialPseudo(this.speaker.twitter),
          url: this.getSocialUrl(this.speaker.twitter, "twitter")
        });
      }
      if (this.speaker.company) {
        result.push({
          imgPath: "icons/company.svg",
          alt: "Icône entreprise BDX I/O",
          value: this.speaker.company
        });
      }
      if (this.speaker.github) {
        result.push({
          imgPath: "socials/github.svg",
          alt: "Icône Github BDX I/O",
          value: this.getSocialPseudo(this.speaker.github),
          url: this.getSocialUrl(this.speaker.github, "github")
        });
      }
      if (this.speaker.address) {
        result.push({
          imgPath: "icons/location.svg",
          alt: "Icône adresse BDX I/O",
          value: this.speaker.address
        });
      }
      return result;
    }
  },
  methods: {
    getSocialPseudo(link) {
      if (link.startsWith("http")) {
        const pseudo = link.split("/")[link.split("/").length - 1];
        return `@${pseudo}`;
      }

      if (!link.startsWith("@")) {
        return `@${link}`;
      }

      return link;
    },
    getSocialUrl(link, social) {
      if (link.startsWith("http")) {
        return link;
      }

      return `https://${social}/${link.replace("@", "")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.talk-section-speaker {
  background: #f5f5f5;
  padding: 50px;

  &:not(:last-of-type) {
    margin-bottom: 80px;
  }

  h3 {
    margin: 0;
    font-family: "Lato";
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
