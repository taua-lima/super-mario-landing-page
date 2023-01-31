const btnTrailer = document.querySelector(".btn-trailer");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const trailer = document.getElementById("trailer");
const linkTrailer = trailer.src;

function toggleModal() {
  modal.classList.toggle("shown");
}

btnTrailer.addEventListener("click", function () {
  toggleModal();
  trailer.setAttribute("src", linkTrailer);
});

closeModal.addEventListener("click", function () {
  toggleModal();
  trailer.setAttribute("src", "");
});
