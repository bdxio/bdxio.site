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

  for (const category of categories) {
    const { id } = await populateItemInTable(resource, {
      conferenceHallId: category.id,
      name: category.name || "",
      description: category.description || "",
      published_at: new Date(),
    });
    await publishItemInTable(resource, id)
  }

  console.log("categories have been added into database");
  return;
}

module.exports = populateCategoryTable;
