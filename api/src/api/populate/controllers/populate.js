"use strict";

const fs = require("fs");
const axios = require("axios");
const eachSeries = require("async/eachSeries");

const {
  populateSpeakers,
  populateCategories,
  populateFormats,
  populateTalks,
  populateCompanies,
} = require("./helpers");

module.exports = {
  async index(ctx, next) {
    try {
      const url = `https://conference-hall.io/api/v1/event/${process.env.CONFERENCE_HALL_EVENT_ID}?key=${process.env.CONFERENCE_HALL_API_KEY}`;
      const response = await axios.get(url);

      if (!response || !response.data) {
        ctx.status = 204;
        ctx.body = "No response from conference hall";
        next();
        return;
      }

      const {
        categories = [],
        formats = [],
        talks = [],
        speakers = [],
      } = response.data;

      await populateSpeakers(speakers);
      await populateCategories(categories);
      await populateFormats(formats);
      await populateTalks(talks);
      await populateCompanies(speakers);

      ctx.status = 200;
      ctx.body = "I've migrate datas from conference hall to strapi database!";
    } catch (err) {
      ctx.status = 500;
      ctx.body = err;
    }
  },
};
