const mainSection = document.querySelector("#main-section");
const formSection = document.querySelector("#form-section");
const bookmarkListSection = document.querySelector("#bookmark-list-section");
const categoryList = document.querySelector("#category-list");
const categoryDropdown = document.querySelector("#category-dropdown");
const addBookmarkBtn = document.querySelector("#add-bookmark-button");
const viewCategoryBtn = document.querySelector("#view-category-button");
const closeFormBtn = document.querySelector("#close-form-button");
const addBookMarkBtnForm = document.querySelector("#add-bookmark-button-form");
const closeListBtn = document.querySelector("#close-list-button");
const dltBookmarkBtn = document.querySelector("#delete-bookmark-button");
const nameInput = document.querySelector("#name");
const urlInput = document.querySelector("#url");

const reset = () => {
  nameInput.value = "";
  urlInput.value = "";
};

const capitalise = (str) => {
  const arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (
      Array.isArray(bookmarks) &&
      bookmarks.every((b) => b.name && b.category && b.url)
    ) {
      return bookmarks;
    }

    return [];
  } catch (e) {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const renderBookmarks = () => {
  const filteredBookmarks = getBookmarks().filter(
    (bookmark) => bookmark.category === categoryDropdown.value,
  );
  if (!filteredBookmarks.length) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    return;
  }

  categoryList.innerHTML = "";
  filteredBookmarks.forEach(({ name, category, url }) => {
    categoryList.innerHTML += `<label for="${name}">
    <input type="radio" id="${name}" value="${name}" name="${category}">
    <a href="${url}">${name}</a>
    </label>`;
  });
};

const handleAddBtnClick = () => {
  formSection.querySelector(".category-name").innerText = capitalise(
    categoryDropdown.value,
  );

  displayOrCloseForm();
};

const handleViewBtnClick = () => {
  bookmarkListSection.querySelector(".category-name").innerText = capitalise(
    categoryDropdown.value,
  );

  renderBookmarks();
  displayOrHideCategory();
};

const handleCloseFormBtnClick = () => {
  displayOrCloseForm();
};

const handleCloseListBtnClick = () => {
  displayOrHideCategory();
};

const handleAddBtnFormClick = () => {
  if (!nameInput.value.trim() || !url.value.trim()) {
    alert("Please provide valid Name and URL");
    return;
  }

  const bookmarks = getBookmarks();
  const bookmark = {
    name: nameInput.value.trim(),
    category: categoryDropdown.value,
    url: urlInput.value.trim(),
  };

  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  reset();
  displayOrCloseForm();
};

const handleDltBtnClick = () => {
  const bookmarks = getBookmarks();
  const bookmarkToDelete = categoryList.querySelector(
    `input[type="radio"]:checked`,
  );
  const indexOfbookmarkToDlt = bookmarks.findIndex(
    ({ name, category }) =>
      category === bookmarkToDelete?.name && name === bookmarkToDelete?.id,
  );
  if (indexOfbookmarkToDlt === -1) return;

  bookmarks.splice(indexOfbookmarkToDlt, 1);
  !bookmarks.length
    ? localStorage.removeItem("bookmarks")
    : localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks();
};

addBookmarkBtn.addEventListener("click", handleAddBtnClick);
viewCategoryBtn.addEventListener("click", handleViewBtnClick);
closeFormBtn.addEventListener("click", handleCloseFormBtnClick);
addBookMarkBtnForm.addEventListener("click", handleAddBtnFormClick);
closeListBtn.addEventListener("click", handleCloseListBtnClick);
dltBookmarkBtn.addEventListener("click", handleDltBtnClick);
