<script setup lang="ts">
const links = [
  {
    label: "team@bdxio.fr",
    href: "mailto:team@bdxio.fr",
  },
  {
    label: "partenariats@bdxio.fr",
    href: "mailto:partenariats@bdxio.fr",
  },
];
</script>

<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.label"
      class="mb-2"
    >
      <a
        :href="link.href"
        :title="`Envoyer un mail à ${link.label} - Nouvelle fenêtre`"
      >{{ link.label }}</a>
    </li>
  </ul>
</template>
