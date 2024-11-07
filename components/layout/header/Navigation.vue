<script setup lang="ts">
defineProps<{
  background?: "light" | "dark";
  open: boolean;
}>();

const navigation = getNavigation();
</script>

<template>
  <nav
    :class="`flex justify-center m:justify-end items-center w-full fixed m:static top-0 bottom-0 z-20
      min-h-full m:min-h-auto ${open ? 'right-0' : 'right-full'}
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} m:bg-none`"
  >
    <ul class="flex flex-col m:flex-row justify-center m:justify-end items-center">
      <li
        v-for="page in navigation"
        :key="page.name"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <div v-if="page.type === 'internal'">
          <NuxtLink
            v-if="page.design === 'link'"
            :to="page.path"
            :class="`no-underline text-2xl m:text-xl flex items-center
            ${background === 'dark' ? 'text-bdxio-light' : 'text-bdxio-blue-dark'}`"
            tabindex="1"
            :aria-label="`Lien vers la page ${page.name}`"
          >
            {{ page.name }}
            <div
              v-if="page.name === 'En live'"
              class="live"
            />
          </NuxtLink>
        </div>
        <div v-else-if="page.type === 'external'">
          <LinkPrimary
            v-if="page.design === 'primary'"
            type="link"
            color="light"
            :href="page.path"
            title="lien vers la billetterie - Nouvelle fenêtre"
            class="flex items-center"
            new-window
          >
            {{ page.name }}
          </LinkPrimary>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css">
.router-link-exact-active {
  position: relative;
  pointer-events: none;
}

.router-link-exact-active::after {
  content: "";
  width: 90px;
  height: 30px;
  display: block;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: url("/images/drawings/blue_underline.webp") no-repeat
    center / cover;
}

.live {
  margin-left: 15px;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
  }
  90% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);
  }
}
</style>
