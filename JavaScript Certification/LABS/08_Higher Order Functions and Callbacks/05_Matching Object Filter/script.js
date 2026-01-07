const whatIsInAName = (arrOfObjs, srcObj) => {
  const filteredArr = arrOfObjs.filter((obj) => {
    for (const key in srcObj) {
      if (obj[key] !== srcObj[key]) {
        return false;
      }
    }

    return true;
  });

  return filteredArr;
};
