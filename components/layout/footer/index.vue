<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants.ts";

const getSocialIcon = (social: string) => {
  switch (social) {
    case "linkedin":
      return "/images/icons/linkedin.svg";
    case "x":
      return "/images/icons/x.svg";
    case "bluesky":
      return "/images/icons/bluesky.svg";
    case "youtube":
      return "/images/icons/youtube.svg";
    case "instagram":
      return "/images/icons/instagram.svg";
    case "flickr":
      return "/images/icons/flickr.svg";
    default:
      return "";
  }
};

const navigation = getNavigation();
const previousEditionsNavigation = getPreviousEditionsNavigation();
const { $featureFlags } = useNuxtApp();

const { data: association } = await useAPI("/association");
</script>

<template>
  <footer class="p-section !pb-0 mb-8 m:mb-16 flex flex-col">
    <NuxtLink
      to="/"
      class="flex flex-col m:flex-row m:items-center mb-8 m:mb-16"
    >
      <NuxtImg
        src="/images/logo_blue_footer.webp"
        width="160"
        height="58"
        :alt="`Logo de l'association ${association.name}`"
        class="block max-w-[120px] m:max-w-[160px] mb-5 m:mb-0 m:mr-5"
        loading="lazy"
      />
      <span class="text-2xl m:text-4xl font-bold">{{ association.completeName }}</span>
    </NuxtLink>
    <div class="flex flex-col m:flex-row">
      <div class="flex flex-col m:w-1/3 mb-8 m:mb-0">
        <a
          v-if="$featureFlags.layout.location"
          href="https://goo.gl/maps/aScUymM4T4DqeBvz8"
          target="_blank"
          aria-label="lien vers le palais des congrès sur google maps - Nouvelle fenêtre"
          class="block mb-8 m:mb-16"
        >
          <span class="font-bold text-2xl">Palais des Congrès</span><br>
          <span>Avenue Jean Gabriel Domergue<br>33300 BORDEAUX</span>
        </a>
        <ul class="flex">
          <li
            v-for="social in association?.socials ?? []"
            :key="social.label"
            class="mr-4"
          >
            <a
              :href="social.href"
              target="_blank"
              :aria-label="`lien vers le compte ${social.label} de ${association.name} - Nouvelle fenêtre`"
            >
              <NuxtImg
                :src="getSocialIcon(social.name)"
                :alt="`Icône ${social.label}`"
                :aria-label="`Consulter le compte de ${association.name} sur ${social.label}`"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
      <nav class="m:w-1/6 mb-8 m:mb-0">
        <ul class="flex flex-col">
          <li
            v-for="page in navigation"
            :key="page.path"
            class="mr-5 mb-2 last:mr-0 last:mb-0"
          >
            <NuxtLink
              :to="page.path"
              class="text-2xl m:text-base"
            >
              {{ page.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="m:w-1/6 mb-8 m:mb-0">
        <ul class="flex flex-col">
          <li
            v-for="page in previousEditionsNavigation"
            :key="page.path"
            class="mr-5 mb-2 last:mr-0 last:mb-0"
          >
            <NuxtLink
              :to="page.path"
              class="text-2xl m:text-base"
            >
              {{ page.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="m:w-1/3">
        <ul class="mb-8">
          <li class="mb-2">
            <a
              :href="`mailto:${association?.teamEmail}`"
              :title="`Envoyer un mail à ${association?.teamEmail} - Nouvelle fenêtre`"
            >{{ association?.teamEmail }}</a>
          </li>
          <li>
            <a
              :href="`mailto:${association?.partnersEmail}`"
              :title="`Envoyer un mail à ${association?.partnersEmail} - Nouvelle fenêtre`"
            >{{ association?.partnersEmail }}</a>
          </li>
        </ul>
        <ButtonNewsletter />
      </div>
    </div>
    <div class="flex flex-col m:flex-row border-t border-solid border-black mt-8 m:mt-16 pt-8 m:pt-16">
      <span class="text-lg m:mr-16 mb-4 m:mb-0">
        © {{ new Date().getFullYear() }} - {{ association?.name ?? ASSOCIATION_NAME }}
      </span>
      <NuxtLink
        v-if="$featureFlags.pages.legalNotice"
        to="/legalnotice"
        class="text-lg m:mr-16 mb-4 m:mb-0"
      >
        Mentions légales
      </NuxtLink>
      <NuxtLink
        v-if="$featureFlags.pages.codeOfConduct"
        to="/conduct"
        class="text-lg m:mr-16 mb-4 m:mb-0"
      >
        Code de conduite
      </NuxtLink>
      <a
        v-if="$featureFlags.links.kitCommunication"
        href="/bdxio-kit-communication.zip"
        download
        class="text-lg m:mr-16"
      >
        Kit communication
      </a>
    </div>
  </footer>
</template>
