<template>
  <header class="header" :class="propClasses">
    <NuxtLink class="logo" to="/">
      <img src="~/assets/img/bdxio_logo.png" alt="Logo de l'association BDXIO" />
    </NuxtLink>
    <nav class="nav" :class="propClasses">
      <ul>
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/schedule">Programme</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sponsors">Sponsors</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team">L'équipe</NuxtLink>
        </li>
        <li>
          <button class="bdx-button">Billetterie</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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
      return this.color;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem 3.125rem; //30px 50px

  &.light {
    background-color: $primary-dark;
  }

  &.dark {
    background-color: $light-font;
  }
}

.nav {
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin: 0 3.125rem; //50px;

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
            background: url("~/assets/img/underline_bleu.png") no-repeat center / cover;
          }
        }
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

      &:last-of-type {
        margin: 0 0 0 3.125rem; //50px
      }
    }
  }

  &.dark a {
    color: $primary-dark;
  }

  &.light a {
    color: $light-font;
  }
}
</style>
