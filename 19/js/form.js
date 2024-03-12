document.addEventListener("DOMContentLoaded", () => {
  const n1 = document.querySelector("#n1");
  const n2 = document.querySelector("#n2");
  const n3 = document.querySelector("#n3");
  const m5 = document.frm1.m5; //네임으로 호출
  const n5 = document.frm1.n5; //네임으로 호출
  const nbtn1 = document.frm1.nbtn1;
  const nbtn2 = document.frm1.nbtn2;
  const n6 = document.frm1.m6;
  const m6 = document.frm1.n6;

  n1.addEventListener("blur", () => {
    let value = n1.value.toUpperCase();
    n1.value = value;
  });

  n2.addEventListener("keyup", () => {
    let value = n2.value.toLowerCase();
    n2.value = value;
  });

  n3.addEventListener("blur", () => {
    let valueLength = n3.value.length;
    if (valueLength > 5) {
      alert("글자수를 초과했습니다.");
      n3.value = "";
      n3.focus();
    }
  });

  m5.addEventListener("click", () => {
    let value = n5.value.slice(0, 3);
    m5.value = value;
  });

  nbtn1.addEventListener("click", () => {
    let value1 = n6.value.toUpperCase();
    let value2 = m6.value.toUpperCase();
    m6.value = value1;
    n6.value = value2;
  });

  nbtn2.addEventListener("click", () => {
    let value1 = n6.value.toLowerCase();
    let value2 = m6.value.toLowerCase();
    n6.value = value1;
    m6.value = value2;
  });

  document.frm1.m7.addEventListener("click", () => {
    let value = document.frm1.n7.value;
    alert(`${value}님 환영합니다.`);
  });

  document.frm1.m8.addEventListener("click", () => {
    let value = document.frm1.n8.value.indexOf("@");
    if (value == -1) {
      alert("잘못된 형식입니다.");
    }
    document.frm1.n8.value = "";
  });

  document.frm1.n9.addEventListener("keyup", () => {
    let a = document.frm1.n9.value.length;
    if (a >= 6) {
      document.frm1.m9.focus();
    }
  });

  document.frm1.btn10.addEventListener("click", () => {
    let a = document.frm1.n10.value.length;
    let b = document.frm1.n10.value.length;
    let c = a + b;
    if (c != 13) {
      alert("잘못된 입력입니다. 확인 후 다시 입력해주세요");
      document.frm1.n10.value = "";
      document.frm1.n10.focus();
      document.frm1.m10.value = "";
    }
  });

  document.frm1.btn11.addEventListener("click", () => {
    let gender = document.frm1.m11.value.charAt(0);
    if (gender == 1 || gender == 3) {
      alert("남자");
    } else if (gender == 2 || gender == 4) {
      alert("여자");
    } else {
      alert("잘못된 입력");
    }
  });
  document.frm1.btn12.addEventListener("click", () => {
    let a = document.frm1.n12.value;
    let b = document.frm1.m12.value;
    if (a != b) {
      alert("비밀번호가 일치하지 않습니다 다시 입력하세요");
      document.frm1.n12.value = "";
      document.frm1.n12.focus();
      document.frm1.n12.value = "";
    }
  });
  document.frm1.btn13.addEventListener("click", () => {
    let a = document.frm1.n13.value.length;
    if (a <= 1) alert("한글자 이상 입력 하세요");
  });
}); //DOMContentLoaded
