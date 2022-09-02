async function findItemInTable(collection, query) {
  try {
    const result = await strapi.db.query(collection).findOne(query);

    return result;
  } catch (error) {
    console.error(`Error while finding ${collection} with ${where} : ${error}`);
    return;
  }
}

async function deleteTable(collection) {
  try {
    await strapi.db.query(collection).deleteMany({});
  } catch (error) {
    console.error(`Error while deleting ${collection} table : ${error}`);
  }
  return;
}

async function publishItemInTable(collection, id) {
  try {
    return await strapi.db.query(collection).update({
      where: { id },
      data: {
        publishedAt: new Date(),
      },
    });
  } catch (error) {
    console.error(
      `Error while updating ${collection} with id ${id} : ${error}`
    );
  }
}
async function populateItemInTable(collection, data) {
  try {
    return await strapi.db.query(collection).create({ select: ["id"], data });
  } catch (error) {
    console.error(
      `Error while populating ${collection} with ${data} : ${error}`
    );
  }
  return;
}

module.exports = {
  findItemInTable,
  populateItemInTable,
  publishItemInTable,
  deleteTable,
};
