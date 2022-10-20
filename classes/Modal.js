class Modal {
    constructor(handleSubmit) {
        this.handleSubmit = handleSubmit;
    }

    createUI() {
        const containerdiv = document.querySelector(".container");
        const divModal = document.createElement("div");
        divModal.className = "modal";

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        const modalQuestion = document.createElement("p");
        modalQuestion.innerText = "Are you sure?";
        modalContent.appendChild(modalQuestion);

        const groupModal = document.createElement("div");
        groupModal.className = "group-modal";
        modalContent.appendChild(groupModal);

        const buttonSubmit = document.createElement("button");
        buttonSubmit.className = "btn-success";
        buttonSubmit.innerText = "Yes";
        buttonSubmit.addEventListener("click", () => this.handleSubmit(e));

        const buttonCancel = document.createElement("button");
        buttonCancel.className = "btn-danger";
        buttonCancel.innerText = "No";
        buttonCancel.addEventListener("click", this.handleCancel);

        groupModal.appendChild(buttonSubmit);
        groupModal.appendChild(buttonCancel);
        divModal.appendChild(modalContent);
        containerdiv.appendChild(divModal);
    }

    handleCancel() {
        const modal = document.querySelector(".modal");
        modal.remove();
    }
}
