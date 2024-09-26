<script setup lang="ts">
const props = defineProps<{
  type: "nuxt" | "link";
  to: string;
  color: "white" | "light" | "grey" | "dark";
  newWindow?: true;
}>();

const color = computed(() => {
  switch (props.color) {
    case "white":
      return {
        link: "border-bdxio-cream-base text-bdxio-cream-base",
        icon: "#f6f2e8",
      };
    case "light":
      return {
        link: "border-bdxio-blue-light text-bdxio-blue-light",
        icon: "#7d7df8",
      };
    case "grey":
      return {
        link: "border-bdxio-dark text-bdxio-dark",
        icon: "#242457",
      };
    case "dark":
      return {
        link: "border-bdxio-blue-dark text-bdxio-blue-dark",
        icon: "#242457",
      };
    default:
      return {
        link: "",
        icon: "",
      };
  }
});

const getComponentTag = computed(() => {
  switch (props.type) {
    case "nuxt":
      return "nuxt-link";
    case "link":
    default:
      return "a";
  }
});
</script>

<template>
  <component
    :is="getComponentTag"
    :class="`bg-none border-[2px] border-solid py-[6px] px-4 rounded-lg cursor-pointer duration-300 w-fit
    flex gap-3 items-center ${color.link}`"
    :href="to"
    :target="props.newWindow ? 'blank' : undefined"
  >
    <slot />
    <IconOpenNewWindow
      v-if="props.newWindow"
      :color="color.icon"
    />
  </component>
</template>
