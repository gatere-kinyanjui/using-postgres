import express from "express";
import usersRouter from "./routes/router";
import path from "path";

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// // middlewares for parsing request body
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(express.json()); // For JSON payloads

// use the router
app.use("/", usersRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
