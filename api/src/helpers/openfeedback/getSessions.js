const { findAll } = require("../../helpers/database");

async function getSessions() {
  const resource = "api::slot.slot";
  const allSessions = await findAll(resource);

  const allTalksSessions = allSessions.filter(
    (sessions) => sessions.talks.length > 0
  );
  console.log("All sessions: ", allSessions);

  return allTalksSessions.reduce((formattedSessions, session) => {
    const { startSlot, endSlot, talks, rooms } = session;
    console.log("talks", talks);

    talks.forEach((talk) => {
      formattedSessions[talk.id] = {
        speakers: "test",
        tags: [],
        title: talk.title,
        id: talk.id,
        startTime: startSlot,
        endTime: endSlot,
        trackTitle: rooms.length ? rooms[0].name : undefined,
      };
    });

    return formattedSessions;
  }, {});
}

module.exports = getSessions;
