import jwt from "jsonwebtoken";
import { IJWTData } from "../interfaces/interfaces";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";

export default async function checkUser(req: any, res: any, next: any) {
  try {
    dotenv.config({ path: path.resolve(__dirname, "../.env") });

    const token: string = req.headers.authorization;
    const jwtData = jwt.verify(token, process.env.JWT_SECRET);
    const id = req.body.oldKey ?? req.body.key;

    const projectKey: string = process.env.PROJECT_KEY;
    const deta = Deta(projectKey);
    const vocabularySet = deta.Base("vocabulary-sets");

    const username: string = (jwtData as IJWTData).username;
    const vocabularySetData = await vocabularySet.get(id);

    if (vocabularySetData == null) {
      res.status(401).json({
        message: "This vocabulary set does not exist!",
        success: false
      });
      return false;
    }

    if (vocabularySetData.creator != username) {
      res.status(401).json({
        message: "The username in the JWT you provided is not authorized to do this!",
        success: false
      });
      return false;
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
