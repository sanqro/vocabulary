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

router.get("/getSet/:id", async (req, res) => {
    try {
      const fetchedVocabularySet = await vocabularySet.get(req.params.id);
      if (fetchedVocabularySet == null) {
        res.status(409).json({
          error: "This vocabulary set does not exist."
        });
        return false;
      } else {
        res.status(201).json({ fetchedVocabularySet });
      }
    }catch (err) {
      res.status(503).json({ error: err.message });
    }
  });
  
router.delete("/delete/:id", async (req, res) => {
    try {
      const fetchedVocabularySet = await vocabularySet.get(req.params.id);
      if(fetchedVocabularySet != null) {
        await vocabularySet.delete(req.params.id);
        res.status(200).json({ message:"Deleted vocabulary set", id: req.params.id, sucess: true});
      } else {
        res.status(409).json({
          error: "This vocabulary set does not exist."
        });
        return false;
      }
    }catch (err) {
      res.status(503).json({ error: err.message });
    }
  });

export default router;