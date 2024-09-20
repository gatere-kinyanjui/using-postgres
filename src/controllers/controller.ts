import { Request, Response } from "express";
import * as database from "../db/queries";

// // Mock database
// const db: { usernames: string[] } = { usernames: [] };

export const displayForm = async (req: Request, res: Response) => {
  res.render("users", {
    title: "New Users",
  });
};

export const getUsernames = async (req: Request, res: Response) => {
  const usernames = await database.getAllUsernames();
};

export const saveUsername = async (req: Request, res: Response) => {
  const { username } = req.body;
  await database.insertUsername(username);

  console.log("Username to be saved: ", username);

  // // Simulate saving to database
  // db.usernames.push(username);
  res.redirect("/new");
};
