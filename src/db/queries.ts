import { pool } from "./pool";

export const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

export const insertUsername = async (username: string) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};
