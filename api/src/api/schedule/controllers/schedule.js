"use strict";

module.exports = {
  async getSchedule(ctx, next) {
    try {
      const talks = await strapi.db.query("api::talk.talk").findMany({
        where: {
          backup: false,
        },
        select: ["id", "title", "level"],
        populate: {
          category: { select: ["id", "name"] },
          slot: { select: ["startDate"] },
          room: { select: ["name"] },
          format: {
            select: ["name"],
          },
          speakers: {
            select: ["name"],
          },
        },
      });

      const schedule = talks.reduce(
        (acc, talk) => {
          const existingCategory = acc.categories.find(
            (c) => c.id === talk.category.id
          );
          const existingSlotIndex = acc.schedule.findIndex(
            (s) => s.slot === talk.slot.startDate
          );

          if (!existingCategory) {
            acc.categories.push(talk.category);
          }

          if (existingSlotIndex === -1) {
            acc.schedule.push({
              slot: talk.slot.startDate,
              talks: [talk],
            });
          } else {
            acc.schedule[existingSlotIndex].talks.push(talk);
          }

          return acc;
        },
        {
          categories: [],
          schedule: [],
        }
      );

      ctx.status = 200;
      ctx.body = schedule;
    } catch (e) {
      console.error(`Error while getting talks`, e);
    } finally {
      next();
    }
  },
};
