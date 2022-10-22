const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

const getDuration = (name) => {
  switch (name) {
    case "Quickie":
      return "15min";
    case "Conférence":
      return "45min";
    case "Hands on lab":
      return "100min";
    default:
      return "N/A";
  }
};

async function populateFormatTable(formats) {
  if (!formats || !formats.length) {
    return;
  }

  const resource = "api::format.format";

  await deleteTable(resource);
  console.log("table formats has been deleted");

  for (const format of formats) {
    const { id } = await populateItemInTable(resource, {
      conferenceHallId: format.id,
      name: format.name || "",
      description: format.description || "",
      published_at: new Date(),
      duration: getDuration(format.name),
    });
    await publishItemInTable(resource, id);
  }

  console.log("formats have been added into database");
  return;
}

module.exports = populateFormatTable;
