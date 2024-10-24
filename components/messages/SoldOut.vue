<template>
  <div

    class="p-3 bg-bdxio-yellow-base flex relative overflow-hidden"
  >
    <div class="scroll-left gap-5">
      <div
        v-for="i in 50"
        :key="i"
      >
        🔥 L'ensemble des billets pour l'évènement sont <span class="font-semibold">SOLD OUT !</span> Merci 🙏
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.scroll-left {
  display: flex;
  white-space: nowrap;
  animation: scroll-left 500s linear infinite;
}
</style>
