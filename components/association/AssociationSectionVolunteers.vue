<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { SectionTitle, NuxtLink } from "#components";
import iconGithub from "/images/socials/github.svg";
import iconLinkedin from "/images/socials/linkedin.svg";
import iconTwitter from "/images/socials/twitter.svg";
import iconWebsite from "/images/socials/website.svg";

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
    <SectionTitle tag="h3" class="text-align--center title">
      Découvrez les membres <br />
      de notre <span class="after">équipe</span>
    </SectionTitle>

    <div tag="ul" gutter-s class="volunteers">
      <div
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
            v-if="volunteer.profilePicture?.url"
            :src="volunteer.profilePicture?.url"
            class="volunteer__image"
          />
          <div class="volunteer__infos">
            <div class="volunteer__infos__name">
              {{ getVolunteerName(volunteer.firstname, volunteer.lastname) }}
            </div>
            <div class="volunteer__infos__job">
              <template v-if="!volunteer.jobCompanyName">
                {{ volunteer.jobLabel }}
              </template>
              <template
                v-else-if="volunteer.jobCompanyUrl && volunteer.jobCompanyName"
              >
                {{ volunteer.jobLabel }} chez
                <NuxtLink
                  class="volunteer__job__link"
                  :to="volunteer.jobCompanyUrl"
                  target="_blank"
                >
                  {{ volunteer.jobCompanyName }}
                </NuxtLink>
              </template>
              <template v-else>
                {{ volunteer.jobLabel }} chez {{ volunteer.jobCompanyName }}
              </template>
            </div>
            <div class="volunteer__infos__socials">
              <NuxtLink
                v-if="volunteer.linkedin"
                :to="volunteer.linkedin"
                target="_blank"
                :aria-label="`Lien du profil linkedin de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img :src="iconLinkedin" alt="Icône LinkedIn" />
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.twitter"
                :to="volunteer.twitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img :src="iconTwitter" alt="Icône Twitter" />
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.github"
                :to="volunteer.github"
                target="_blank"
                :aria-label="`Lien du profil github de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img :src="iconGithub" alt="Icône Github" />
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.website"
                :to="volunteer.website"
                target="_blank"
                :aria-label="`Lien personnalisé de de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
                class="volunteer__infos__socials__link"
              >
                <img :src="iconWebsite" alt="Icône lien" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        background: url("/images/drawings/yellow_heart.png") no-repeat center;
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
