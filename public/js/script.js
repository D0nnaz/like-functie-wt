console.log("JS is connected");
const socket = io();
let liked = localStorage.getItem("liked") === "true";

function updateButtonState() {
  const button = document.getElementById("like-button");
  button.className = liked ? "liked" : "";
  button.textContent = liked ? "Unlike" : "Like";
}

document.getElementById("like-button").addEventListener("click", () => {
  liked = !liked;
  updateButtonState();
  localStorage.setItem("liked", liked.toString());

  if (liked) {
    socket.emit("incrementLike");
  } else {
    socket.emit("decrementLike");
  }
});

socket.on("updateLikes", (data) => {
  document.getElementById("like-count").textContent = data.likeCount;
});

socket.emit("getLikeCount");

updateButtonState();
