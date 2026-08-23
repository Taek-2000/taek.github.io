function initializePhotoGallery() {
  const modal = document.querySelector("#photo-lightbox");
  const modalImage = document.querySelector(".photo-lightbox__image");
  const closeButton = document.querySelector(".photo-lightbox__close");

  document.querySelectorAll(".photo-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (!modal || !modalImage) return;
      modalImage.src = card.dataset.image;
      modalImage.alt = card.querySelector("img")?.alt || "";
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  closeButton?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", initializePhotoGallery);
