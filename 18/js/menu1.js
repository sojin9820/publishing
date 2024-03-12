const gnb = document.querySelector(".main");
const dep1 = document.querySelectorAll(".main>li");
const dep2List = document.querySelectorAll(".sub");
dep1.forEach((ele, index) => ele.setAttribute("data-num", index));
gnb.addEventListener("click", (e) => {
  let selectedDep1 = e.target;
  let isState = selectedDep1.classList.contains("on");
  if (isState) {
    selectedDep1.classList.remove("on");
    selectedDep1.childNodes.forEach((ele) => {
      if (ele.tagName === "UL") ele.classList.remove("active");
    });
  } else {
    dep1.forEach((ele) => ele.classList.remove("on"));
    selectedDep1.classList.add("on");
    dep2List.forEach((ele) => ele.classList.remove("active"));
    let index = selectedDep1.dataset.num;
    dep2List[index].classList.add("active");
  }
});
/* classList.add()
  classList.remove()
  classList.toggle()
  classList.contains('on') 있으면 true 없으면 false
*/
