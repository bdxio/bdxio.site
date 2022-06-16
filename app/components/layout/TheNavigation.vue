<template>
  <ul>
    <li>
      <nuxt-link to="/">Accueil</nuxt-link>
    </li>
    <!-- <li>
          <NuxtLink to="/schedule">Programme</NuxtLink>
        </li> -->
    <li>
      <nuxt-link to="/sponsors">Sponsors</nuxt-link>
    </li>
    <li>
      <NuxtLink to="/asso">L'asso</NuxtLink>
    </li>
    <!-- <li>
          <button class="bdx-button">Billetterie</button>
        </li> -->
  </ul>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>
