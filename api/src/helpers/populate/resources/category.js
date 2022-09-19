const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

function getCategoryColor(category) {
  if (!category) {
    return null;
  }

  switch (category) {
    case "Design & UX":
      return "#FBDB33";
    case "Cloud & DevSecOps":
      return "#DABFEF";
    case "Backend":
      return "#f25572";
    case "Frontend":
      return "#FF820F";
    case "Big Data & I.A.":
      return "#65c4cd";
    case "Méthodo & Architecture":
      return "#19D2B1";
    case "Hors-piste":
      return "#4452ff";
    default:
      return null;
  }
}
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
      color: getCategoryColor(category.name)
    });
    await publishItemInTable(resource, id)
  }

  console.log("categories have been added into database");
  return;
}

module.exports = populateCategoryTable;
