"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
const deta_1 = require("deta");
const checkUser_1 = __importDefault(require("../middleware/checkUser"));
dotenv.config({ path: path_1.default.resolve(__dirname, "../.env") });
const projectKey = process.env.DETA_PROJECT_KEY;
const deta = (0, deta_1.Deta)(projectKey);
const vocabularySet = deta.Base("vocabulary-sets");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    try {
        const vocabularySetData = req.body;
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
    }
    catch (err) {
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
        }
        else {
            res.status(201).json({ fetchedVocabularySet });
        }
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
router.get("/getAll", async (req, res) => {
    try {
        const fetchedVocabularySets = await vocabularySet.fetch();
        res.status(201).json({ fetchedVocabularySets });
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
router.delete("/delete/:id", checkUser_1.default, async (req, res) => {
    try {
        const fetchedVocabularySet = await vocabularySet.get(req.params.id);
        if (fetchedVocabularySet != null) {
            await vocabularySet.delete(req.params.id);
            res.status(200).json({ message: "Deleted vocabulary set", id: req.params.id, sucess: true });
        }
        else {
            res.status(409).json({
                error: "This vocabulary set does not exist."
            });
            return false;
        }
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
router.post("/update", checkUser_1.default, async (req, res) => {
    try {
        const vocabularySetData = req.body;
        if (!(await vocabularySet.get(req.body.oldKey))) {
            throw new Error("This vocabulary set does not exist.");
        }
        const vocabularySetDataJson = {
            key: vocabularySetData.title + vocabularySetData.creator,
            title: vocabularySetData.title,
            creator: vocabularySetData.creator,
            terms: vocabularySetData.terms,
            definitions: vocabularySetData.definitions
        };
        await vocabularySet.delete(req.body.oldKey);
        await vocabularySet.insert(vocabularySetDataJson);
        res.status(201).json({
            title: vocabularySetDataJson.title,
            creator: vocabularySetDataJson.creator,
            terms: vocabularySetDataJson.terms,
            definitions: vocabularySetDataJson.definitions,
            success: true
        });
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
exports.default = router;
