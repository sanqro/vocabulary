"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = __importDefault(require("./routes/auth"));
var sets_1 = __importDefault(require("./routes/sets"));
var authState_1 = __importDefault(require("./middleware/authState"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.disable("etag");
app.get("/", function (req, res) {
    return res.status(200).json({
        msg: "This is the API of the following repository on GithHub: https://github.com/sanqro/vocabulary"
    });
});
app.use("/auth", auth_1["default"]);
app.use("/sets", authState_1["default"], sets_1["default"]);
if (!process.env.DETA_RUNTIME) {
    app.listen(3000, function () { return console.log("Started on http://localhost:3000"); });
}
module.exports = app;
