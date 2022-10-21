class Modal {
  constructor(handleSubmit) {
    this.handleSubmit = handleSubmit;
  }

  handlePositive() {
    console.log(this);
    this.handleSubmit();
    this.handleCancel();
  }
  createUI() {
    const selectRoot = document.querySelector(".root");
    const divModal = document.createElement("div");
    divModal.className = "modal";

    selectRoot.appendChild(divModal);
    const divModalContent = document.createElement("div");
    divModalContent.className = "modal-content";
    divModal.appendChild(divModalContent);

    const pQuestion = document.createElement("p");
    pQuestion.innerText = "Are you sure?";
    divModalContent.appendChild(pQuestion);

    const divGroupModal = document.createElement("div");
    divGroupModal.className = "group-modal";
    divModalContent.appendChild(divGroupModal);

    const btnSubmit = document.createElement("button");
    btnSubmit.className = "btn-success";
    btnSubmit.innerText = "Yes";
    divGroupModal.appendChild(btnSubmit);
    btnSubmit.addEventListener("click", (e) =>
      this.handlePositive.call(this, e)
    );

    const btnCancel = document.createElement("button");
    btnCancel.className = "btn-danger";
    btnCancel.innerText = "No";
    divGroupModal.appendChild(btnCancel);
    btnCancel.addEventListener("click", this.handleCancel);
  }

  handleCancel() {
    const modal = document.querySelector(".modal");
    modal.remove();
    console.log("Modal si removed");
  }
}
