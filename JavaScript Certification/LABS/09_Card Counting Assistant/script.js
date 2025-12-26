let count = 0;

const cardCounter = (card) => {
  if (typeof card === "string" || card === 10) {
    count--;
  } else if (typeof card === "number" && card >= 2 && card <= 6) {
    count++;
  }

  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
};

//testing
cardCounter(3);
cardCounter(2);
cardCounter("A");
cardCounter(10);
console.log(cardCounter("K"));
