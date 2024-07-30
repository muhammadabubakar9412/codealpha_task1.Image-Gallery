var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic; // Set the source of the full-screen image
}

function closeFullImg() {
  var fullImgBox = document.getElementById("fullImgBox");
  fullImgBox.style.display = "none"; // Hide the full-screen image
}
