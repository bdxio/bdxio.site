import { defineNuxtPlugin } from '#imports';
import { featureFlags } from '~/services/featureFlags';

export default defineNuxtPlugin(() => ({
  provide: { featureFlags },
}));
