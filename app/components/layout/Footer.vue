<template>
  <footer>
    <div class="bdxio">
      <NuxtLink class="logo" to="/">
        <img
          src="~/assets/img/bdxio_logo.png"
          alt="Logo de l'association BDX.IO"
        />
        <span>Bordeaux Developer eXperience</span>
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
            href="https://www.linkedin.com/company/10651416/"
            target="_blank"
            class="icon-scale-over"
          >
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
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
      <ul class="links">
        <li>
          <NuxtLink to="/">
            <span>Accueil</span>
          </NuxtLink>
        </li>
      </ul>
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

export default {
  name: "Footer",
  components: { VInput },
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

<style lang="scss" scoped>
footer {
  font-family: "Lato";
  background: $white;
  color: $black;
  display: flex;
  flex-direction: column;
  padding: 60px 35px;

  a {
    color: $black;
  }

  .bdxio {
    display: flex;
    margin-bottom: 60px;

    img {
      height: 61px;
      margin-right: 16px;
      margin-bottom: 25px;

      @include mobileFirst(s) {
        margin-bottom: 0;
      }
    }

    span {
      display: block;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-decoration: none;
      font-weight: $font-weight-bold;
      font-size: 35px;
      line-height: 42px;

      @include mobileFirst(s) {
        flex-direction: row;
        align-items: center;
      }
    }
  }

  .content {
    display: grid;
    gap: 60px;

    grid-template-areas:
      "location"
      "contact"
      "social"
      "links"
      "newsletter";

    @include mobileFirst(s) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "location links contact"
        "social links newsletter";
    }
  }

  .newsletter {
    grid-area: newsletter;
    span {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        background: url("~/assets/img/drawings/purple_envelope.png");
        width: 141px;
        height: 68px;
        top: 40px;
        right: 0;

        @include mobileFirst(s) {
          top: -60px;
          right: auto;
          left: -80px;
        }
      }
    }
  }

  .location {
    display: flex;
    flex-direction: column;
    gap: 15px;
    grid-area: location;

    .location-name {
      font-weight: $font-weight-bold;
      font-size: 24px;
      line-height: 29px;
    }
    .location-address {
      font-size: $font-size-content;
      line-height: 26px;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 5px;
    grid-area: contact;

    .email {
      font-size: $font-size-content;
      line-height: 36px;
    }
  }

  .social {
    display: flex;
    gap: 20px;
    grid-area: social;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(125, 125, 248, 0.23);
      color: $primary;
      border-radius: 4px;
      width: 40px;
      height: 40px;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    grid-area: links;

    li {
      display: inline-block;

      a {
        display: inline-block;
        color: $black;
      }
    }

    @include mobileFirst(m) {
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
    }
  }

  .legal {
    border-top: 1px solid $black;
    padding-top: 50px;
    margin-top: 100px;
    display: flex;
    gap: 40px;
    white-space: nowrap;
    flex-wrap: wrap;
  }

  small {
    font-size: 18px;
  }
}
</style>
