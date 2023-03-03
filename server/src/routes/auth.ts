import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { IAuthForm }from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const auth = deta.Base("users");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
      const authFormData: IAuthForm = req.body as IAuthForm;

      if (!(await auth.get(authFormData.username))) {
        const passwordHash = await argon2.hash(authFormData.password);
        const auhtFormDataJson = {
          key: authFormData.username,
          password: passwordHash
        };
        const newUser = await auth.insert(auhtFormDataJson);

        res.status(201).json({
            username: newUser.key,
            success: true
          });
      } else {
        throw new Error("This user already exists. Please choose another username!");
      }
    } catch (err) {
      res.status(503).json({ error: err.message });
    }
  });


export default router;