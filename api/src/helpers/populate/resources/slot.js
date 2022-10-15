const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

const slots = [
  {
    name: "Petit-déjeuner",
    startDate: "08:30:00",
    endDate: "09:00:00",
  },
  {
    name: "Keynote d'ouverture",
    startDate: "09:00:00",
    endDate: "10:00:00",
  },
  {
    naturalId: "Conférence - début 10h10",
    name: "Conférence",
    startDate: "10:10:00",
    endDate: "10:55:00",
  },
  {
    naturalId: "Conférence - début 11h05",
    name: "Conférence",
    startDate: "11:05:00",
    endDate: "11:50:00",
  },
  {
    naturalId: "Atelier - début 10h10",
    name: "Atelier",
    startDate: "10:10:00",
    endDate: "11:50:00",
  },
  {
    naturalId: "Quickie - début 12h00",
    name: "Quickie",
    startDate: "12:00:00",
    endDate: "12:15:00",
  },
  {
    naturalId: "Quickie - début 13h15",
    name: "Quickie",
    startDate: "13:15:00",
    endDate: "13:30:00",
  },
  {
    naturalId: "Quickie - début 13h40",
    name: "Quickie",
    startDate: "13:40:00",
    endDate: "13:55:00",
  },
  {
    naturalId: "Conférence - début 14h15",
    name: "Conférence",
    startDate: "14:15:00",
    endDate: "15:00:00",
  },
  {
    naturalId: "Atelier - début 13h15",
    name: "Atelier",
    startDate: "13:15:00",
    endDate: "15:00:00",
  },
  {
    naturalId: "Conférence - début 15h10",
    name: "Conférence",
    startDate: "15:10:00",
    endDate: "15:55:00",
  },
  {
    naturalId: "Conférence - début 16h25",
    name: "Conférence",
    startDate: "16:25:00",
    endDate: "17:10:00",
  },
  {
    naturalId: "Atelier - début 15h10",
    name: "Atelier",
    startDate: "15:10:00",
    endDate: "17:00:00",
  },
  {
    name: "Keynote de fermeture",
    startDate: "17:20:00",
    endDate: "18:05:00",
  },
];

async function populateRoomTable() {
  const resource = "api::slot.slot";
  await deleteTable(resource);
  console.log("table slots has been deleted");

  eachSeries(
    slots,
    async (slot) => {
      const s = await populateItemInTable(resource, {
        naturalId: slot.naturalId || "",
        name: slot.name,
        startDate: slot.startDate,
        endDate: slot.endDate,
        published_at: new Date(),
      });
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through slots", errLoop);
        return;
      }

      console.log("slots have been added into database");
      return;
    }
  );
}

module.exports = populateRoomTable;
