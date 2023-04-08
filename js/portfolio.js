(() => {
  const refs = {
    buttonsList: document.querySelector(".our-works__list"),
    items: document.querySelectorAll(".project__item"),
  };

  const arrItems = [...refs.items];

  const onChangeActive = (e) => {
    const { target, currentTarget } = e;
    if (target.tagName === "BUTTON") {
      preActiveBtn = currentTarget.querySelector(".active");
      if (preActiveBtn) {
        preActiveBtn.classList.remove("active");
      }
    }
    target.classList.add("active");
  };

  const filterItems = (e) => {
    arrItems.forEach((item) => item.classList.remove("not-visible"));
    const btnValue = e.target.value;
    let notVisibleItems = [];
    switch (btnValue) {
      case "Усі":
        notVisibleItems = [];
        break;
      case "Веб-сайти":
        notVisibleItems = arrItems.filter(
          (item) => item.dataset.id !== "Веб-сайт"
        );
        break;
      case "Додатки":
        notVisibleItems = arrItems.filter(
          (item) => item.dataset.id !== "Додаток"
        );
        break;
      case "Дизайн":
        notVisibleItems = arrItems.filter(
          (item) => item.dataset.id !== "Дизайн"
        );
        break;
      case "Маркетинг":
        notVisibleItems = arrItems.filter(
          (item) => item.dataset.id !== "Маркетинг"
        );
      default:
        break;
    }
    notVisibleItems.forEach((item) => item.classList.add("not-visible"));
  };

  refs.buttonsList.addEventListener("click", filterItems);
  refs.buttonsList.addEventListener("click", onChangeActive);
})();
