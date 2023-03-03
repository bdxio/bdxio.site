<script setup lang="ts">
type Volunteer = {
  id: string;
  active: boolean;
  firstname?: string;
  lastname?: string;
  jobLabel: string;
  jobCompanyName?: string;
  jobCompanyUrl?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  profilePicture?: string;
};

defineProps<{
  volunteers: Volunteer[];
}>();

function getVolunteerJobLabel(
  jobLabel: Volunteer["jobLabel"],
  jobCompanyName: Volunteer["jobCompanyName"],
  jobCompanyUrl: Volunteer["jobCompanyUrl"]
) {
  if (!jobCompanyName) {
    return jobLabel;
  }

  if (jobCompanyUrl && jobCompanyName) {
    return `${jobLabel} chez <a class="volunteer__job__link" href="${jobCompanyUrl}" target="_blank">${jobCompanyName}</a>`;
  }

  return `${jobLabel} chez ${jobCompanyName}`;
}

function getVolunteerName(
  firstname: Volunteer["firstname"],
  lastname: Volunteer["lastname"]
) {
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
</script>

<template>
  <section class="section section-association-volunteers">
    <section-title tag="h3" class="text-align--center title"
      >Découvrez les membres <br />
      de notre <span class="after">équipe</span></section-title
    >

    <flex-container tag="ul" gutter-s class="volunteers">
      <flex-item
        tag="li"
        v-for="volunteer in volunteers"
        :key="`v-${volunteer.id}`"
        xs12
        s6
        m4
        xl3
      >
        <div v-if="volunteer.active" class="volunteer card">
          <img
            class="volunteer__image"
            v-if="volunteer.profilePicture"
            :src="volunteer.profilePicture"
          />
          <div class="volunteer__infos">
            <div class="volunteer__infos__name">
              {{ getVolunteerName(volunteer.firstname, volunteer.lastname) }}
            </div>
            <div
              class="volunteer__infos__job"
              v-html="
                getVolunteerJobLabel(
                  volunteer.jobLabel,
                  volunteer.jobCompanyName,
                  volunteer.jobCompanyUrl
                )
              "
            />
            <div class="volunteer__infos__socials">
              <a
                v-if="volunteer.linkedin"
                :href="volunteer.linkedin"
                target="_blank"
                :aria-label="`Lien du profil linkedin de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img
                  src="~/assets/img/socials/linkedin.svg"
                  alt="Icône LinkedIn"
                />
              </a>
              <a
                v-if="volunteer.twitter"
                :href="volunteer.twitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img
                  src="~/assets/img/socials/twitter.svg"
                  alt="Icône Twitter"
                />
              </a>
              <a
                v-if="volunteer.github"
                :href="volunteer.github"
                target="_blank"
                :aria-label="`Lien du profil github de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img src="~/assets/img/socials/github.svg" alt="Icône Github" />
              </a>
              <a
                v-if="volunteer.website"
                :href="volunteer.website"
                target="_blank"
                :aria-label="`Lien personnalisé de de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
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
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        background: url("~/assets/img/drawings/yellow_heart.png") no-repeat
          center;
        background-size: contain;
        right: -30px;
        bottom: -20px;
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