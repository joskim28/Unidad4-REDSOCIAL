const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");

let likes = 0;
let dislikes = 0;

likeBtn.addEventListener("click", function() {
  likes++;
  likeCount.textContent = `${likes} Me gusta`;
});

dislikeBtn.addEventListener("click", function() {
  dislikes++;
  dislikeCount.textContent = `${dislikes} No me gusta`;
});