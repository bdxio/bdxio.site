<script setup lang="ts">
// @ts-nocheck
import { useNuxtApp, ref, computed } from "#imports";
import {
  LayoutSectionGuidage,
  LayoutTheNavigation,
  NuxtLink,
} from "#components";

const email = ref("");
const showEmailForm = ref(false);

const disabledButton = computed(() => {
  if (email.value === "") {
    return false;
  }

  return validateEmail(email.value);
});

const { $showNavigation } = useNuxtApp();

const validateEmail = (email: string) =>
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const registerNewsletter = () => {
  if (email.value === "" || !validateEmail(email.value)) {
    return;
  }
};
</script>

<template>
  <div class="footer">
    <LayoutSectionGuidage />
    <footer class="section">
      <div class="bdxio">
        <NuxtLink class="logo" to="/">
          <img
            src="~/assets/img/bdxio_logo_blue.png"
            alt="Logo de l'association BDX.IO"
          />
          <span>Bordeaux Developers eXperience</span>
        </NuxtLink>
      </div>
      <div class="content">
        <div class="location">
          <a href="https://goo.gl/maps/aScUymM4T4DqeBvz8" target="_blank">
            <span class="location-name">Palais des congrès</span><br />
            <span class="location-address">
              Avenue Jean Gabriel Domergue<br />33300 BORDEAUX
            </span>
          </a>
        </div>
        <ul class="contact">
          <li class="email">
            <a href="mailto:team@bdxio.fr">team@bdxio.fr</a>
          </li>
          <li class="email">
            <a href="mailto:partenariats@bdxio.fr">partenariats@bdxio.fr</a>
          </li>
        </ul>
        <ul class="social">
          <li>
            <a
              href="https://www.linkedin.com/company/10651416/"
              target="_blank"
            >
              <img
                src="~/assets/img/socials/linkedin.svg"
                alt="Icône LinkedIn BDX IO"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/bdxio"
              target="_blank"
              aria-label="Twitter BDX I/O"
            >
              <img
                src="~/assets/img/socials/twitter.svg"
                alt="Icône Twitter BDX IO"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"
              target="_blank"
            >
              <img
                src="~/assets/img/socials/youtube.svg"
                alt="Icône Youtube BDX IO"
              />
            </a>
          </li>
        </ul>
        <div class="links" v-if="$showNavigation">
          <LayoutTheNavigation display-cfp />
        </div>
        <ul class="newsletter">
          <li>
            <span @click="showEmailForm = true" class="cursor--pointer">
              S'incrire à la newsletter
            </span>
            <form
              v-if="showEmailForm"
              class="newsletter__form"
              autocomplete="off"
              @submit.prevent="registerNewsletter"
            >
              <img
                src="~/assets/img/icons/close_blue.svg"
                alt="icone pour fermer le formulaire d'ajout d'email à la newsletter"
                class="newsletter__form__close"
                @click="showEmailForm = false"
              />
              <label for="email" class="label">Mon email :</label>
              <input
                v-model="email"
                class="input"
                :class="{ valid: validateEmail(email) }"
                name="email"
                placeholder="hello@email.com"
                size="30"
                required
              />
              <button
                class="button"
                :class="{ disabled: !disabledButton }"
                type="submit"
                :disabled="!email"
              >
                S'inscrire
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div class="legal">
        <NuxtLink to="/conduct"><small>Code de conduite</small></NuxtLink>
        <!-- <small>Kit communication</small> -->
        <small>©2022 - BDX I/O</small>
        <div>
          <small>Événement soutenu par Bordeaux Métropole</small>
        </div>
      </div>
    </footer>
  </div>
</template>
