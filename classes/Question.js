class Question {
  constructor(questionObj) {
    this.question = questionObj.question;
    this.answers = questionObj.answers;
    this.correct_answer = questionObj.correct_answer;
    this.attemptedAnswer = false;
  }

  isCorectAnswer() {
    return this.attemptedAnswer === this.answers[this.correct_answer]
      ? true
      : false;
  }

  createUI(divQuestion, divAnswer) {
    divQuestion.innerText = this.question;

    for (let i = 0; i < this.answers.length; i++) {
      const answ = document.createElement("div");
      answ.classList.add("answ");
      answ.innerText = this.answers[i];
      divAnswer.appendChild(answ);
      const that = this;
      answ.addEventListener("click", (e) => this.openModal(e, that));
    }
  }

  openModal(e, that) {
    if (this.attemptedAnswer) {
      return;
    }
    console.log(this);
    const newModal = new Modal(() => {
      that.handleAnswerQuiz(e);
    });
    newModal.createUI();
  }

  handleAnswerQuiz(e) {
    if (this.attemptedAnswer) {
      return;
    }
    this.attemptedAnswer = e.target.innerText;
    if (this.isCorectAnswer()) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
  }
}
