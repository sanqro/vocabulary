// The foundation for the whole backend was copied from here https://github.com/BogDAAAMN/deta-typescript-express-starter

import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello Typescript from Deta!"));

// Listen on port 3000 if running locally
if (!process.env.DETA_RUNTIME) {
  app.listen(3000, () => console.log("Started on http://localhost:3000"));
}

module.exports = app;
