const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const star = document.querySelectorAll(".star");
const contentList = document.querySelector(".content_list"); //ul
const content = document.querySelectorAll(".content"); //li
const contentBody = document.querySelectorAll(".acco-body"); //ul>li>p
content.forEach((ele, index) => ele.setAttribute("data-index", index)); //li에 data-index속성부여
// 테마바꾸기
star.forEach((ele) => {
  ele.addEventListener("click", () => {
    let isNight = body.classList.contains("night");
    if (isNight) {
      // 현재 밤 => 낮으로
      body.classList.remove("night");
      moon.classList.remove("on");
    } else {
      // 현재 낮 => 밤으로)
      body.classList.add("night");
      moon.classList.add("on");
    }
  });
});

// 아코디언 메뉴
contentList.addEventListener("click", (e) => {
  let selectedLi = e.target;
  let isOn = selectedLi.classList.contains("on");
  if (isOn) {
    //현재 열린 상태 => 닫힘으로 만든다
    selectedLi.classList.remove("on");
    selectedLi.childNodes.forEach((ele) => {
      if (ele.tagName === "P") ele.classList.remove("active");
    });
  } else {
    // 현재 닫힘 상태 => 열림으로 만든다.
    content.forEach((ele) => ele.classList.remove("on"));
    selectedLi.classList.add("on");
    contentBody.forEach((ele) => ele.classList.remove("active"));
    let index = selectedLi.dataset.index;
    contentBody[index].classList.add("active");
  }
});
