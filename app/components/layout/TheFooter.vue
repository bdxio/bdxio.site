<template>
  <div class="footer">
    <section-guidage />
    <footer class="section">
      <div class="bdxio">
        <nuxt-link class="logo" to="/">
          <img src="~/assets/img/bdxio_logo_blue.png" alt="Logo de l'association BDX.IO" />
          <span>Bordeaux Developers eXperience</span>
        </nuxt-link>
      </div>
      <div class="content">
        <div class="location">
          <a href="https://goo.gl/maps/aScUymM4T4DqeBvz8" target="_blank">
            <span class="location-name">Palais des congrès</span><br />
            <span class="location-address">Avenue Jean Gabriel Domergue<br />33300 BORDEAUX</span>
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
            <a href="https://www.linkedin.com/company/10651416/" target="_blank">
              <img src="~/assets/img/socials/linkedin.svg" alt="Icône LinkedIn BDX IO" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/bdxio" target="_blank" aria-label="Twitter BDX I/O">
              <img src="~/assets/img/socials/twitter.svg" alt="Icône Twitter BDX IO" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ" target="_blank">
              <img src="~/assets/img/socials/youtube.svg" alt="Icône Youtube BDX IO" />
            </a>
          </li>
        </ul>
        <div class="links" v-if="showNavigation">
          <the-navigation />
        </div>
        <ul class="newsletter" v-if="$config.newsletterUrl">
          <li>
            <span @click="showEmailForm = true" class="cursor--pointer">S'incrire à la newsletter</span>
            <form v-if="showEmailForm" class="newsletter__form" autocomplete="off" @submit.prevent="registerNewsletter">
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
              <button class="button" :class="{ disabled: !disabledButton }" type="submit" :disabled="!mail">
                S'inscrire
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div class="legal">
        <nuxt-link to="/conduct"><small>Code de conduite</small></nuxt-link>
        <!-- <small>Kit communication</small> -->
        <small>©2022 - BDX I/O</small>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import jsonp from "jsonp";

export default {
  name: "TheFooter",
  data() {
    return {
      mail: null,
      showEmailForm: false
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
    }
  },
  methods: {
    ...mapActions({
      addToast: "toaster/addToast"
    }),
    registerNewsletter() {
      if (!this.mail || !this.validateEmail(this.mail)) {
        return;
      }

      const url = `${this.$config.newsletterUrl}&EMAIL=${this.mail}`;

      jsonp(
        url,
        {
          param: "c"
        },
        (error, data) => {
          if (error) {
            this.addToast({
              type: error.result,
              message:
                error.msg ||
                "Une erreur est survenue lors de l'inscription de votre email à la newsletter. Merci de réessayer ultérieurement"
            });

            return;
          }

          this.addToast({
            type: data.result,
            message:
              data.msg ||
              "Une erreur est survenue lors de l'inscription de votre email à la newsletter. Merci de réessayer ultérieurement"
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
    }
  }
};
</script>
