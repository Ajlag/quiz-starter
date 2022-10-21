class Score {
  constructor(score) {
    this.score = score;
  }

  incrementScore(currentQuestion, newG) {
    const currentScore = document.querySelectorAll(".score_question");
    currentScore[currentQuestion + 1].style.backgroundColor = "green";
  }

  createUI(count, currentQuestion) {
    const selectRoot = document.querySelector(".root");
    const divScore = document.createElement("div");
    divScore.className = "score_ladder";
    selectRoot.appendChild(divScore);

    for (let i = 0; i < count; i++) {
      const divQuestion = document.createElement("div");
      divQuestion.className = "score_question";
      if (i === 4 || i === 9 || i === 14) {
        divQuestion.style.backgroundColor = "red";
      }

      if (i === currentQuestion) {
        divQuestion.style.backgroundColor = "green";
      }
      divScore.appendChild(divQuestion);
    }
  }
}
