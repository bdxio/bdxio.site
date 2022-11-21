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

  return {
    speakers: speakers.map((s) => s.conferenceHallId !== null),
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
          .filter((s) => s.conferenceHallId !== null)
          .forEach((speaker) => {
            formattedSessions.speakers[speaker.conferenceHallId] =
              formatSpeakerData(speaker);
          });
      });

      return formattedSessions;
    },
    { sessions: {}, speakers: {} }
  );
}

module.exports = getSessionsAndSpeakers;
