<template>
  <section class="talk-section-speaker">
    <div class="talk-section-speaker__header">
      <section-title tag="h3">
        <img class="speaker-picture" :src="speaker.photoUrl" :alt="`Photo de ${speaker.name}`" />
        <span>{{ speaker.name }}</span>
      </section-title>
      <flex-container tag="ul" class="speaker-socials" v-if="speakerSocialLinks.length">
        <flex-item v-for="(link, index) in speakerSocialLinks" :key="index" tag="li" class="speaker-infos__details">
          <a :href="link.url" target="_blank" v-if="link.url">
            <img :src="require(`~/assets/img/${link.imgPath}`)" :alt="link.alt" class="info-logo" />
          </a>
        </flex-item>
      </flex-container>
    </div>
    <p v-html="$md.render(speaker.bio)" />
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
    speakerSocialLinks() {
      const result = [];
      if (this.speaker.twitter) {
        result.push({
          imgPath: "socials/twitter.svg",
          alt: "Icône Twitter",
          url: this.getSocialUrl(this.speaker.twitter, "twitter")
        });
      }
      if (this.speaker.github) {
        result.push({
          imgPath: "socials/github.svg",
          alt: "Icône Github",
          url: this.getSocialUrl(this.speaker.github, "github")
        });
      }
      if (this.speaker.linkedin) {
        result.push({
          imgPath: "socials/linkedin.svg",
          alt: "Icône Linkedin",
          url: this.getSocialUrl(this.speaker.linkedin, "linkedin")
        });
      }
      if (this.speaker.website) {
        result.push({
          imgPath: "socials/website.svg",
          alt: "Icône site personnel",
          url: this.speaker.website
        });
      }

      return result;
    }
  },
  methods: {
    getSocialUrl(link, social) {
      if (link.startsWith("http")) {
        return link;
      }
      return `https://${social}.com/${link.replace("@", "")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.talk-section-speaker {
  background: #f5f5f5;
  padding: 50px;

  @include mobileFirst(m) {
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

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

  .speaker-socials {
    margin-top: $spc-l;
    gap: 20px;

    @include mobileFirst(m) {
      margin-top: 0;
      margin-left: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .speaker-infos {
    gap: 80px;
    margin: 60px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
