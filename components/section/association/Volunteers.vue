<script setup lang="ts">
import { computed } from "#imports";
import { Heading, NuxtLink, NuxtImg } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Volunteer } from "@bdxio/bdxio.types";

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

const activeVolunteers = computed(() => props.volunteers.filter((volunteer) => volunteer.active));
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
        <NuxtImg
          v-if="volunteer.profilePicture?.url"
          :src="volunteer.profilePicture?.url"
          :alt="volunteer.profilePicture?.alternativeText ||
            `Photo de profil de ${getVolunteerName(volunteer)} (bénévole ${ASSOCIATION_NAME})`"
          :aria-label="volunteer.profilePicture?.alternativeText ||
            `Photo de profil de ${getVolunteerName(volunteer)} (bénévole ${ASSOCIATION_NAME})`"
          class="object-cover object-center rounded-t-lg"
          loading="lazy"
          width="500"
        />
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
                :aria-label="`
                lien vers l'entreprise ${volunteer.jobLabel} de ${getVolunteerName(volunteer)} - Nouvelle fenêtre
                `"
              >
                @{{ volunteer.jobCompanyName }}
              </NuxtLink>
            </template>
            <template v-else>
              {{ volunteer.jobLabel }} chez {{ volunteer.jobCompanyName }}
            </template>
          </div>
          <div class="flex justify-center gap-2">
            <a
              v-if="volunteer.linkedin"
              :href="volunteer.linkedin"
              target="_blank"
              :aria-label="`Lien du profil LinkedIn de ${getVolunteerName(volunteer)} - Nouvelle fenêtre`"
            >
              <NuxtImg
                src="/images/icons/linkedin.svg"
                alt="Icône LinkedIn"
                loading="lazy"
                width="40"
                height="40"
              />
            </a>
            <a
              v-if="volunteer.twitter"
              :href="volunteer.twitter"
              target="_blank"
              :aria-label="`Lien du profil Twitter de ${getVolunteerName(volunteer)}`"
            >
              <NuxtImg
                src="/images/icons/twitter.svg"
                alt="Icône Twitter"
                loading="lazy"
                width="40"
                height="40"
              />
            </a>
            <a
              v-if="volunteer.github"
              :href="volunteer.github"
              target="_blank"
              :aria-label="`Lien du profil GitHub de ${getVolunteerName(volunteer)}`"
            >
              <NuxtImg
                src="/images/icons/github.svg"
                alt="Icône GitHub"
                loading="lazy"
                width="40"
                height="40"
              />
            </a>
            <a
              v-if="volunteer.website"
              :href="volunteer.website"
              target="_blank"
              :aria-label="`Lien personnalisé de ${getVolunteerName(volunteer)}`"
            >
              <NuxtImg
                src="/images/icons/website.svg"
                alt="Icône lien"
                loading="lazy"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="css">
.heart::after {
  content: "";
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  background: url("/images/drawings/yellow_heart.webp") no-repeat center;
  background-size: contain;
  right: -30px;
  bottom: -20px;
}
</style>
