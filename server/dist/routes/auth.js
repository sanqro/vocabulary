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
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv.config({ path: path_1.default.resolve(__dirname, "../.env") });
const projectKey = process.env.DETA_PROJECT_KEY;
const deta = (0, deta_1.Deta)(projectKey);
const auth = deta.Base("users");
const jwtSecret = process.env.JWT_SECRET;
const router = express_1.default.Router();
router.post("/register", async (req, res) => {
    try {
        const authFormData = req.body;
        if (!(await auth.get(authFormData.username))) {
            const passwordHash = await argon2_1.default.hash(authFormData.password);
            const auhtFormDataJson = {
                key: authFormData.username,
                password: passwordHash
            };
            const newUser = await auth.insert(auhtFormDataJson);
            res.status(201).json({
                username: newUser.key,
                success: true
            });
        }
        else {
            throw new Error("This user already exists. Please choose another username!");
        }
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
router.post("/login", async (req, res) => {
    try {
        const authFormData = req.body;
        const user = await auth.get(authFormData.username);
        const password = user.password;
        if (user === null) {
            throw new Error("This user does not exist. Please register before trying to log in");
        }
        if (await argon2_1.default.verify(password, authFormData.password)) {
            const token = jsonwebtoken_1.default.sign({ username: user.key }, jwtSecret, { expiresIn: "21600s" });
            res.status(200).json({ token, success: true });
        }
        else {
            res.status(401).json({
                error: "Wrong credentials! Please try again.",
                success: false
            });
        }
    }
    catch (err) {
        res.status(503).json({ error: err.message });
    }
});
exports.default = router;
