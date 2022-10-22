class Score {
  constructor(score) {
    this.score = score;
  }

  incrementScore(currentQuestion, correct) {
    const currentScore = document.querySelectorAll(".score_question");
    currentScore[currentQuestion + 1].style.backgroundColor = "yellow";
    const i = document.createElement("i");
    currentScore[currentQuestion].appendChild(i);

    if (correct) {
      currentScore[currentQuestion].style.backgroundColor = "green";
      i.className = "fa-solid fa-check";
    } else {
      currentScore[currentQuestion].style.backgroundColor = "red";
      currentScore[currentQuestion + 1].style.backgroundColor = "gray";
    }
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
        divQuestion.style.backgroundColor = "blue";
      }

      if (i === currentQuestion) {
        divQuestion.style.backgroundColor = "yellow";
      }
      divScore.appendChild(divQuestion);
    }
  }
}
