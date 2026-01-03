//1 --> this returns a new str from an arr which is formed from given str(copy) and further split into chars arr to reqwrite each value to capitalise the 1st letter of each word and de-capitalise the rest

const titleCase = (str) => {
  const words = str.trim().split(" ");

  for (let i = 0; i < words.length; i++) {
    const chars = words[i].split("");

    for (let j = 0; j < chars.length; j++) {
      if (j === 0) {
        chars[j] = chars[j].toUpperCase();
      } else {
        chars[j] = chars[j].toLowerCase();
      }
    }

    words[i] = chars.join("");
  }

  return words.join(" ");
};

//2 --> it cretaes a new string from scratch by looping through each word and char and capitalising or decapitalising where necessary
/*
const titleCase = (str) => {
  const words = str.trim().split(" ");
  let titleCasedStr = "";

  for (const word of words) {
    let titleCasedWord =""

    for (const char of word) {
      if (word[0] !== char || titleCasedWord.includes(char.toUpperCase())) {
        titleCasedWord += char.toLowerCase();
      } else {
        titleCasedWord += char.toUpperCase();
      }
    }

    if (words[words.length - 1] !== word) {
      titleCasedStr += titleCasedWord+" ";
    }else {
      titleCasedStr += titleCasedWord;
    }
  }

  return titleCasedStr;
};
*/
