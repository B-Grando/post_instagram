import knexConfig from "knex";
import "dotenv/config";

export const knex = knexConfig({
  client: "pg",
  connection: {
    host: process.env.HOST,
    port: Number(process.env.PORT || 5432),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME
  }
});