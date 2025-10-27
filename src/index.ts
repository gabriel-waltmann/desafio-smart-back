import express from "express";
import dbInit from "./db/int";
import { Routes } from "@/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? "3000";

dbInit();

app.get("/", (req, res) => {
  return res.status(200).json({ message: `Api is running on port ${port}!` })
});

app.use("/", Routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});