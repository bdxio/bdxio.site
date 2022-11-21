const { findAll } = require("../../helpers/database");
const { formatSpeakerData } = require("./getSpeakers");

async function getSessions() {
  const resource = "api::slot.slot";
  return findAll(resource, {
    rooms: true,
    talks: { populate: { category: true, speakers: true, room: true } },
  });
}

function formatSession(talk, session) {
  const { startSlot, endSlot } = session;
  const { title, id, category, speakers, room } = talk;

  const filteredSpeakers = speakers.filter((s) => s.conferenceHallId !== null);
  return {
    speakers: filteredSpeakers.map((s) => s.conferenceHallId),
    tags: [category.name],
    title: title,
    id: id,
    startTime: `2022-12-02T${startSlot}`,
    endTime: `2022-12-02T${endSlot}`,
    trackTitle: room ? room.name : "",
  };
}
async function getSessionsAndSpeakers() {
  const allSessions = await getSessions();

  // Couldn't find a way to filter in a where clause instead of filtering afterwards
  const allTalksSessions = allSessions.filter(
    (sessions) => sessions.talks && sessions.talks.length > 0
  );

  return allTalksSessions.reduce(
    (formattedSessions, session) => {
      session.talks.forEach((talk) => {
        formattedSessions.sessions[talk.id] = formatSession(talk, session);
        talk.speakers
          .filter((s) => s.conferenceHallId)
          .forEach((speaker) => {
            formattedSessions.speakers[speaker.conferenceHallId] =
              formatSpeakerData(speaker);
          });
      });

      return formattedSessions;
    },
    {
      sessions: {
        keynoteOuverture: {
          speakers: ["keynoteOuvertureS1"],
          title: "Keynote d'ouverture",
          id: 1,
          startTime: "2022-12-02T09:00:00",
          endTime: "2022-12-02T10:00:00",
          trackTitle: "Amphi principal",
        },
        keynoteFermeture: {
          speakers: ["keynoteFermetureS1"],
          title: "Keynote de fermetture",
          id: 2,
          startTime: "2022-12-02T17:20:00",
          endTime: "2022-12-02T18:05:00",
          trackTitle: "Amphi principal",
        },
      },
      speakers: {
        keynoteOuvertureS1: {
          name: "Speaker ouverture 1",
          id: "keynoteOuvertureS1",
          photoUrl:
            "https://lh6.googleusercontent.com/-JdoQfcK99ok/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmUl0IhChct1-6jPBMUKaW7ko0Gfw/photo.jpg",
          socials: [],
        },
        keynoteFermetureS1: {
          name: "Speaker fermeture 1",
          id: "keynoteFermetureS1",
          photoUrl:
            "https://lh6.googleusercontent.com/-JdoQfcK99ok/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmUl0IhChct1-6jPBMUKaW7ko0Gfw/photo.jpg",
          socials: [],
        },
      },
    }
  );
}

module.exports = getSessionsAndSpeakers;
