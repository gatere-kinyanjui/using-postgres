import { Pool } from "pg";

// All of the following properties should be read from environment variables
export const pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "gatere",
  database: "top_users",
  password: "gK1ny@njui.10",
  port: 5432, // The default port
});
