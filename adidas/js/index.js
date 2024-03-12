var swiper = new Swiper(".product-tab-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: "auto",
      spaceBetween: 6,
    },
  },
});

var swiper2 = new Swiper(".product-popular-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: "auto",
      spaceBetween: 12,
    },
  },
});

/* 공지모달 처리 */

const noticeOpen = document.querySelector(".btn-open-notice");
const noticeClose = document.querySelector(".close-btn-box");
const noticeWindow = document.querySelector("#noticeModalBg");

noticeOpen.addEventListener("click", () => {
  noticeWindow.style.display = "block";
});
noticeClose.addEventListener("click", () => {
  noticeWindow.style.display = "none";
});

/* gnb 처리 */
const gnb = document.querySelector(".gnb");
const depth1 = gnb.querySelectorAll("li"); //  gnb 하위의 li 요소를 모두 찾음
//const depth1 =  document.querySelectorAll('.gnb>li');

depth1.forEach(function (ele) {
  // 마우스가 li 요소 위에 올려졌을때
  ele.addEventListener("mouseenter", function () {
    //현재li 요소의 자식 중에 클래스가 dep2-bg-box인요소를 찾아서 보이게 한다.
    let depth2 = this.querySelector(".dep2-bg-box");
    if (depth2) {
      depth2.style.display = "block";
    }
  });
  // 마우스가 li 요소를 벗어났을 떄
  ele.addEventListener("mouseleave", function () {
    //현재li 요소의 자식 중에 클래스가 dep2-bg-box인요소를 찾아서 숨김
    let depth2 = this.querySelector(".dep2-bg-box");
    if (depth2) {
      depth2.style.display = "none";
    }
  });
});

/* 비디오 컨트롤 */
const vid = document.querySelector("#adidasVideo");
const btnPlay = document.querySelector(".btn-play");

btnPlay.addEventListener("click", function () {
  let value = btnPlay.classList.contains("stop");
  if (value) {
    btnPlay.classList.remove("stop");
    vid.play();
  } else {
    btnPlay.classList.add("stop");
    vid.pause();
  }
});
