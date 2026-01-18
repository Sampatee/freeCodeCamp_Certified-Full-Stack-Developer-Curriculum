const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

const getFlags = () => {
  let strToReturn = "";

  if (caseInsensitiveFlag.checked) {
    strToReturn += "i";
  }
  if (globalFlag.checked) {
    strToReturn += "g";
  }

  return strToReturn;
};

const getMatches = (regex, testStr) => {
  if (!regex.test(testStr)) {
    return "no match";
  }

  return testStr.match(regex).join(", ");
};

const handleTest = () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  const testStr = stringToTest.textContent;

  stringToTest.innerHTML = testStr.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`,
  );
  testResult.textContent = getMatches(regex, testStr);
};

testButton.addEventListener("click", handleTest);
