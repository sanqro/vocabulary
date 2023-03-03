import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import { IVocabularySet }from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const vocabularySet = deta.Base("vocabulary-sets");

const jwtSecret: string = process.env.JWT_SECRET
const router = express.Router();

router.post("/create", async (req, res) => {
    try {
      const vocabularySetData: IVocabularySet = req.body as IVocabularySet;

      if (await vocabularySet.get(vocabularySetData.title + vocabularySetData.creator)) {
        throw new Error("This vocabulary set exists already. Please try to edit this!");
      }

      const vocabularySetDataJson = {
        key: vocabularySetData.title + vocabularySetData.creator,
        title: vocabularySetData.title,
        creator: vocabularySetData.creator,
        terms: vocabularySetData.terms,
        definitions: vocabularySetData.definitions
      };
      
      const newVocabularySet = await vocabularySet.insert(vocabularySetDataJson);
      
      res.status(201).json({
        title: vocabularySetDataJson.title,
        creator: vocabularySetDataJson.creator,
        terms: vocabularySetDataJson.terms,
        definitions: vocabularySetDataJson.definitions,
        success: true
      });
    } catch (err) {
      res.status(503).json({ error: err.message });
    }
  });

export default router;