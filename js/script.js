var btn = document.querySelector(".btn-feedback");
var modal = document.querySelector(".feedback-form");
var close = modal.querySelector(".delete");
var wrapper = document.querySelector(".feedback-wrapper");

btn.addEventListener("click", function (evt) {
wrapper.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
wrapper.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (wrapper.classList.contains("modal-show"))  {
  wrapper.classList.remove("modal-show");
}
}
});

wrapper.addEventListener("click", function (evt) {
evt.preventDefault();
wrapper.classList.remove("modal-show");
  });
