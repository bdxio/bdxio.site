<template>
  <section class="section section-association-volunteers">
    <section-title tag="h3" class="text-align--center title"
      >Découvrez les membres <br />
      de notre <span class="after">équipe</span></section-title
    >

    <flex-container tag="ul">
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
          socialLinkedin = null,
          socialTwitter = null,
          socialGithub = null
        } in volunteers"
        :key="`volunteer-${id}`"
        xs6
        s4
        l3
      >
        <div v-if="active" class="volunteer card">
          <!-- <div class="volunteer__image"> -->
          <img class="volunteer__image" />
          <!-- </div> -->
          <div class="volunteer__infos">
            <div class="volunteer__infos__name" v-if="getVolunteerName(firstname, lastname)">
              {{ getVolunteerName(firstname, lastname) }}
            </div>
            <div class="volunteer__infos__job" v-html="getVolunteerJobLabel(jobLabel, jobCompanyName, jobCompanyUrl)" />
            <div class="volunteer__infos__socials">
              <a
                v-if="socialLinkedin"
                :href="socialLinkedin"
                target="_blank"
                :aria-label="`Lien du profil linkedin de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/linkedin.svg" alt="Icône LinkedIn" />
              </a>
              <a
                v-if="socialTwitter"
                :href="socialTwitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/twitter.svg" alt="Icône LinkedIn" />
              </a>
              <a
                v-if="socialGithub"
                :href="socialGithub"
                target="_blank"
                :aria-label="`Lien du profil github de ${getVolunteerName(firstname, lastname)}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/github.svg" alt="Icône LinkedIn" />
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
  .title {
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

.volunteer {
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

      &__link {
        &:not(:last-of-type) {
          margin-right: $spc-s;
        }
      }
    }
  }
}
</style>