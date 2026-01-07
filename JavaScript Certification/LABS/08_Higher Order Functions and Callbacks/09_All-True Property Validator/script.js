//1
const truthCheck = (arrOfObjs, prop) => arrOfObjs.every((obj) => obj[prop]);

//2
const truthCheck2 = (arrOfObjs, prop) => {
  for (const obj of arrOfObjs) {
    if (!obj[prop]) {
      return false;
    }
  }

  return true;
};
