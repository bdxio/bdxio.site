const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

const rooms = ["Amphi A", "Amphi B", "Amphi C", "Salle 1", "Salle 2", "Lab"];

async function populateRoomTable() {
  const resource = "api::room.room";
  await deleteTable(resource);
  console.log("table rooms has been deleted");

  eachSeries(
    rooms,
    async (room) => {
      const r = await populateItemInTable(resource, {
        name: room,
        published_at: new Date(),
        slots: []
      });

      if (r && r.id) {
        await publishItemInTable(resource, r.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through rooms", errLoop);
        return;
      }

      console.log("rooms have been added into database");
      return;
    }
  );
}

module.exports = populateRoomTable;
