class Game {
    constructor(questions) {
        this.questions = questions;
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

    start() {
        this.shuffle(100000);
        console.log(this.questions);
        const divQuestion = document.querySelector(".question");
        const divAnswer = document.querySelector(".answer");
        const currentQuestion = new Question(this.questions[0]);
        console.log(currentQuestion);
        currentQuestion.createUI(divQuestion, divAnswer);
    }
}
