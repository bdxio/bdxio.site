module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6331ffdccc312e5e62fb70f5e9456644'),
  },
});
