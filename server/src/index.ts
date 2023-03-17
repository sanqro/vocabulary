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
    msg: "This is the API of the following repository on GitHub: https://github.com/sanqro/vocabulary"
  })
);

// routes
app.use("/auth", auth);
app.use("/sets", authState, sets);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
