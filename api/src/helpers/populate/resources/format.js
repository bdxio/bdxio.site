const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

async function populateFormatTable(formats) {
  if (!formats || !formats.length) {
    return;
  }

  const resource = "api::format.format";

  await deleteTable(resource);
  console.log("table formats has been deleted");

  eachSeries(
    formats,
    async (format) => {
      const f = await populateItemInTable(resource, {
        conferenceHallId: format.id,
        name: format.name || "",
        description: format.description || "",
        published_at: new Date(),
      });

      if (f && f.id) {
        await publishItemInTable(resource, f.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through formats", errLoop);
        return;
      }

      console.log("formats have been added into database");
      return;
    }
  );
}

module.exports = populateFormatTable;
