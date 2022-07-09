const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

async function populateCategoryTable(categories) {
  if (!categories || !categories.length) {
    return;
  }

  const resource = "api::category.category";

  await deleteTable(resource);
  console.log("table categories has been deleted");

  eachSeries(
    categories,
    async (category) => {
      const c = await populateItemInTable(resource, {
        conferenceHallId: category.id,
        name: category.name || "",
        description: category.description || "",
        published_at: new Date(),
      });

      if (c && c.id) {
        await publishItemInTable(resource, c.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through categories", errLoop);
        return;
      }

      console.log("categories have been added into database");
      return;
    }
  );
}

module.exports = populateCategoryTable;
