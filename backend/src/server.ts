import express from "express";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

import counterRoutes from "./routes/counterRoutes";
app.use("/api/counter", counterRoutes);

app.listen(port, () => {
  console.log(`Kirov Reporting at ${port}`);
});
