import express, { json, Application, Request, Response } from "express";
import "colors";
import { config } from "dotenv";

import { connectDB } from "./config/db";
import { notFound, errorHandler } from "./middleware/error";

import { router as productRoutes } from "./routes/product";

config();

const app: Application = express();

connectDB();
app.use(json());

app.get("/", (_req: Request, res: Response) =>
  res.send("API Running on Port 5000")
);

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`
  )
);
