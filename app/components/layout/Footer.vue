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
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/bdxio"
            target="_blank"
            aria-label="Twitter BDX I/O"
            class="icon-scale-over"
          >
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"
            target="_blank"
            class="icon-scale-over"
          >
            <FontAwesomeIcon :icon="['fab', 'youtube']" />
          </a>
        </li>
      </ul>
      <div class="links">
        <Navigation />
      </div>
      <ul class="newsletter">
        <li>
          <NuxtLink to="/contact">
            <span v-on:click="mailVisible = true"
              >S'incrire à la newsletter</span
            >
            <form @submit.prevent="registerNewsletter" v-if="mailVisible">
              <VInput v-model="mail" type="email" required> email </VInput>
              <button class="v-button">S'inscrire</button>
            </form>
          </NuxtLink>
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
import VInput from "~/components/VInput.vue";
import Navigation from "~/components/layout/Navigation.vue";

export default {
  name: "Footer",
  components: { VInput, Navigation },
  props: {
    showNavigation: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mail: null,
      mailVisible: false,
    };
  },
  methods: {
    ...mapActions("toast", ["addToast"]),
    registerNewsletter() {
      this.addToast({ message: "Inscription confirmée !", type: "success" });
    },
  },
};
</script>
