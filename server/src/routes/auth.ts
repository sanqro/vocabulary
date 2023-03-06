import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { IAuthForm }from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const auth = deta.Base("users");

const jwtSecret: string = process.env.JWT_SECRET

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

router.post("/login", async (req, res) => {
    try {
        const authFormData: IAuthForm = req.body as IAuthForm;

        const user = await auth.get(authFormData.username);
        const password = user.password as string;
    

        if (await authFormData.username === null) {
          throw new Error("This user does not exist. Please register before trying to log in");
        }

        if (await argon2.verify(password, authFormData.password)) {
          const token = jwt.sign(
            { username: user.key },
            jwtSecret,
            { expiresIn: "21600s" } 
          );
          res.status(200).json({ token, success: true });
        } else {
          res.status(401).json({
            error: "Wrong credentials! Please try again.",
            success: false
          });
        }
    } catch (err) {
      res.status(503).json({ error: err.message });
    }
  });

export default router;