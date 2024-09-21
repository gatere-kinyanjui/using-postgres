import { Pool } from "pg";
import "dotenv/config";

console.log(process.env);

const PORT = parseInt(process.env.PORT as string);

// All of the following properties should be read from environment variables
export const pool = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: PORT, // The default port
  // port: 8000,
});
