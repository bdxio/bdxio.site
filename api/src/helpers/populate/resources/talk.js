const moment = require("moment");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

const {
  bindRoomAndSlotAndDraftWithTalk,
} = require("../bindRoomAndSlotAndDraftWithTalk");

function translateTalkLevel(level) {
  if (!level) {
    return "Tous niveaux";
  }
  switch (level) {
    case "intermediate":
      return "Intermédiaire";
    case "advanced":
      return "Avancé";
    case "beginner":
    default:
      return "Débutant";
  }
}

function translateTalkLanguage(language) {
  if (!language) {
    return "N/A";
  }

  switch (language) {
    case "French":
    case "french":
    case "Francais":
    case "Français":
    case "français":
    case "francais":
      return "Français";
    case "English":
    case "english":
    case "Anglais":
    case "anglais":
      return "Anglais";
    default:
      return "N/A";
  }
}

async function populateTalkTable(talks) {
  if (!talks || !talks.length) {
    return Promise.resolve();
  }

  const resource = "api::talk.talk";

  await deleteTable(resource);
  console.log("table talks has been deleted");

  const categories = await strapi.db.query("api::category.category").findMany();
  const formats = await strapi.db.query("api::format.format").findMany();
  const strapiSpeakers = await strapi.db
    .query("api::speaker.speaker")
    .findMany();
  const strapiRooms = await strapi.db.query("api::room.room").findMany();
  const strapiSlots = await strapi.db.query("api::slot.slot").findMany();

  for (const talk of talks) {
    try {
      const category = categories.filter(
        (c) => c.conferenceHallId === talk.categories
      )[0].id;
      const format = formats.filter(
        (f) => f.conferenceHallId === talk.formats
      )[0].id;
      const speakers = strapiSpeakers
        .filter((s) => talk.speakers.includes(s.conferenceHallId))
        .map((s) => s.id);

      const bind = bindRoomAndSlotAndDraftWithTalk(talk.id);

      const { id } = await populateItemInTable(resource, {
        conferenceHallId: talk.id,
        title: talk.title,
        state: talk.state,
        level: translateTalkLevel(talk.level),
        abstract: talk.abstract,
        category,
        format,
        speakers,
        comments: talk.comments,
        language: translateTalkLanguage(talk.language),
        room: strapiRooms.find((r) => r.naturalId === bind.room)?.id,
        slot: strapiSlots.find((s) => s.naturalId === bind.slot)?.id,
        creationDate: moment.unix(talk.createTimestamp._seconds).toDate(),
        published_at: new Date(),
        backup: bind.backup,
      });
      try {
        if (!bind.backup) {
          await publishItemInTable(resource, id);
        }
      } catch (e) {
        console.error("error while publishing talk", e);
      }
    } catch (e) {
      console.log("error while populating talk", e);
    }
  }
}

module.exports = populateTalkTable;
