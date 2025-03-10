"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var MONGO_URI = process.env.MONGO_URI || '';
// console.log("uri",MONGO_URI);
var PORT = process.env.PORT || 3000;
mongoose_1.default.connect(MONGO_URI)
    .then(function () { return console.log('Connected to MongoDB'); })
    .catch(function (err) { return console.error('MongoDB connection error:', err); });
app.listen(PORT, function () { return console.log("Server running on http://localhost:".concat(PORT)); });
exports.default = app;
