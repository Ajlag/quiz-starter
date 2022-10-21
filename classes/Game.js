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
  start() {
    this.shuffle(100000);
    this.createQuestion();
    this.nextButton();
    this.previousButton();
    this.showScore();
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

  changeAnswer() {
    const divAnsw = document.querySelectorAll(".answ");
    divAnsw.forEach((e) => e.remove());
  }

  next() {
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

    this.changeAnswer();
    this.currentQuestion--;
    this.createQuestion();
  }
}
