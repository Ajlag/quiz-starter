class Game {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
    this.maxQuestion = 0;
    this.clickPrevious = false;
    this.maxQueCorrect = true;
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
    // this.previousButton();
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

  // previousButton() {
  //   const prevButton = document.querySelector(".previous");
  //   prevButton.addEventListener("click", () => this.previous.call(this));
  // }

  restartButton() {
    const restartBtn = document.querySelector(".restart");
    restartBtn.addEventListener("click", () => this.restart.call(this));
  }

  restart() {
    this.shuffle(10000);
    this.currentQuestion = 0;
    this.maxQuestion = 0;
    this.maxQueCorrect = true;
    this.currentQuestionObj.attemptedAnswer = false;
    this.removeScore();
    this.changeAnswer();
    this.showScore();
    this.createQuestion();
    this.removeTimer();
    this.createTimer();
  }

  changeAnswer() {
    const divAnsw = document.querySelectorAll(".answ");
    divAnsw.forEach((e) => e.remove());
  }

  next() {
    this.removeTimer();
    this.createTimer();

    this.score.incrementScore(
      this.currentQuestion,
      this.currentQuestionObj.isCorectAnswer()
    );

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
    this.currentQuestion++;
    this.createQuestion();
  }

  previous() {
    this.clickPrevious = true;
    if (this.currentQuestion === 0) {
      return;
    }

    if (!this.currentQuestionObj.attemptedAnswer) {
      return;
    }

    this.changeAnswer();
    this.currentQuestion--;

    const pitanje = this.questions[this.currentQuestion];
    const tacanOdg = pitanje.correct_answer;

    this.createQuestion();
    console.log(this.currentQuestion, "click na previous");
    this.currentQuestionObj.attemptedAnswer = true;

    const divAnsw = document.querySelectorAll(".answ");
    divAnsw[tacanOdg].style.backgroundColor = "green";
  }

  createTimer() {
    const pTimer = document.createElement("p");
    pTimer.innerText = "00:30";
    pTimer.id = "timer";

    const divTimer = document.querySelector(".group");
    divTimer.appendChild(pTimer);
    let sec = 29;
    let timer = setInterval(() => {
      if (this.currentQuestionObj.attemptedAnswer) {
        sec = 29;
        return;
      }
      pTimer.innerHTML = "00:" + sec;
      pTimer.style.color = "white";
      if (sec < 10) {
        pTimer.innerHTML = "00:0" + sec;
        pTimer.style.color = "red";
      }
      if (sec === 0) {
        pTimer.innerHTML = "00:00";
        this.currentQuestionObj.attemptedAnswer = true;

        return;
      } else {
        sec--;
      }
    }, 1000);
  }

  removeTimer() {
    const timer = document.getElementById("timer");
    timer.remove();
  }
}
