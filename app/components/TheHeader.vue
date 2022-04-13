<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <img src="~/assets/img/logo_white.png" alt="Accueil">
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/team" class="underline-animated">
          <span>L'équipe</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/news" class="underline-animated">
          <span>Actualités</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/speakers" class="underline-animated">
          <span>Conférencier·ière·s</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/schedule" class="underline-animated">
          <span>Programme</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/sponsors" class="underline-animated">
          <span>Sponsors</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="underline-animated">
          <span>Contact</span>
        </NuxtLink>
      </li>
      <li>
        <a href="https://twitter.com/bdxio" target="_blank" aria-label="Twitter BDX I/O" class="icon-scale-over">
          <FontAwesomeIcon :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/bdxio" target="_blank" class="icon-scale-over">
          <FontAwesomeIcon :icon="['fab', 'facebook']"/>
        </a>
        <a href="https://www.linkedin.com/company/10651416/" target="_blank" class="icon-scale-over">
          <FontAwesomeIcon :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ" target="_blank" class="icon-scale-over">
          <FontAwesomeIcon :icon="['fab', 'youtube']"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
nav {
  background: $primary;

  ul {
    display: flex;
    justify-content: space-around;

    li {
      height: 4rem;
      display: flex;
      align-items: center;

      a {
        color: #fff;
        text-decoration: none;
      }

      &:not(:first-of-type) a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 1rem;
      }

      img {
        height: 2.5rem;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
