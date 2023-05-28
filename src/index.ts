// Required External Modules

import dotenv from "dotenv";

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';
// import { Request, Response } from "express";
// import { OpenAIApi, Configuration } from "openai";
import { generateResponse } from "./controllers";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.post("/generate", generateResponse);


// app.use(helmet());
// app.use(cors());
// app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

