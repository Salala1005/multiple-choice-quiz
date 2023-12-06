var highScores = document.querySelector("#highscores")
var savedScores = JSON.parse(localStorage.getItem("scoreTest"))|| []

function renderScores() {
  // highScores.textContent = "Initial :  " 
  // highScores.textContent += JSON.parse(localStorage.getItem("initials")) 
  // highScores.textContent += " ,  Your score:  " 
  // highScores.textContent += JSON.parse(localStorage.getItem("scores"))
for (let index = 0; index < savedScores.length; index++) {
  console.log(savedScores[index])
  highScores.innerHTML += "Initials : " + savedScores[index].initials + ". Your score: " + savedScores[index].scores + " <br>"
}

}
renderScores();


// localStorage.setItem("scoreTest",JSON.stringify([{
//   initials:"mnb",
//   scores:"66"
// }]))
// var testScores = JSON.parse(localStorage.getItem("scoreTest"))
// testScores = [...testScores,{initials:"jmj", scores:"12"}]
// localStorage.setItem("scoreTest",JSON.stringify(testScores))