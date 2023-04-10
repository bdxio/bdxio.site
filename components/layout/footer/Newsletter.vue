<script setup lang="ts">
import { ref, computed } from "#imports";

const email = ref("");
const formOpen = ref(false);

const isEmailValid = computed(() => {
  return email.value?.trim()?.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
});

const toggleForm = () => {
  formOpen.value = !formOpen.value;
};

const register = () => {
  if (!isEmailValid.value) {
    return;
  }
  // @TODO : Implement registration
};
</script>

<template>
  <div class="flex">
    <span
      class="cursor-pointer"
      @click="toggleForm"
    >
      S'incrire à la newsletter
    </span>
    <img
      src="/images/drawings/purple_envelope.png"
      class="w-16 m:w-24 cursor-pointer"
      @click="toggleForm"
    >
  </div>
  <div>
    <form
      v-if="formOpen"
      autocomplete="off"
      @submit.prevent="register"
    >
      <img
        src="/images/icons/close_blue.svg"
        alt="Icône croix"
        @click="toggleForm"
      >
      <label
        for="email"
        class="label"
      >
        Adresse email :
      </label>
      <input
        v-model="email"
        class="input"
        :class="{ valid: isEmailValid }"
        name="email"
        placeholder="hello@email.com"
        size="30"
        required
      >
      <button
        class="button"
        :class="{ disabled: !isEmailValid }"
        :disabled="!email"
        type="submit"
      >
        S'inscrire
      </button>
    </form>
  </div>
</template>