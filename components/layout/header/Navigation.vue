<script setup lang="ts">
const { background = 'light' } = defineProps<{
  background?: 'light' | 'dark';
}>();

const navigation = getNavigation();

const menu = reactive({ isOpen: false });

const route = useRoute();

const icon = computed(() => {
  return menu.isOpen
    ? {
        src: background === 'light' ? '/images/icons/close_blue.svg' : '/images/icons/close.svg',
        alt: 'Icône croix',
      }
    : {
        src: background === 'light' ? '/images/icons/burger_blue.svg' : '/images/icons/burger.svg',
        alt: 'Icône navigation',
      };
});

const toggleMenu = () => {
  menu.isOpen = !menu.isOpen;
};

watch(
  () => route.path,
  () => {
    menu.isOpen = false;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <button
    class="toggle-button"
    :aria-label="menu.isOpen ? 'Fermer la fenêtre' : 'Ouvrir la fenêtre'"
    @click.prevent="toggleMenu"
  >
    <img :src="icon.src" :alt="icon.alt">
  </button>
  <nav :aria-expanded="menu.isOpen ? true : false" :class="background === 'dark' ? 'block--dark' : 'block--light'">
    <ul>
      <li v-for="page in navigation" :key="page.name">
        <div v-if="page.type === 'internal'">
          <NuxtLink v-if="page.design === 'link'" :to="page.path" :aria-label="`Lien vers la page ${page.name}`">
            {{ page.name }}
            <div v-if="page.name === 'En live'" class="live" />
          </NuxtLink>
        </div>
        <div v-else-if="page.type === 'external'">
          <LinkPrimary
            v-if="page.design === 'primary'"
            type="link"
            color="light"
            :href="page.path"
            :title="`Lien vers ${page.name} - Nouvelle fenêtre`"
            class="flex items-center"
            target="_blank"
          >
            {{ page.name }}
          </LinkPrimary>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toggle-button {
  @apply flex justify-center items-center w-10 h-10 m:hidden;

  img {
    @apply cursor-pointer m:hidden relative z-30;
  }
}

nav {
  @apply flex justify-center m:justify-end items-center fixed;
  @apply m:static top-0 bottom-0 right-full z-20 w-full max-s:min-h-full;

  --colors-link: currentColor;

  &[aria-expanded='true'] {
    @apply right-0;
  }

  ul {
    @apply flex flex-col m:flex-row justify-center m:justify-end items-center;
  }

  li {
    @apply mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0;
  }

  a {
    @apply text-2xl m:text-xl flex items-center;
  }
}

.router-link-exact-active {
  position: relative;
  pointer-events: none;
}

.router-link-exact-active::after {
  content: '';
  width: 90px;
  height: 30px;
  display: block;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: url('/images/drawings/blue_underline.webp') no-repeat center / cover;
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
