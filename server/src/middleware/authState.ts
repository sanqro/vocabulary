import jwt from "jsonwebtoken";
import { IJWTData } from "../interfaces/interfaces";
import { Deta } from "deta";
import * as dotenv from "dotenv";
import path from "path";

export default async function authState(req: any, res: any, next: any) {
  try {
    const token: string = req.headers.authorization;
    const jwtData = jwt.verify(token, process.env.JWT_SECRET);

    const username = (jwtData as IJWTData).username;

    dotenv.config({ path: path.resolve(__dirname, "../.env") });

    const projectKey: string = process.env.PROJECT_KEY;
    const deta = Deta(projectKey);
    const users = deta.Base("users");

    if ((await users.get(username)) == null) {
      res.status(401).json({
        message: "The user in your JWT does not exist!",
        success: false
      });
      return false;
    }

    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
