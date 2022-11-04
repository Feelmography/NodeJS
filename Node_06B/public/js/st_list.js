document.addEventListener("DOMContentLoaded", () => {
  const stTable = document.querySelector("table.student.list");
  /* 
  이벤트 버블링을 이용한 event handling 의 간소화
  원하는 것은 학생정보 List 중에서 한 학생의 row 를 클릭했을 때
  반응하는 event를 만들고자 한다
  이때 각 row 들에게 event를 부여하면 너무 많은 event 설정이
  생성된다. 많은 비용이 소요된다.
  그래서 row 들을 감싸고 있는 한 개의 box를 지정하여
  그 box에 event 핸들링을 설정하고
  이벤트 버블링을 활용하여 어떤 row가 클릭되었는지를
  알아내서 연산을 수행할 것이다
  */
  stTable?.addEventListener("click", (tag) => {
    const target = tag.target;
    if (target === "TD") {
      alert(`클릭된 TD, ${target.textContent}`);
    }
  });
});
