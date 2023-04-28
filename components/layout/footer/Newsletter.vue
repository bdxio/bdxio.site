<script setup lang="ts">
import { reactive, useRuntimeConfig, useFetch } from "#imports";
import { ButtonSecondary, Loader } from "#components";

const state = reactive({
  open: false,
  valid: false,
  loading: false,
  success: false,
  error: false,
  email: "",
});

const config = useRuntimeConfig();

function toggleForm() {
  state.open = !state.open;
}

function onType(event: Event) {
  resetFeedback();
  state.error = false;

  const target = event.target as HTMLInputElement;
  state.valid = validateEmail(target.value);
}

function validateEmail(value: string) {
  return (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ).test(value?.trim()?.toLowerCase());
}

function resetFeedback() {
  state.error = false;
  state.success = false;
}

async function register() {
  if (!validateEmail(state.email)) {
    return;
  }
  
  state.loading = true;

  if (!config.public.NEWSLETTER_URL) {
    console.error("Missing NEWSLETTER_URL environment variable");
    state.error = true;
    state.loading = false;
    return;
  }

  const { error: requestError } = await useFetch(
    `${config.public.NEWSLETTER_URL}&EMAIL=${state.email}`,
    { method: "POST" },
  );

  if (requestError) {
    state.error = true;
    state.loading = false;
    return;
  }

  state.success = true;
  state.loading = false;
}
</script>

<template>
  <div
    class="flex items-center"
    @click="toggleForm"
  >
    <span class="cursor-pointer">S'incrire à la newsletter</span>
    <img
      src="/images/drawings/purple_envelope.webp"
      class="w-16 m:w-24 cursor-pointer"
    >
  </div>
  <div
    v-if="state.open"
    class="fixed top-0 left-0 bg-bdxio-blue-dark w-screen h-screen flex flex-col items-center justify-center z-20"
  >
    <img
      src="/images/icons/close.svg"
      alt="Icône croix"
      class="absolute top-8 m:top-12 right-8 m:right-16 cursor-pointer"
      @click="toggleForm"
    >
    <p
      v-if="state.success"
      class="text-white"
    >
      Votre inscription est validée !
    </p>
    <form
      v-else
      class="flex flex-col m:justify-center w-full m:w-auto p-4"
      @submit.prevent="register"
    >
      <Loader
        v-if="state.loading"
        color="#FFFFFF"
        :width="100"
        :height="100"
        class="m-auto"
      />
      <template v-else>
        <p class="text-white text-3xl m:text-4xl mb-4">
          S'inscrire à la newsletter
        </p>
        <div class="flex flex-col m:flex-row m:justify-center">
          <input
            v-model="state.email"
            name="email"
            placeholder="Saisissez votre adresse email"
            size="30"
            required
            :class="{ valid: state.valid }"
            class="py-3 px-6 rounded-xl border-solid border-2"
            @input="onType"
          >
          <ButtonSecondary
            color="white"
            :disabled="!state.valid"
            type="submit"
            :class="{ disabled: !state.valid }"
            class="m:ml-4 mt-4 m:mt-0"
          >
            S'inscrire
          </ButtonSecondary>
        </div>
        <p
          v-if="state.error"
          class="text-red pt-3"
        >
          Une erreur est survenue. <br>Merci de réessayer dans quelques minutes.
        </p>
      </template>
    </form>
  </div>
</template>
