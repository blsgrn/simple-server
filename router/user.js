import express, { Router } from "express";
import { usersData } from "../Data.js";

const router = express.Router();

router.get("/users", function (req, res) {
  res.json(usersData);
});

router.post("/users", function (req, res) {
  const { name, email } = req.body;
  usersData.push({
    name: name,
    email: email,
  });

  res.json(usersData);
});

export default router;
