import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("안녕하세요 반갑습니다");
});

router.get("/calc/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;
  let sum = num1 + num2;
  res.send(sum);
});

export default router;
