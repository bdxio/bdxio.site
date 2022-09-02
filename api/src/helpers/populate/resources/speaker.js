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

  for (const speaker of speakers) {
    const { id } = await populateItemInTable(resource, {
      conferenceHallId: speaker.uid,
      name: speaker.displayName || "",
      bio: speaker.bio && speaker.bio.length ? speaker.bio.trim() : "",
      address: speaker.address || "",
      photoUrl: speaker.photoUrl || "",
      twitter: speaker.twitter || "",
      github: speaker.github || "",
      company: speaker.company || "",
    });
    await publishItemInTable(resource, id);
  }
  console.log("speakers have been added into database");
  return;
}

module.exports = populateSpeakerTable;
