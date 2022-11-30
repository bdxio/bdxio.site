const { findAll } = require("../../helpers/database");
const { formatSpeakerData } = require("./getSpeakers");

async function getSessions() {
  const resource = "api::slot.slot";
  return findAll(resource, {
    rooms: true,
    talks: { populate: { category: true, speakers: true, room: true } },
  });
}

const manualSessionsAndSpeakers = {
  sessions: {
    1: {
      speakers: ["KOS1"],
      title: "Keynote d'ouverture",
      id: 1,
      startTime: "2022-12-02T09:00:00",
      endTime: "2022-12-02T10:00:00",
      trackTitle: "",
    },
    2: {
      speakers: ["KFS1", "KFS2", "KFS3", "KFS4"],
      title: "Keynote de fermeture",
      id: 2,
      startTime: "2022-12-02T17:20:00",
      endTime: "2022-12-02T18:05:00",
      trackTitle: "",
    },
  },
  speakers: {
    KOS1: {
      id: "KOS1",
      name: "Marcy Ericka Charollois",
      photoUrl:
        "https://res.cloudinary.com/dceghfifv/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669225424/Marcy.jpg",
      socials: [{ name: "twitter", link: "https://twitter.com/MarcyChama" }],
    },
    KFS1: {
      id: "KFS1",
      name: "Ane Diaz de Tuesta",
      photoUrl: "",
      socials: [{ name: "twitter", link: "https://twitter.com/ane_naiz" }],
    },
    KFS2: {
      id: "KFS2",
      name: "Aurélie Vache",
      photoUrl: "",
      socials: [{ name: "twitter", link: "https://twitter.com/aurelievache" }],
    },
    KFS3: {
      id: "KFS3",
      name: "Horacio Gonzalez",
      photoUrl: "",
      socials: [
        { name: "twitter", link: "https://twitter.com/LostInBrittany" },
      ],
    },
    KFS4: {
      id: "KFS4",
      name: "Pierre Tibulle",
      photoUrl: "",
      socials: [{ name: "twitter", link: "https://twitter.com/ptibulle" }],
    },
  },
};

function formatSession(talk, session) {
  const { startSlot, endSlot } = session;
  const { title, id, category, speakers, room } = talk;

  return {
    speakers: speakers.map((s) => s.id),
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

  return allTalksSessions.reduce((formattedSessions, session) => {
    session.talks.forEach((talk) => {
      formattedSessions.sessions[talk.id] = formatSession(talk, session);

      talk.speakers.forEach((speaker) => {
        formattedSessions.speakers[speaker.id] = formatSpeakerData(speaker);
      });
    });

    return formattedSessions;
  }, manualSessionsAndSpeakers);
}

module.exports = getSessionsAndSpeakers;
