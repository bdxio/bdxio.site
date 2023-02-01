<template>
  <a
    :href="href"
    :target="blank ? '_blank' : undefined"
    class="border-none text-white py-[12px] px-3 rounded-lg cursor-pointer transition duration-300 w-fit block"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: false
    }
  }
};
</script>