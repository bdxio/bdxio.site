<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <img src="~/assets/img/bdxio_logo.png" alt="Accueil">
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
        <NuxtLink to="/team" class="underline-animated">
          <span>L'équipe</span>
        </NuxtLink>
      </li>
      <li>
        <button class="bdx-button">Billetterie</button>
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
  background: rgba($light, 0.7);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  top: 0;

  ul {
    display: flex;
    justify-content: space-around;

    li {
      height: 3.5em;
      display: flex;
      align-items: center;

      a {
        color: #000;
        text-decoration: none;
      }

      &:not(:first-of-type) a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 1rem;
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
}
</style>
