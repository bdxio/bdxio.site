<script setup lang="ts">
import { defineProps } from "vue";
import { SectionTitle, NuxtLink, } from "#components";

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
  profilePicture?: {
    url: string
  };
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
  <section class="bg-white pt-0 section section-association-volunteers">
    <SectionTitle
      tag="h3"
      class="text-center mt-0 title"
    >
      Découvrez les membres <br>
      de notre <span class="relative z-relative équipe">équipe</span>
    </SectionTitle>

    <ul
      tag="ul"
      gutter-s
      class="s:flex s:gap-[40px] mt-100"
    >
      <li
        v-for="volunteer in volunteers"
        :key="`v-${volunteer.id}`"
        tag="li"
        class="s:basis-1/2 m:basis-1/3 xl:basis-1/4"
      >
        <div
          v-if="volunteer.active"
          class="rounded-radius overflow-hidden max-w-[265px] h-[430px] mt-0 mb-6 mx-auto shadow-card block"
        >
          <img
            v-if="volunteer.profilePicture?.url"
            :src="volunteer.profilePicture?.url"
            class="w-full object-cover object-center"
          >
          <div class="p-2">
            <div class="text-2xl font-bold mb-1">
              {{ getVolunteerName(volunteer.firstname, volunteer.lastname) }}
            </div>
            <div class="text-green mb-4">
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
            <div class="flex justify-center gap-2">
              <NuxtLink
                v-if="volunteer.linkedin"
                :to="volunteer.linkedin"
                target="_blank"
                :aria-label="`Lien du profil linkedin de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
              >
                <img
                  src="/images/socials/linkedin.svg"
                  alt="Icône LinkedIn"
                >
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.twitter"
                :to="volunteer.twitter"
                target="_blank"
                :aria-label="`Lien du profil twitter de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
              >
                <img                  
                  src="/images/socials/twitter.svg"
                  alt="Icône Twitter"
                >
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.github"
                :to="volunteer.github"
                target="_blank"
                :aria-label="`Lien du profil github de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
              >
                <img
                  src="/images/socials/github.svg"
                  alt="Icône Github"
                >
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.website"
                :to="volunteer.website"
                target="_blank"
                :aria-label="`Lien personnalisé de de ${getVolunteerName(
                  volunteer.firstname,
                  volunteer.lastname
                )}`"
              >
                <img
                  src="/images/socials/website.svg"
                  alt="Icône lien"
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="css" scoped>
.équipe::after {
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
</style>
