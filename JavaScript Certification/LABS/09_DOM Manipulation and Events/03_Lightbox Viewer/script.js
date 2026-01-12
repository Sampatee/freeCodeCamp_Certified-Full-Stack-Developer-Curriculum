const gallery = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");

const handleThumbnailClick = (e) => {
  if(e.target.tagName !== "IMG") {
    return;
  }

  const thumbnailSrc = e.target.src;
  lightBox.querySelector("img").src = thumbnailSrc.replace("-thumbnail", "");
  lightBox.style.display = "flex";
};

const handleClose = e => {
  if(e.target.tagName === "IMG") {
    return;
  }

  lightBox.style.display = "none"
};

gallery.addEventListener("click", handleThumbnailClick);
lightBox.addEventListener("click", handleClose);