// @ts-ignore
const FLAGS = {
  NAVIGATION: true,
  PROGRAMME: true,
  CFP: false,
  BILLETERIE: false,
  SPONSORS2022: true,
  VOLUNTEERS2022: true,
  TALKS: false,
  OPENFEEDBACK: false,
  LIVE: false,
  YOUTUBE: true,
};

export default defineNuxtPlugin((nuxtApp) => {
  const flags = Object.entries(FLAGS).reduce((flags, [key, value]) => {
    const formattedKey =
      key.toLowerCase().charAt(0).toUpperCase() + key.toLowerCase().slice(1);
    flags[`show${formattedKey}`] = value;
    return flags;
  }, {});
  return {
    provide: flags,
  };
});
