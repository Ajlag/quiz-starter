class Game {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
  }

  shuffle(numOfShuffles) {
    for (let i = 0; i < numOfShuffles; i++) {
      const randomNum = Math.floor(Math.random() * this.questions.length);
      const tempRandomNum = Math.floor(Math.random() * this.questions.length);

      let temp = this.questions[randomNum];
      this.questions[randomNum] = this.questions[tempRandomNum];
      this.questions[tempRandomNum] = temp;
    }
  }

  showScore() {
    this.score = new Score(0);
    this.score.createUI(questions.length, this.currentQuestion);
  }

  removeScore() {
    const selectScore = document.querySelector(".score_ladder");
    selectScore.remove();
  }
  start() {
    this.shuffle(100000);
    this.createQuestion();
    this.nextButton();
    this.previousButton();
    this.showScore();
    this.createTimer();
    this.restartButton();
  }

  createQuestion() {
    const divQuestion = document.querySelector(".question");
    const divAnswer = document.querySelector(".answer");
    this.currentQuestionObj = new Question(
      this.questions[this.currentQuestion]
    );

    this.currentQuestionObj.createUI(divQuestion, divAnswer);
  }

  nextButton() {
    const nextB = document.querySelector(".next");
    nextB.addEventListener("click", () => this.next.call(this));
  }

  previousButton() {
    const prevButton = document.querySelector(".previous");
    prevButton.addEventListener("click", () => this.previous.call(this));
  }

  restartButton() {
    const restartBtn = document.querySelector(".restart");
    restartBtn.addEventListener("click", () => this.restart.call(this));
  }

  restart() {
    this.shuffle(10000);
    this.currentQuestion = 0;
    this.currentQuestionObj.attemptedAnswer = false;
    this.removeScore();
    this.changeAnswer();
    this.showScore();
    this.createQuestion();
  }
  changeAnswer() {
    const divAnsw = document.querySelectorAll(".answ");
    divAnsw.forEach((e) => e.remove());
  }

  next() {
    this.createTimer();

    if (this.currentQuestion === this.questions.length - 1) {
      return;
    }
    if (!this.currentQuestionObj.attemptedAnswer) {
      return;
    }
    if (!this.currentQuestionObj.isCorectAnswer()) {
      return;
    }

    this.changeAnswer();
    this.score.incrementScore(this.currentQuestion);
    this.currentQuestion++;
    this.createQuestion();
  }

  previous() {
    if (this.currentQuestion === 0) {
      return;
    }

    if (!this.currentQuestionObj.attemptedAnswer) {
      return;
    }

    console.log(this.currentQuestionObj.attemptedAnswer);
    this.changeAnswer();
    this.currentQuestion--;
    this.currentQuestionObj.attemptedAnswer = true;

    this.createQuestion();
  }

  createTimer() {
    const selectTimer = document.querySelector("#timer");
    let sec = 30;
    let timer = setInterval(() => {
      if (this.currentQuestionObj.attemptedAnswer) {
        sec = 30;
        return;
      }
      selectTimer.innerHTML = "00:" + sec;
      selectTimer.style.color = "white";
      if (sec <= 10) {
        selectTimer.style.color = "red";
      }
      if (sec === 0) {
        this.currentQuestionObj.attemptedAnswer = true;
        selectTimer.innerHTML = "00:00";

        return;
      } else {
        sec--;
      }
    }, 1000);
  }
}
