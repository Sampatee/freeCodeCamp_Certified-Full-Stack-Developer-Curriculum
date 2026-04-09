const generateBtn = document.querySelector("#generate-btn");
const sortBtn = document.querySelector("#sort-btn");
const startingArr = document.querySelector("#starting-array");
const arrContainer = document.querySelector("#array-container");

const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () =>
  Array(5)
    .fill()
    .map((_) => generateElement());

const generateContainer = () => document.createElement("div");

const fillArrContainer = (el, arr) => {
  el.innerHTML = "";
  arr.forEach((int) => (el.innerHTML += `<span>${int}</span>`));
};

const isOrdered = (intA, intB) => intA <= intB;

const swapElements = (arr, idx) => {
  if (!isOrdered(arr[idx], arr[idx + 1])) {
    const temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
    return true;
  }

  return false;
};

const highlightCurrentEls = (el, idx) => {
  if (!el.children[idx] || !el.children[idx + 1]) {
    return;
  }

  el.children[idx].style.border = "2px dashed red";
  el.children[idx + 1].style.border = "2px dashed red";
};

const handleGenerateBtnClick = () => {
  const randomArr = generateArray();
  fillArrContainer(startingArr, randomArr);
  [...arrContainer.children].forEach((el) => {
    if (el.id !== "starting-array") {
      el.remove();
    }
  });
  sortBtn.style.display = "block";
};

const handleSortBtnClick = () => {
  const arr = [...startingArr.children].map((child) =>
    Number(child.textContent),
  );
  let isSwapped = true;

  while (isSwapped) {
    isSwapped = false;
    highlightCurrentEls(arrContainer.lastElementChild, 0);

    for (let i = 0; i < arr.length - 1; i++) {
      if (swapElements(arr, i)) {
        isSwapped = true;
      }

      const newContainer = generateContainer();
      fillArrContainer(newContainer, arr);
      highlightCurrentEls(newContainer, i + 1);
      arrContainer.appendChild(newContainer);
    }
  }

  arrContainer.lastElementChild.style.border = "4px solid green";
};

sortBtn.style.display = "none";

generateBtn.addEventListener("click", handleGenerateBtnClick);
sortBtn.addEventListener("click", handleSortBtnClick);
