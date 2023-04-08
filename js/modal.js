(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.body,
    backdrop: document.querySelector(".backdrop"),
  };

  const openModal = () => {
    refs.modal.classList.remove("is-hidden");
    refs.body.classList.add("no-scroll");
    refs.backdrop.addEventListener("click", closeModalByclickOnBeckdrop);
    window.addEventListener("keydown", closeModalByEsc);
  };

  const closeModal = (e) => {
    refs.modal.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
    refs.backdrop.removeEventListener("click", closeModal);
    window.removeEventListener("keydown", closeModalByEsc);
  };

  const closeModalByEsc = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const closeModalByclickOnBeckdrop = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  // function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  // }
})();
