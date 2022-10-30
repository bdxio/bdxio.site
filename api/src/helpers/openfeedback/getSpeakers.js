const { findAll } = require("../../helpers/database");

async function getSpeakers() {
  const resource = "api::speaker.speaker";
  const speakers = await findAll(resource);

  return speakers.reduce((formattedSpeakers, speaker) => {
    const { conferenceHallId: id, name, photoUrl, twitter, github } = speaker;

    formattedSpeakers[id] = {
      name,
      id,
      photoUrl,
      socials: [],
    };

    if (twitter) {
      formattedSpeakers[id].socials["twitter"] = {
        name: "twitter",
        link: `https://twitter.com/${twitter}`,
      };
    }

    if (github) {
      formattedSpeakers[id].socials["github"] = {
        name: "github",
        link: `https://github.com/${github}`,
      };
    }

    return formattedSpeakers;
  }, {});
}

module.exports = getSpeakers;
