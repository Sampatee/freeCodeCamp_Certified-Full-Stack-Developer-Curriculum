const textBox = document.querySelector("#text-input");
const result = document.querySelector("#char-count");

const handleInput = () => {
  const charCount = textBox.value.length;

  if(charCount > 50) {
    textBox.value = textBox.value.slice(0, 50);
    return;
  }

  if(charCount === 50) {
    result.style.color = "red";
  }

  result.textContent = `Character Count: ${charCount}/50`;
};

textBox.addEventListener("input", handleInput);