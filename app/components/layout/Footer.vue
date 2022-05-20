<template>
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
            class="icon-scale-over"
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
            class="icon-scale-over"
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
            class="icon-scale-over"
          >
            <img
              src="~/assets/img/socials/youtube.svg"
              alt="Icône Youtube BDX IO"
            />
          </a>
        </li>
      </ul>
      <div class="links">
        <Navigation />
      </div>
      <ul class="newsletter">
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
            <label for="email" class="label">Enter your email:</label>
            <input
              v-model="mail"
              class="input"
              :class="inputClass"
              type="email"
              name="email"
              placeholder="hello@email.com"
              size="30"
              required
            />
            <button class="v-button button" type="submit" :disabled="!mail">
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
</template>

<script>
import { mapActions } from "vuex";
import Navigation from "~/components/layout/Navigation.vue";

export default {
  name: "Footer",
  components: { Navigation },
  props: {
    showNavigation: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mail: null,
      showEmailForm: false,
    };
  },
  computed: {
    inputClass() {
      return this.mail ? "filled" : "";
    },
  },
  methods: {
    ...mapActions({
      addToast: "toast/addToast",
    }),
    registerNewsletter() {
      if (!this.mail) {
        return;
      }

      if (!this.validateEmail(this.mail)) {
        console.log("IM CALLING 1");
        this.addToast({
          message: "Merci d'utiliser un format d'adrese email valide !",
          type: "success",
        });
        return;
      }

      console.log(
        "HEY THIS MAIL IS OK, I WILL NEED TO SEND IT TO STRAPI, WHICH WILL VALIDATE AND SEND IT TO MAILCHIMP :) "
      );

      console.log("IM CALLING2");
      this.addToast({
        message: "Votre email a bien été enregistré dans la newsletter",
        type: "success",
      });
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
