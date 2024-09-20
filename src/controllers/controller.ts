import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response): void => {
  res.render("users", {
    title: "New Users",
  });
};
