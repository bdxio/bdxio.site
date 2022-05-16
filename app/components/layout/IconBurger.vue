<template functional>
  <svg
    width="27"
    height="18"
    viewBox="0 0 27 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[data.class, data.staticClass]"
    v-on="listeners"
    v-bind="data.attrs"
  >
    <rect
      width="27"
      height="2"
      rx="1"
      fill="white"
      :opacity="props.open ? '0' : '1'"
    />
    <rect y="8" width="27" height="2" rx="1" fill="white" />
    <rect
      y="16"
      width="27"
      height="2"
      rx="1"
      fill="white"
      :opacity="props.open ? '0' : '1'"
    />
  </svg>
</template>
