const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

async function populateSpeakerTable(speakers) {
  if (!speakers || !speakers.length) {
    return;
  }

  const resource = "api::speaker.speaker";

  await deleteTable(resource);

  console.log("table speakers has been deleted");

  eachSeries(
    speakers,
    async (speaker) => {
      const s = await populateItemInTable(resource, {
        conferenceHallId: speaker.uid,
        name: speaker.displayName || "",
        bio: speaker.bio && speaker.bio.length ? speaker.bio.trim() : "",
        address: speaker.address || "",
        photoUrl: speaker.photoUrl || "",
        twitter: speaker.twitter || "",
        github: speaker.github || "",
        company: speaker.company || "",
      });
      if (s && s.id) {
        await publishItemInTable(resource, s.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through speakers", errLoop);
        return;
      }

      console.log("speakers have been added into database");
      return;
    }
  );
}

module.exports = populateSpeakerTable;
