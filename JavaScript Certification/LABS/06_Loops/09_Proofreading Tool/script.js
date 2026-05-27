const isPalindrome = (word) => {
  const originalWord = word.toLowerCase();
  let reversedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i].toLowerCase();
  }

  return originalWord === reversedWord;
};

const findPalindromeBreaks = (words) => {
  const nonPalindromeWordIdx = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      nonPalindromeWordIdx.push(i);
    }
  }

  return nonPalindromeWordIdx;
};

const findRepeatedPhrases = (words, phraseLength) => {
  const idx = [];
  const checkedPhrases = [];

  //to create new phrases of phraseLength length from the words arr
  for (let i = 0; i + phraseLength <= words.length; i++) {
    const phrase = words.slice(i, phraseLength + i);

    //if current phrase has already been checked
    //skip checking and go to next phrase
    if (checkedPhrases.includes(phrase)) continue;

    //to slide the checking window to the right
    //starts from the word after the starting word of current phrase
    for (let j = i + 1; j + phraseLength <= words.length; j++) {
      let repeatFound = false;

      //to check each element in the window with
      //the element in phrase with respect to position
      for (let k = 0; k < phrase.length; k++) {
        //if any word in the phrase does not match
        //the word in checking window in that position
        //aborts the check and slides the window forward
        if (phrase[k] !== words[k + j]) break;
        repeatFound = true; //if everything matches, it is a repeat
      }

      if (repeatFound) {
        //if repeat is found for current window
        //push the original index of the phrase and the repeat index
        idx.push(i, j);
      }
    }
    checkedPhrases.push(phrase); //list phrase as checked
  }
  return idx;
};

const analyzeTexts = (texts, phraseLength) => {
  const processedTexts = [];

  if (!texts.length) return processedTexts;

  for (let i = 0; i < texts.length; i++) {
    processedTexts.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i]),
    });
  }

  return processedTexts;
};
