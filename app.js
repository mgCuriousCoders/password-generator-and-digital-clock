// ?............DIGITAL CLOCK..................
function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s + " " + session;
  // document.getElementById("digital-clock").innerText = time;
  document.getElementById("digital-clock").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();

//? ..............PASSWORT GENARATOT................................

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword() {
  let password = "";
  password += getRandomLower();
  password += getRandomLower();
  password += getRandomLower();
  password += getRandomLower();
  password += getRandomUpper();
  password += getRandomNumber();
  password += getRandomNumber();
  password += getRandomSymbol();
  password += getRandomSymbol();
  password.charAt(Math.floor(Math.random() * password.length));
  const myArray = Array.from(password);
  const mixArray = myArray.sort((a, b) => 0.5 - Math.random()).join("");
  const finalPassword = mixArray.toString();
  console.log(finalPassword);
  return finalPassword;
}

const input = document.getElementById("password");
const generate = document.getElementById("generate");
const isCopySuccess = document.querySelector(".copy-success");
generate.addEventListener("click", (e) => {
  input.value = "";
  generatePassword();
  input.value = generatePassword();
});

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  if (input.value == "") {
    input.value = "No value here, please click reset and generate button";
    copy.disabled = true;
  } else {
    navigator.clipboard.writeText(input.value).then(
      (success) => (isCopySuccess.innerText = "Text Copied"),
      (err) => (isCopySuccess.innerText = "Error text copying")
    );
  }
});

//?........................................
let showOrHideBtn = document.getElementById("show-hide");
const resetBtn = document.getElementById("reset");
document.querySelector(".reset-show-hide");

//? Toggle Function
function showHide() {
  if (showOrHideBtn.textContent == "Show Password") {
    showOrHideBtn.textContent = "Hide Password";
    input.setAttribute("type", "password");
  } else if (showOrHideBtn.textContent == "Hide Password") {
    showOrHideBtn.textContent = "Show Password";
    input.setAttribute("type", "text");
  }
}

document.querySelector(".reset-show-hide").addEventListener("click", (e) => {
  if (e.target.classList.contains("show-btn")) {
    showHide();
  }
  if (e.target.classList.contains("reset-btn")) {
    input.value = "";
    isCopySuccess.innerText = "";
    copy.disabled = false;
  }
});

date = new Date().getFullYear();
setTimeout(() => {
  document.querySelector(
    ".copy-right"
  ).innerText = `Coded by MG Curious Coders ${date}©`;
}, 3000);
