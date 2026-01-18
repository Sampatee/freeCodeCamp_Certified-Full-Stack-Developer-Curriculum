const inputElmnt = document.querySelector("#text-input");
const chkBtn = document.querySelector("#check-btn");
const resultText = document.querySelector("#result");

const alphaNumericRegex = /[^a-zA-Z0-9]/g;
const isPalindrome = (str) => str.split("").reverse().join("") === str;

const handleCheck = () => {
  const usrInput = inputElmnt.value;
  const clnStr = usrInput.replace(alphaNumericRegex, "").toLowerCase();

  if (!usrInput) {
    alert("Please input a value");
    return;
  }

  resultText.innerHTML = `<strong>${usrInput}</strong> ${
    isPalindrome(clnStr) ? "is" : "is not"
  } a palindrome`;
  inputElmnt.value = "";
};

chkBtn.addEventListener("click", handleCheck);
