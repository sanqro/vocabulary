"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    return res.status(200).json({
        msg: "This is the API of the following repository on GithHub: https://github.com/sanqro/vocabulary"
    });
});
if (!process.env.DETA_RUNTIME) {
    app.listen(3000, function () { return console.log("Started on http://localhost:3000"); });
}
module.exports = app;
