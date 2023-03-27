const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");

const signUp = document.querySelector("button[value='sign-up']");
const ohShitGoBack = document.querySelector("button[value='go-back']");

signUp.addEventListener("click", function () {
  form1.style.left = "-200%";
  form2.style.left = "0px";
});
ohShitGoBack.addEventListener("click", function () {
  form1.style.left = "0px";
  form2.style.left = "110%";
});
