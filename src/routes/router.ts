import { Router } from "express";
import * as controller from "../controllers/controller";

const usersRouter = Router();

// usersRouter.get("/", (req, res) => {
//   console.log("usernames will be logged here - wip");
//   res.sendStatus(200);
// });

usersRouter.get("/", controller.getUsers);

// usersRouter.post("/", (req, res) => {
//   console.log("username to be saved: ", req.body.username);
//   res.sendStatus(200);
// });

export default usersRouter;
