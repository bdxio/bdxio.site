<template>
  <header class="header" :class="color">
    <NuxtLink class="logo" to="/">
      <img
        src="~/assets/img/bdxio_logo.png"
        alt="Logo de l'association BDX.IO"
        class="display--block"
      />
    </NuxtLink>
    <div v-if="showMenu">
      <IconBurger
        :open="mobileOpen"
        class="header__burger hidden-m"
        @click="mobileOpen = !mobileOpen"
      />
      <nav class="header__nav" :class="propClasses">
        <ul>
          <li>
            <NuxtLink to="/">Accueil</NuxtLink>
          </li>
          <!-- <li>
          <NuxtLink to="/schedule">Programme</NuxtLink>
        </li> -->
          <li>
            <NuxtLink to="/sponsors">Sponsors</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/team">L'équipe</NuxtLink>
          </li>
          <!-- <li>
          <button class="bdx-button">Billetterie</button>
        </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import IconBurger from "~/components/layout/IconBurger.vue";

export default {
  name: "Header",
  components: {
    IconBurger,
  },
  data() {
    return {
      mobileOpen: false,
      showMenu: false,
    };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "light",
      validator: (value) => ["light", "dark"].includes(value),
    },
  },
  computed: {
    propClasses() {
      let classes = this.color;

      if (this.mobileOpen) {
        classes += " mobile-open";
      }
      return classes;
    },
  },
  methods: {
    toggleMenu() {
      return (this.mobileOpen = !this.mobileOpen);
    },
  },
  watch: {
    "$route.path"() {
      this.mobileOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: $spc-m;

  &.light {
    background-color: $primary-dark;
  }

  &.dark {
    background-color: $light-font;
  }

  @include mobileFirst(m) {
    padding: 30px 50px;
    justify-content: space-between;
  }

  &__burger {
    position: absolute;
    @include z-index(upper);
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  &__nav {
    position: absolute;
    @include z-index(design);
    width: 100%;
    top: 0;
    right: 100%;
    bottom: 0;
    background-color: $primary-dark;

    display: flex;
    justify-content: center;
    align-items: center;

    &.mobile-open {
      right: 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        margin: 0; //50px;

        a {
          text-decoration: none;

          &.nuxt-link-exact-active {
            position: relative;

            &:after {
              content: "";
              width: 90px;
              height: 30px;
              display: block;
              position: absolute;
              bottom: -30px;
              left: 50%;
              transform: translateX(-50%);
              background: url("~/assets/img/drawings/blue_underline.png")
                no-repeat center / cover;
            }
          }
        }

        &:not(:last-of-type) {
          margin-bottom: 100px;
        }

        &:not(:first-of-type) a {
          display: flex;
          align-items: center;
          height: 100%;
        }

        img {
          height: 3em;
          transition: 0.3s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    &.dark a {
      color: $primary-dark;
    }

    &.light a {
      color: $light-font;
    }

    @include mobileFirst(m) {
      position: initial;
      display: block;
      width: 100%;

      ul {
        justify-content: flex-end;
        flex-direction: row;

        li {
          margin-right: $spc-xl;

          &:not(:last-of-type) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
