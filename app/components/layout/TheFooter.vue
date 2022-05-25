<template>
  <div>
    <section-guidage />
    <footer class="section">
      <div class="bdxio">
        <NuxtLink class="logo" to="/">
          <img
            src="~/assets/img/bdxio_logo.png"
            alt="Logo de l'association BDX.IO"
          />
          <span>Bordeaux Developers eXperience</span>
        </NuxtLink>
      </div>
      <div class="content">
        <div class="location">
          <span class="location-name">Palais des congrès</span>
          <span class="location-address"
            >Avenue Jean Gabriel Domergue<br />33300 BORDEAUX</span
          >
        </div>
        <ul class="contact">
          <li class="email">team@bdxio.fr</li>
          <li class="email">partenariats@bdxio.fr</li>
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
        <div class="links" v-if="showNavigation">
          <TheNavigation />
        </div>
        <ul class="newsletter" v-if="$config.newsletterUrl">
          <li>
            <span @click="showEmailForm = true" class="cursor--pointer"
              >S'incrire à la newsletter</span
            >
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
                v-model="mail"
                class="input"
                :class="{ valid: validateEmail(mail) }"
                name="email"
                placeholder="hello@email.com"
                size="30"
                required
              />
              <button
                class="button"
                :class="{ disabled: !disabledButton }"
                type="submit"
                :disabled="!mail"
              >
                S'inscrire
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div class="legal">
        <small>Code de conduite</small>
        <small>Kit communication</small>
        <small>©2022 - BDX I/O</small>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import jsonp from "jsonp";

import SectionGuidage from "~/components/homepage/SectionGuidage";
import TheNavigation from "~/components/layout/TheNavigation.vue";

export default {
  name: "TheFooter",
  components: { TheNavigation, SectionGuidage },
  data() {
    return {
      mail: null,
      showEmailForm: false,
    };
  },
  computed: {
    disabledButton() {
      if (!this.mail) {
        return false;
      }

      return this.validateEmail(this.mail);
    },
    showNavigation() {
      return this.$showNavigation ?? false;
    },
  },
  methods: {
    ...mapActions({
      addToast: "toaster/addToast",
    }),
    registerNewsletter() {
      if (!this.mail || !this.validateEmail(this.mail)) {
        return;
      }

      const url = `${this.$config.newsletterUrl}&EMAIL=${this.mail}`;

      jsonp(
        url,
        {
          param: "c",
        },
        (error, data) => {
          if (error) {
            this.addToast({
              type: error.result,
              message:
                error.msg ||
                "Une erreur est survenue lors de l'inscription de votre email à la newsletter. Merci de réessayer ultérieurement",
            });

            return;
          }

          this.addToast({
            type: data.result,
            message:
              data.msg ||
              "Une erreur est survenue lors de l'inscription de votre email à la newsletter. Merci de réessayer ultérieurement",
          });

          if (data.result !== "error") {
            setTimeout(() => {
              this.mail = null;
              this.showEmailForm = false;
            }, 1000);
          }
        }
      );
    },
    validateEmail(email) {
      if (!email) {
        return false;
      }

      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>
