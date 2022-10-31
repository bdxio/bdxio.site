module.exports = {
  routes: [
    {
      method: "GET",
      path: "/openfeedback",
      handler: "openfeedback.getOpenfeedbackFormattedData",
      config: {
        auth: false,
      },
    },
  ],
};
