//I got 2 Solutions --

/*1 --> first create the correct letter Range then
check evry char of str against every char of
correct Letter Range [Uses 2 Loops]*/
/*
const fearNotLetter = (str) => {
  let letterRange = "";

  for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    letterRange += String.fromCharCode(i);
  }

  for (const char of letterRange) {
    if (!str.includes(char)) {
      return char;
    }
  }
};
*/

/*2 --> check each char of str aginst the expected
char in the range(formed by incrementeing the 1st
charCode) [Uses 1 Loop]*/
const fearNotLetter = (str) => {
  let currCharCode = str.charCodeAt(0);

  for (const char of str) {
    const expectedChar = String.fromCharCode(currCharCode);

    if (char !== expectedChar) {
      return expectedChar;
    }

    currCharCode++;
  }
};
