"use strict";
// Required External Modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// import helmet from 'helmet';
// import { Request, Response } from "express";
// import { OpenAIApi, Configuration } from "openai";
const controllers_1 = require("./controllers");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.post("/generate", controllers_1.generateResponse);
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// Server Activation
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
