"use strict";

const fs = require("fs");
const path = require("path");

const jsonFile = path.resolve(__dirname, "./test.json");

/**
 * A set of functions called "actions" for `populate`
 */

function populatePlaces(sessions) {
  return new Promise((resolve, reject) => {
    console.log(sessions);
    if (!sessions || !sessions.length) {
      return resolve();
    }

    console.log(sessions);
  });
}

module.exports = {
  async index(ctx, next) {
    try {
      fs.access(jsonFile, fs.F_OK, (err) => {
        if (err) {
          console.error("We coudn't find the json file", err);
          return;
        }

        const json = fs.readFileSync(jsonFile, "utf-8");
        const { sessions, speakers } = JSON.parse(json);

        populatePlaces(sessions).then(() => {
          ctx.body = "Hello World!";
        });
      });
    } catch (err) {
      console.error(err);
    }
  },
};
