const featuresFlag = {
  NAVIGATION: true,
  PROGRAMME: true,
  CFP: false,
  BILLETERIE: true,
  SPONSORS2022: true,
  VOLUNTEERS2022: true,
  TALKS: false,
  LIVE: false,
  OPENFEEDBACK: true
};

export default function (context, inject) {
  Object.entries(featuresFlag).forEach(([key, value]) => {
    const formattedKey = key.toLowerCase().charAt(0).toUpperCase() + key.toLowerCase().slice(1);

    inject(`show${formattedKey}`, value);
  });
}
