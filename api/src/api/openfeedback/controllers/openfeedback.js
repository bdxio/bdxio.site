"use strict";
const { getSessionsAndSpeakers } = require("../../../helpers");

module.exports = {
  async getOpenfeedbackFormattedData(ctx, next) {
    try {
      const sessionsAndSpeakers = await getSessionsAndSpeakers();
      ctx.status = 200;
      ctx.body = { sessions: sessionsAndSpeakers };
    } catch (e) {
      ctx.status = 500;
      console.error(e);
      ctx.body = e;
    } finally {
      next();
    }
  },
};
