import express from "express";
import path from "path";
import logger from "morgan";

// routes
import studentRouter from "../routes/student.js";

const app = express();
app.use(logger("dev"));

// Express에 포함된 미들웨어(Middleware, 중간자 도구)

app.use(express.urlencoded({ extended: false }));

// project/views 폴더를 views 이름으로 세팅
app.set("views", path.join("./views"));
app.set("view engine", "ejs");

// RequestMapping 과 router를 연결하기
app.use("/student", studentRouter);

export default app;
