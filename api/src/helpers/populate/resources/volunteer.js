const eachSeries = require("async/eachSeries");
const { findItemInTable, populateItemInTable } = require("../../database");

async function populateVolunteerTable(volunteers) {
  if (!volunteers || !volunteers.length) {
    return;
  }
  await eachSeries(
    volunteers,
    async (volunteer) => {
      const existingVolunteer = await findItemInTable(
        "api::volunteer.volunteer",
        {
          where: {
            firstname: volunteer.firstname,
            lastname: volunteer.lastname,
          },
          select: ["id"],
        }
      );

      console.log("existingVolunteer", existingVolunteer);
      if (existingVolunteer) {
        return;
      }
      await populateItemInTable("api::volunteer.volunteer", volunteer);
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while populating volunteers", errLoop);
      }

      console.log("volunteers have been added into database");
    }
  );
}

module.exports = populateVolunteerTable;
