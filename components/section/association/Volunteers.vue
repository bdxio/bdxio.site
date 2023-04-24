<script setup lang="ts">
import { defineProps } from "vue";
import { Heading, NuxtLink } from "#components";
import type { Volunteer } from "~/types";

defineProps<{
  volunteers: Volunteer[];
}>();

function getVolunteerName(volunteer: Volunteer): string | null {
  const { firstname, lastname } = volunteer;
  if (!firstname && !lastname) return null;
  if (!firstname) return lastname || null;
  if (!lastname) return firstname || null;
  return `${firstname} ${lastname}`;
}
</script>

<template>
  <section class="bg-white pt-0 p-section section-association-volunteers">
    <Heading
      level="2"
      class="text-center mt-0 title"
    >
      Découvrez les membres <br>
      de notre <span class="relative z-10 heart">équipe</span>
    </Heading>

    <ul class="s:flex s:justify-start s:flex-wrap mt-[100px] max-w-6xl mx-auto">
      <li
        v-for="volunteer in volunteers"
        :key="`v-${volunteer.id}`"
        class="s:w-1/2 m:!w-1/3 l:!w-1/4"
      >
        <div
          v-if="volunteer.active"
          class="rounded-radius overflow-hidden max-w-[265px] h-[430px] mt-0 mb-6 mx-auto shadow-card block"
        >
          <img
            v-if="volunteer.profilePicture?.url"
            :src="volunteer.profilePicture?.url"
            :alt="volunteer.profilePicture?.alternativeText"
            class="max-h-[175px] w-auto object-cover object-center"
          >
          <div class="p-2">
            <div class="text-2xl font-bold mb-1">
              {{ getVolunteerName(volunteer) }}
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
                :ariaCurrentValue="`Lien du profil LinkedIn de ${getVolunteerName(volunteer)}`"
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
                :ariaCurrentValue="`Lien du profil Twitter de ${getVolunteerName(volunteer)}`"
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
                :ariaCurrentValue="`Lien du profil GitHub de ${getVolunteerName(volunteer)}`"
              >
                <img
                  src="/images/socials/github.svg"
                  alt="Icône GitHub"
                >
              </NuxtLink>
              <NuxtLink
                v-if="volunteer.website"
                :to="volunteer.website"
                target="_blank"
                :ariaCurrentValue="`Lien personnalisé de ${getVolunteerName(volunteer)}`"
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
.heart::after {
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
