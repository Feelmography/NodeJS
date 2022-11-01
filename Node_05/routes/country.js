import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM country ORDER BY name";
  mysql.query(sql, (error, result, field) => {
    /**
     * 국가 = {code, name, ...}
     * result = [{국가}, {국가}, {국가}]
     */
    // res.json(result);
    // result에 담긴 값을 countrys라는 이름으로 바꿔서 country.ejs에 보내서 렌더링
    res.render("country", { countrys: result });
  });
});

// 주소창에 http://localhost:3000/country/list 입력하고
// Enter를 눌렀을 때 처리하는 URI
// 메뉴에서 link를 클릭했을 때 처리하는 URI
// get : 화면에서 보여줌
router.get("/list", (req, res) => {
  res.render("country", { countrys: [] });
});

// post : 데이터를 처리함
router.post("/list", (req, res) => {
  // form 의 input 에 설정된 name(c_name) 변수 값을 setter하여
  // name 변수에 저장
  const name = req.body.c_name;
  console.log(name);
  const sql =
    // 따옴표 앞에 빈칸 한 칸 꼭 넣기
    " SELECT * FROM country " + " WHERE name LIKE " + " CONCAT('%', ?, '%') ";
  mysql.execute(sql, [name], (error, countrys, field) => {
    res.render("country", { countrys });
  });
});

router.get("/:name/get", (req, res) => {
  const name = req.params.name;
  const sql = "SELECT * FROM country WHERE name = ?";
  mysql.execute(sql, [name], (error, countrys, field) => {
    // res.json(result);
    res.render("country", { countrys });
  });
});

router.get("/:name/like", (req, res) => {
  const name = req.params.name;
  const sql =
    "SELECT * FROM country WHERE name LIKE CONCAT('%', ?, '%') ORDER BY code";
  mysql.execute(sql, [name], (error, countrys, field) => {
    // res.json(result);
    res.render("country", { countrys });
  });
});

export default router;
