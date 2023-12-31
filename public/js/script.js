console.log("JS is connected");
const socket = io();
const page = window.location.pathname.substring(1);
const localStorageKey = `liked_${page}`;
let liked = localStorage.getItem(localStorageKey) === "true";

function updateButtonState() {
  const button = document.getElementById("like-button");
  button.className = liked ? "liked" : "";
  button.textContent = liked ? "Unlike" : "Like";
  button.style.color = liked ? "rgba(123, 0, 230, 0)" : "rgba(123, 0, 230, 0)";
}

document.getElementById("like-button").addEventListener("click", () => {
  liked = !liked;
  updateButtonState();
  localStorage.setItem(localStorageKey, liked.toString());

  if (liked) {
    socket.emit("incrementLike", page);
  } else {
    socket.emit("decrementLike", page);
  }
});

socket.on("updateLikes", (data) => {
  document.getElementById("like-count").textContent = data.likeCount;
});

socket.emit("getLikeCount", page);

updateButtonState();

function setLikeContainerScale() {
  var screenWidth = window.innerWidth;
  var scaleFactor = 0.75;

  if (screenWidth < 200) {
    scaleFactor = 0.2;
  } else if (screenWidth < 250) {
    scaleFactor = 0.3;
  } else if (screenWidth < 300) {
    scaleFactor = 0.4;
  } else if (screenWidth < 400) {
    scaleFactor = 0.5;
  } else if (screenWidth < 600) {
    scaleFactor = 0.7;
  }

  var likeContainer = document.querySelector(".like-container");
  likeContainer.style.transform = "scale(" + scaleFactor + ")";
}

window.addEventListener("load", setLikeContainerScale);
window.addEventListener("resize", setLikeContainerScale);
