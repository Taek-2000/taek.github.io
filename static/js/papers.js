function initializePaperCards() {
  const modal = document.querySelector("#image-lightbox");
  const modalImage = document.querySelector(".image-lightbox__img");
  const closeButton = document.querySelector(".image-lightbox__close");

  document.querySelectorAll(".paper-page .pub-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") return;

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `perspective(700px) translateY(-5px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform =
        "perspective(700px) translateY(0) rotateX(0deg) rotateY(0deg)";
      card.style.setProperty("--shine-x", "50%");
      card.style.setProperty("--shine-y", "50%");
    });

    card.addEventListener("click", () => {
      modalImage.src = card.dataset.image;
      modalImage.alt = card.dataset.alt;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", initializePaperCards);
