module.exports = {
  routes: [
    {
      method: "GET",
      path: "/populate",
      handler: "populate.getTalksFromConferenceHall",
      config: {
        auth: { scope: ['find'] }
      }
    },
  ],
};
