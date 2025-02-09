export const accordion = () => {
  const parent = document?.querySelector(".carts__items");

  parent?.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
      openAccordion(e.target);
    }
    return;
  });

  function openAccordion(target) {
    const activeBlock = document.querySelector('.item.active');

    if (activeBlock) activeBlock.classList.remove('active');
    target.classList.toggle("active");
  }
};
