const favBtns = document.querySelectorAll(".favorite-icon");

favBtns.forEach(btn => btn.addEventListener("click", () => {
  btn.classList.toggle("filled");
  btn.innerHTML = btn.classList.contains("filled") ? "&#10084;" : "&#9825;";
}))