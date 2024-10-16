<script setup lang="ts">
import fetchJsonp from "fetch-jsonp";

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

  /**
   * JSONP is used to avoid CORS issues with Mailchimp.
   */
  try {
    const response = await (await fetchJsonp(
      `${config.public.NEWSLETTER_URL}&EMAIL=${state.email}`, { jsonpCallback: "c" },
    )).json();
    if (response?.result !== "success") {
      state.error = true;
      return;
    }
    state.success = true;
  } catch (e) {
    state.error = true;
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <div
    class="flex items-center"
    tabindex="0"
    @click="toggleForm"
    @keydown.enter.exact="toggleForm"
  >
    <span class="cursor-pointer">S'inscrire à la newsletter</span>
    <NuxtImg
      src="/images/drawings/purple_envelope.webp"
      alt=""
      aria-hidden="true"
      class="w-16 m:w-24 cursor-pointer"
      width="96"
      height="46"
    />
  </div>
  <div
    v-if="state.open"
    class="fixed top-0 left-0 bg-bdxio-blue-dark w-screen h-screen flex flex-col items-center justify-center z-20"
  >
    <img
      src="/images/icons/close.svg"
      loading="lazy"
      alt="Icône croix"
      aria-label="Fermer la fenêtre de notification"
      class="absolute top-8 m:top-12 right-8 m:right-16 cursor-pointer"
      tabindex="1"
      @click="toggleForm"
      @keydown.enter.exact="toggleForm"
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
        <label
          for="email"
          class="text-white text-3xl m:text-4xl mb-4"
        >
          Saisissez votre adresse email
        </label>
        <div class="flex flex-col m:flex-row m:justify-center">
          <input
            v-model="state.email"
            name="email"
            placeholder="email@exemple.com"
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
