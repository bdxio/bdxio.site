const populateCompanyTable = require("./resources/company");
const populateCategoryTable = require("./resources/category");
const populateFormatTable = require("./resources/format");
const populateSpeakerTable = require("./resources/speaker");
const populateTalkTable = require("./resources/talk");
const populateRoomTable = require("./resources/room");
const populateSlotTable = require("./resources/slot");

module.exports = {
  populateCategoryTable,
  populateCompanyTable,
  populateFormatTable,
  populateSpeakerTable,
  populateTalkTable,
  populateRoomTable,
  populateSlotTable
};
