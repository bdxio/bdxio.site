"use strict";

module.exports = {
  async getSchedule(ctx, next) {
    try {
      const categories = await strapi.db
        .query("api::category.category")
        .findMany({
          select: ["id", "name"],
        });

      const slots = await strapi.db.query("api::slot.slot").findMany({
        select: ["startSlot", "name"],
        orderBy: { startSlot: "asc" },
      });

      const talks = await strapi.db.query("api::talk.talk").findMany({
        where: {
          backup: false,
        },
        select: ["id", "title", "level"],
        populate: {
          category: { select: ["id", "name"] },
          slot: { select: ["startSlot"] },
          room: { select: ["name"] },
          format: {
            select: ["name"],
          },
          speakers: {
            select: ["name"],
          },
        },
      });

      const schedule = slots.reduce((acc, slot) => {
        const slotTalks = talks.filter(
          (t) => t.slot.startSlot === slot.startSlot
        );

        acc.push({
          [slot.startSlot]: {
            name: slot.name,
            talks: slotTalks,
          },
        });

        return acc;
      }, []);

      ctx.status = 200;
      ctx.body = {
        categories,
        schedule,
      };
    } catch (e) {
      console.error(`Error while getting talks`, e);
    } finally {
      next();
    }
  },
};
