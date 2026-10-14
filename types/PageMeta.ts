import type { PageFeatureFlag } from '~/services/featureFlags';

declare module '#app' {
  interface PageMeta {
    featureFlag?: PageFeatureFlag;
  }
}

export {};
