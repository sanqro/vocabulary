"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const sets_1 = __importDefault(require("./routes/sets"));
const authState_1 = __importDefault(require("./middleware/authState"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.disable("etag");
app.get("/", (req, res) => res.status(200).json({
    msg: "This is the API of the following repository on GithHub: https://github.com/sanqro/vocabulary"
}));
app.use("/auth", auth_1.default);
app.use("/sets", authState_1.default, sets_1.default);
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
module.exports = app;
