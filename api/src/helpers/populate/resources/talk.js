const moment = require("moment");
const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

async function populateTalkTable(talks) {
  if (!talks || !talks.length) {
    return Promise.resolve();
  }

  const resource = "api::talk.talk";

  await deleteTable(resource);
  console.log("table talks has been deleted");
  eachSeries(
    talks,
    async (talk) => {
      const t = await populateItemInTable(resource, {
        conferenceHallId: talk.id,
        title: talk.title,
        state: talk.state,
        level: talk.level,
        abstract: talk.abstract,
        categor: talk.categories,
        format: talk.formats,
        speakers: JSON.stringify(talk.speakers),
        comments: talk.comments,
        language: talk.language,
        creationDate: moment.unix(talk.createTimestamp._seconds).toDate(),
        published_at: new Date(),
      });

      if (t && t.id) {
        await publishItemInTable(resource, t.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through talks", errLoop);
        return;
      }

      console.log("talks have been added into database");
      return;
    }
  );
}

module.exports = populateTalkTable;
