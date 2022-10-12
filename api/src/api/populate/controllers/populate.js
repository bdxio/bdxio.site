"use strict";

const axios = require("axios");
const {
  populateSpeakerTable,
  // populateCategoryTable,
  // populateFormatTable,
  // populateTalkTable,
} = require("../../../helpers");

module.exports = {
  async getTalksFromConferenceHall(ctx, next) {
    const { CONFERENCE_HALL_EVENT_ID, CONFERENCE_HALL_API_KEY  } = process.env;
    if (!CONFERENCE_HALL_EVENT_ID || !CONFERENCE_HALL_API_KEY) {
      ctx.status = 500;
      ctx.body = "Missing essentials environment variables for connection w/ ConferenceHall";
      return next();
    }
    try {
      const url = `https://conference-hall.io/api/v1/event/${process.env.CONFERENCE_HALL_EVENT_ID}?key=${process.env.CONFERENCE_HALL_API_KEY}&state=confirmed`;
      const response = await axios.get(url);

      if (!response || !response.data) {
        ctx.status = 204;
        ctx.body = "No response from conference hall";
        return next();
      }

      const {
        categories = [],
        formats = [],
        speakers = [],
        talks = [],

      } = response.data;

      // await populateCategoryTable(categories);
      // await populateFormatTable(formats)
      await populateSpeakerTable(speakers);
      // await populateTalkTable(talks);

      ctx.status = 200;
      ctx.body = "I've migrate datas from conference hall to strapi database!";
    } catch (err) {
      ctx.status = 500;
      ctx.body = err;
    }
    finally {
      next()
    }
  },
};
