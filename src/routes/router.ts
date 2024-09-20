import { Router, Request, Response } from "express";
import * as controller from "../controllers/controller";

const router = Router();

// log available names
router.get("/", (req: Request, res: Response) => {
  console.log("usernames will be logged here - wip");
  res.sendStatus(200);
});

// display form
router.get("/new", controller.displayForm);

// handle submission
router.post("/new", controller.saveUsername);

export default router;
