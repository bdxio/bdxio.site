function formatSpeakerData(speaker) {
  const {
    conferenceHallId: id,
    name,
    photoUrl = "",
    twitter,
    github,
  } = speaker;

  const formattedSpeaker = {
    name,
    id,
    photoUrl,
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
