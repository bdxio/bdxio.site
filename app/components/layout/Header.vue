<template>
  <header class="header">
    <NuxtLink class="logo" to="/">
      <img src="~/assets/img/bdxio_logo.png" alt="Logo de l'association BDXIO" />
    </NuxtLink>
    <nav class="nav" :class="colorClasses">
      <ul>
        <li>
          <NuxtLink to="/"> Accueil </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/schedule"> Programme </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sponsors"> Sponsors </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team"> L'équipe </NuxtLink>
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
      default: "white",
      validator: (value) => ["white", "black"].includes(value),
    },
  },
  computed: {
    colorClasses() {
      return this.color === "white" ? "dark" : "light";
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
            display: block;
            width: 90px;
            height: 30px;
            position: absolute;
            bottom: -30px;
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

  &.dark {
    a {
      color: $primary-dark;
      &.nuxt-link-exact-active:after {
        background-color: red;
      }
    }
  }
}
</style>
