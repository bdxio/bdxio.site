const { findAll } = require("../../helpers/database");
const { formatSpeakerData } = require("./getSpeakers");

async function getSessions() {
  const resource = "api::slot.slot";
  return findAll(resource, {
    rooms: true,
    talks: { populate: { category: true, speakers: true } },
  });
}

function formatSession(talk, session) {
  const { startSlot, endSlot, rooms } = session;
  const { title, id, category, speakers } = talk;

  return {
    speakers: speakers.map(formatSpeakerData),
    tags: [category.name],
    title: title,
    id: id,
    startTime: startSlot,
    endTime: endSlot,
    trackTitle: rooms.length ? rooms[0].name : undefined,
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
      formattedSessions[talk.id] = formatSession(talk, session);
    });

    return formattedSessions;
  }, {});
}

module.exports = getSessionsAndSpeakers;
