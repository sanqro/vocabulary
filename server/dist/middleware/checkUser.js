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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
const deta_1 = require("deta");
async function checkUser(req, res, next) {
    try {
        dotenv.config({ path: path_1.default.resolve(__dirname, "../.env") });
        const token = req.headers.authorization;
        const jwtData = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const id = req.body.oldKey ?? req.body.key;
        const projectKey = process.env.PROJECT_KEY;
        const deta = (0, deta_1.Deta)(projectKey);
        const vocabularySet = deta.Base("vocabulary-sets");
        const username = jwtData.username;
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
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.default = checkUser;
