<script setup lang="ts">
  import { computed } from '#imports'
  import { NuxtLink } from "#components";

  const props = defineProps<{
    to: string
    color: "white" | "light" | "grey" | "dark"
  }>();

  const colorClasses = computed(() => {
    switch (props.color) {
      case "white":
        return `border-bdxio-cream-base text-bdxio-cream-base`
      case "light":
        return `border-bdxio-blue-light text-bdxio-blue-light hover:border-bdxio-blue-dark hover:text-bdxio-blue-dark`
      case "grey": 
      return `border-bdxio-font-dark text-bdxio-font-dark`
      case "dark":
        return `border-bdxio-blue-dark text-bdxio-blue-dark hover:border-bdxio-blue-light hover:text-bdxio-blue-light`
      default:
        return ""
    }
  })

</script>

<template>
  <NuxtLink
    :to="to"
    :class="`bg-none border-[2px] border-solid py-[12px] px-[25px] rounded-[8px] cursor-pointer duration-300 w-fit block mt-8 ${colorClasses}`"
  >
    <slot />
  </NuxtLink>
</template>