class Question {
    constructor(questionObj) {
        this.question = questionObj.question;
        this.answers = questionObj.answers;
        this.correct_answer = questionObj.correct_answer;
        this.attemplet = false;
    }

    isCorectAnswer(ans) {
        return ans === this.answers[this.correct_answer] ? true : false;
    }

    createUI(divQuestion, divAnswer) {
        divQuestion.innerText = this.question;

        for (let i = 0; i < this.answers.length; i++) {
            const answ = document.createElement("div");
            answ.classList.add("answ");
            answ.innerText = this.answers[i];
            divAnswer.appendChild(answ);

            answ.addEventListener("click", this.openModal);
        }
    }

    openModal() {
        const modal = new Modal((e) => this.handleAnswerQuiz(e));
        console.log("modal");
        modal.createUI();
    }

    handleAnswerQuiz(e) {
        if (this.attemplet) {
            return;
        }
        if (this.isCorectAnswer(e.target.innerText)) {
            e.target.style.backgroundColor = "green";
            console.log("uslo");
        } else {
            e.target.style.backgroundColor = "red";
            console.log("pogresno");
        }

        this.attemplet = true;
    }
}
