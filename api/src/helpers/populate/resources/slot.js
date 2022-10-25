const eachSeries = require("async/eachSeries");
const { deleteTable, populateItemInTable } = require("../../database");

const slots = [
  {
    naturalId: "Petit déjeuner",
    name: "Petit-déjeuner",
    startSlot: "08:30:00",
    endSlot: "09:00:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Keynote d'ouverture",
    name: "Keynote d'ouverture",
    startSlot: "09:00:00",
    endSlot: "10:00:00",
    space: "Amphi A",
  },
  {
    naturalId: "Pause - début 10h00",
    name: "Pause",
    startSlot: "10:00:00",
    endSlot: "10:10:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Conférence et atelier - début 10h10",
    name: "Conférence et atelier",
    startSlot: "10:10:00",
    endSlot: "10:55:00",
  },
  {
    naturalId: "Pause - début 10h55",
    name: "Pause",
    startSlot: "10:55:00",
    endSlot: "11:05:00",
    space: "Espace pluriel",
  },

  {
    naturalId: "Conférence - début 11h05",
    name: "Conférence",
    startSlot: "11:05:00",
    endSlot: "11:50:00",
  },
  {
    naturalId: "Pause - début 11h50",
    name: "Pause",
    startSlot: "11:50:00",
    endSlot: "12:00:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Quickie - début 12h00",
    name: "Quickie",
    startSlot: "12:00:00",
    endSlot: "12:15:00",
  },
  {
    naturalId: "Quickie et atelier - début 13h15",
    name: "Quickie et atelier",
    startSlot: "13:15:00",
    endSlot: "13:30:00",
  },
  {
    naturalId: "Quickie - début 13h40",
    name: "Quickie",
    startSlot: "13:40:00",
    endSlot: "13:55:00",
  },
  {
    naturalId: "Pause - début 13h55",
    name: "Pause",
    startSlot: "13:55:00",
    endSlot: "14:15:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Conférence - début 14h15",
    name: "Conférence",
    startSlot: "14:15:00",
    endSlot: "15:00:00",
  },
  {
    naturalId: "Pause - début 15h00",
    name: "Pause",
    startSlot: "15:00:00",
    endSlot: "15:10:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Conférence et atelier - début 15h10",
    name: "Conférence et atelier",
    startSlot: "15:10:00",
    endSlot: "15:55:00",
  },
  {
    naturalId: "Pause - début 15h55",
    name: "Pause",
    startSlot: "15:55:00",
    endSlot: "16:25:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Conférence - début 16h25",
    name: "Conférence",
    startSlot: "16:25:00",
    endSlot: "17:10:00",
  },
  {
    naturalId: "Pause - début 17h10",
    name: "Pause",
    startSlot: "17:10:00",
    endSlot: "17:20:00",
    space: "Espace pluriel",
  },
  {
    naturalId: "Keynote de fermeture",
    name: "Keynote de fermeture",
    startSlot: "17:20:00",
    endSlot: "18:05:00",
    space: "Amphi A",
  },
  {
    naturalId: "Apéro",
    name: "Apéro 🍻",
    startSlot: "18:05:00",
    endSlot: "15:10:00",
    space: "Lieu à définir",
  },
];

async function populatespaceTable() {
  const resource = "api::slot.slot";
  await deleteTable(resource);
  console.log("table slots has been deleted");

  eachSeries(
    slots,
    async (slot) => {
      await populateItemInTable(resource, {
        naturalId: slot.naturalId || "",
        name: slot.name,
        startSlot: slot.startSlot,
        endSlot: slot.endSlot,
        published_at: new Date(),
        ...(slot.space && { space: slot.space }),
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

module.exports = populatespaceTable;
