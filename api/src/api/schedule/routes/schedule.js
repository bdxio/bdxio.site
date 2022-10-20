module.exports = {
  routes: [
    {
      method: "GET",
      path: "/schedule",
      handler: "schedule.getSchedule",
      config: {
        auth: { scope: ["find"] },
      },
    },
  ],
};
