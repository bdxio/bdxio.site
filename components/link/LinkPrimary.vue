<script setup lang="ts">
const props = defineProps<{
    type: "nuxt" | "button" | "link";
    color: "white" | "light" | "grey" | "dark";
    href: string;
    disabled?: true;
    download?: string;
    newWindow?: true;
}>();

const color = computed(() => {
  switch (props.color) {
    case "white":
      return {
        link: "bg-bdxio-cream-base text-bdxio-blue-dark",
        icon: "#242457",
      };
    case "light":
      return {
        link: "bg-bdxio-blue-light text-bdxio-light hover:text-bdxio-light",
        icon: "#fff7ec",
      };
    case "grey":
      return {
        link: "bg-bdxio-dark text-bdxio-light",
        icon: "#fff7ec",
      };
    case "dark":
      return {
        link: "bg-bdxio-blue-dark text-bdxio-light",
        icon: "#fff7ec",
      };
  }
});

const tag = computed(() => {
  switch (props.type) {
    case "nuxt":
      return "nuxt-link";
    case "button":
      return "button";
    case "link":
    default:
      return "a";
  }
});

const getProps = computed(() => {
  switch (props.type) {
    case "nuxt":
      return {
        to: props.href,
      };
    case "button":
      return {
        type: "button",
      };
    case "link":
    default:
      return {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        tabindex: props.disabled ? "-1" : 1,
        download: props.download,
      };
  }
});
</script>

<template>
  <component
    :is="tag"
    v-bind="getProps"
    :class="`border-none py-2 px-4 rounded-lg duration-300 w-fit flex gap-3 items-center
    ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} ${color.link}`"
    :target="props.newWindow ? 'blank' : undefined"
  >
    <slot />
    <IconOpenNewWindow
      v-if="props.newWindow"
      :color="color.icon"
    />
  </component>
</template>
