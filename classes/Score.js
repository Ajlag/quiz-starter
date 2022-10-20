class Score {
    constructor(score) {
        this.score = score;
    }

    createUI(count) {
        const body = document.querySelector("body");
        const divScore = document.createElement("div");

        for (let i = 0; i < count; i++) {
            const divQuestion = document.createElement("div");

            if (i === 5 || i === 10 || i === 15) {
                divQuestion.className = "error";
            }

            divScore.appendChild(divQuestion);
        }
    }
}
