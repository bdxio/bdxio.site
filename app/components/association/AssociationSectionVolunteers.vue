<template>
  <section class="section section-association-volunteers">
    <section-title tag="h3" class="text-align--center title"
      >Découvrez les membres <br />
      de notre <span class="after">équipe</span></section-title
    >

    <flex-container tag="ul" gutter-s class="volunteers">
      <flex-item
        tag="li"
        v-for="{
          id,
          active,
          firstname,
          lastname,
          jobLabel = null,
          jobCompanyName = null,
          jobCompanyUrl = null,
          linkedin = null,
          twitter = null,
          github = null,
          website = null,
          profilePicture = null
        } in volunteers"
        :key="`volunteer-${id}`"
        xs12
        s6
        m4
        xl3
      >
        <div v-if="active" class="volunteer card">
          <img class="volunteer__image" v-if="profilePicture" :src="getVolunteerImage(profilePicture)" />
          <div class="volunteer__infos">
            <div class="volunteer__infos__name" v-if="getVolunteerName(firstname, lastname)">
              {{ getVolunteerName(firstname, lastname) }}
            </div>
            <div class="volunteer__infos__job" v-html="getVolunteerJobLabel(jobLabel, jobCompanyName, jobCompanyUrl)" />
            <div class="volunteer__infos__socials">
              <a
                v-if="linkedin"
                :href="linkedin"
                target="_blank"
                :aria-label="`Lien du profil linkedin de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/linkedin.svg" alt="Icône LinkedIn" />
              </a>
              <a
                v-if="twitter"
                :href="twitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/twitter.svg" alt="Icône Twitter" />
              </a>
              <a
                v-if="github"
                :href="github"
                target="_blank"
                :aria-label="`Lien du profil github de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/github.svg" alt="Icône Github" />
              </a>
              <a
                v-if="website"
                :href="website"
                target="_blank"
                :aria-label="`Lien personnalisé de de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/website.svg" alt="Icône lien" />
              </a>
            </div>
          </div>
        </div>
      </flex-item>
    </flex-container>
  </section>
</template>


<script>
export default {
  name: "AssociationSectionVolunteers",
  props: {
    volunteers: {
      type: Array,
      required: true
    }
  },
  methods: {
    getVolunteerImage(profilePicture) {
      const {
        data: {
          attributes: { url = null }
        }
      } = profilePicture;
      return url;
    },
    getVolunteerJobLabel(jobLabel, jobCompanyName, jobCompanyUrl) {
      if (!jobCompanyName) {
        return jobLabel;
      }

      if (jobCompanyUrl && jobCompanyName) {
        return `${jobLabel} chez <a class="volunteer__job__link" href="${jobCompanyUrl}" target="_blank">${jobCompanyName}</a>`;
      }

      return `${jobLabel} chez ${jobCompanyName}`;
    },
    getVolunteerName(firstname = null, lastname = null) {
      if (!firstname && !lastname) {
        return null;
      }

      if (!firstname) {
        return lastname;
      }

      if (!lastname) {
        return firstname;
      }

      return `${firstname} ${lastname}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-association-volunteers {
  background: $white;
  padding-top: 0;
  .title {
    margin-top: 0;
    .after {
      @include positionRelative;
      &::after {
        content: "";
        width: 60px;
        height: 60px;
        position: absolute;
        z-index: -1;
        background: url("~/assets/img/drawings/yellow_heart.png") no-repeat center;
        background-size: contain;
        right: -60px;
      }
    }
  }
}

.volunteers {
  margin-top: 100px;
}

.volunteer {
  border-radius: 8px;
  overflow: hidden;
  max-width: 265px;
  height: 430px;
  margin-bottom: $spc-xl;
  display: block;
  margin: 0 auto $spc-xl auto;

  &__image {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__infos {
    padding: $spc-xs;

    &__name {
      font-size: 24px;
      font-weight: $font-weight-bold;
      margin-bottom: $spc-xxs;
    }
    &__job {
      color: $green;
      margin-bottom: $spc-m;
    }

    &__socials {
      display: flex;
      justify-content: center;
      gap: 16px;
    }
  }
}
</style>