<template>
  <footer>
    <div class="footer-newsletter-form">
      <span>Vous souhaitez être tenu informé ?</span>
      <form @submit.prevent="registerNewsletter">
        <VInput v-model="mail" type="email" required> Inscrivez-vous à la newsletter </VInput>
        <button class="v-button">S'inscrire</button>
      </form>
    </div>
    <div class="footer-links">
      <ul>
        <li>
          <NuxtLink to="/" class="underline-animated">
            <span>Accueil</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="underline-animated">
            <span>Contact</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/conduct" class="underline-animated">
            <span>Code de conduite</span>
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://twitter.com/bdxio" target="_blank" aria-label="Twitter BDX I/O" class="icon-scale-over">
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bdxio" target="_blank" class="icon-scale-over">
            <FontAwesomeIcon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/10651416/" target="_blank" class="icon-scale-over">
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ" target="_blank" class="icon-scale-over">
            <FontAwesomeIcon :icon="['fab', 'youtube']" />
          </a>
        </li>
      </ul>
    </div>
    <small> ©2023 - BDX I/O </small>
  </footer>
</template>

<script>
import { mapActions } from "vuex";
import VInput from "~/components/VInput.vue";

export default {
  name: "Footer",
  components: {
    VInput,
  },
  data() {
    return {
      mail: null,
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

<style lang="scss" scoped>
footer {
  background: $primary;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #fff;

  .footer-newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
  }

  .footer-links {
    display: flex;
    justify-content: space-between;

    li {
      display: inline-block;

      a {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        padding: 1rem;
      }
    }
  }

  small {
    padding-left: 1rem;
    font-size: 0.7rem;
  }
}
</style>
