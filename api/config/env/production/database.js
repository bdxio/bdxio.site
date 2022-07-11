const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATAABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
