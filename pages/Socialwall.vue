<script setup lang="ts">
const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.socialWall.show) {
  throw createError({ statusCode: 404 });
}
</script>

<template>
  <main>
    <section class="p-section">
      <BlueskyHashtagFeed />
    </section>
  </main>
</template>
