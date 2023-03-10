// The foundation for the whole backend was copied from here https://github.com/BogDAAAMN/deta-typescript-express-starter

import express from "express";
import cors from "cors";
import auth from "./routes/auth";
import sets from "./routes/sets";
import authState from "./middleware/authState";

const app = express();
app.use(express.json());
app.use(cors());
app.disable("etag");

app.get("/", (req, res) =>
  res.status(200).json({
    msg: "This is the API of the following repository on GithHub: https://github.com/sanqro/vocabulary"
  })
);

// routes
app.use("/auth", auth);
app.use("/sets", authState, sets);

// Listen on port 3000 if running locally
if (!process.env.DETA_RUNTIME) {
  app.listen(3000, () => console.log("Started on http://localhost:3000"));
}

module.exports = app;
