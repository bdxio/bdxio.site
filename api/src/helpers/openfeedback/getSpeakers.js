function formatSpeakerData(speaker) {
  const { id, name, photoUrl, twitter, github } = speaker;

  const formattedSpeaker = {
    id,
    name,
    photoUrl: photoUrl || "",
    socials: [],
  };

  if (twitter) {
    formattedSpeaker.socials["twitter"] = {
      name: "twitter",
      link: `https://twitter.com/${twitter}`,
    };
  }

  if (github) {
    formattedSpeaker.socials["github"] = {
      name: "github",
      link: `https://github.com/${github}`,
    };
  }

  return formattedSpeaker;
}

module.exports = { formatSpeakerData };
