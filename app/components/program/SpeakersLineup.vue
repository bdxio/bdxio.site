<template>
  <div class="speakers-lineup">
    <flex-container tag="ul" gutter-s class="speakers">
      <flex-item
        tag="li"
        v-for="{ id, /*bio,*/ name, twitter = null, github = null, company = null, photoUrl = null } in speakers"
        :key="`speaker-${id}`"
        xs12
        s6
        m4
        xl3
      >
        <div v-if="active" class="speaker card">
          <img class="speaker__image" v-if="profilePicture" :src="getSpeakerImage(photoUrl)" />
          <div class="speaker__infos">
            <div class="speaker__infos__name">
              {{ name }}
            </div>
            <div class="speaker__infos__socials">
              <a
                v-if="twitter"
                :href="twitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${name}`"
                class="speaker__infos__socials__link"
              >
                <img src="~/assets/img/socials/twitter.svg" alt="Icône Twitter" />
              </a>
              <a
                v-if="github"
                :href="github"
                target="_blank"
                :aria-label="`Lien du profil github de ${name}`"
                class="speaker__infos__socials__link"
              >
                <img src="~/assets/img/socials/github.svg" alt="Icône Github" />
              </a>
              <a
                v-if="company"
                :href="company"
                target="_blank"
                :aria-label="`Lien du profil github de ${name}`"
                class="speaker__infos__socials__link"
              >
                {company}
              </a>
            </div>
          </div>
        </div>
      </flex-item>
    </flex-container>
  </div>
</template>

<script>
export default {
  name: "SpeakersLineup",
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  methods: {
    mounted() {
      console.log("cjiewjofiew", this.props);
    },
    getSpeakerImage(profilePicture) {
      const {
        data: {
          attributes: { url = null }
        }
      } = profilePicture;
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.speakers-lineup {
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
