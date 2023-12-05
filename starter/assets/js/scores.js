var highScores = document.querySelector("#highscores")


function renderScores() {
  highScores.textContent = localStorage.getItem(initialsInput)
  highScores.textContent = localStorage.getItem(sec)
}
