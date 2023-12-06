var highScores = document.querySelector("#highscores");
var savedScores = JSON.parse(localStorage.getItem("scoreTest"))|| [];
var clearButton = document.querySelector("#clear");

// disply saved scores and initials from local storage
function renderScores() {
for (let index = 0; index < savedScores.length; index++) {
  console.log(savedScores[index])
  highScores.innerHTML += "Initials : " + savedScores[index].initials + ". Your score: " + savedScores[index].scores + " <br>"
}
}
renderScores();

// clear the saved scores
clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  highScores.innerHTML = ""
  localStorage.clear();
})
