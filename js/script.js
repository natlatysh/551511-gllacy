var btn = document.querySelector(".btn-feedback");
var modal = document.querySelector(".feedback-form");
var close = modal.querySelector(".delete");
var overlay = document.querySelector(".overlay");

btn.addEventListener("click", function (evt) {
modal.classList.add("modal-show");
overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
modal.classList.remove("modal-show");
overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (modal.classList.contains("modal-show")) {
  modal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
}
}
});
