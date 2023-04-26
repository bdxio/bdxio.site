<script setup lang="ts">
import { defineProps } from "vue";
import { Heading, NuxtLink } from "#components";
import type { Volunteer } from "~/types";

const props = defineProps<{
  volunteers: Volunteer[];
}>();

function getVolunteerName(volunteer: Volunteer): string | null {
  const { firstname, lastname } = volunteer;
  if (!firstname && !lastname) return null;
  if (!firstname) return lastname || null;
  if (!lastname) return firstname || null;
  return `${firstname} ${lastname}`;
}

const activeVolunteers = props.volunteers.filter((volunteer) => volunteer.active);
</script>

<template>
  <section class="bg-white p-section !pt-0 m:!pt-16 section-association-volunteers">
    <Heading
      level="2"
      class="m:text-center title"
    >
      Découvrez les membres <br>
      de notre <span class="relative z-10 heart">équipe</span>
    </Heading>
    <ul
      class="grid grid-cols-1 s:grid-cols-2 m:grid-cols-3 xl:grid-cols-4 gap-x-12 justify-center
        m:max-w-screen-xl mx-auto mt-14 m:mt-28"
    >
      <li
        v-for="volunteer in activeVolunteers"
        :key="`v-${volunteer.id}`"
        class="rounded-lg mt-0 mb-8 m:mb-16 mx-auto shadow-card"
      >
        <img
          v-if="volunteer.profilePicture?.url"
          :src="volunteer.profilePicture?.url"
          :alt="volunteer.profilePicture?.alternativeText"
          class="w-full object-cover object-center rounded-t-lg"
        >
        <div class="text-center p-8">
          <div class="text-xl font-bold mb-1">
            {{ getVolunteerName(volunteer) }}
          </div>
          <div class="text-green text-sm mb-7">
            <template v-if="!volunteer.jobCompanyName">
              {{ volunteer.jobLabel }}
            </template>
            <template
              v-else-if="volunteer.jobCompanyUrl && volunteer.jobCompanyName"
            >
              {{ volunteer.jobLabel }}
              <NuxtLink
                class="underline"
                :to="volunteer.jobCompanyUrl"
                target="_blank"
              >
                @{{ volunteer.jobCompanyName }}
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
      </li>
    </ul>
  </section>
</template>

<style scoped lang="postcss">
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
