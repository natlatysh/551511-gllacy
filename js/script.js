var btn = document.querySelector(".btn-feedback");
var wrapper = document.querySelector(".feedback-wrapper");
var close = wrapper.querySelector(".delete");
var name = wrapper.querySelector("[name=feedback-name]");

btn.addEventListener("click", function (evt) {
wrapper.classList.add("modal-show");
name.focus();
});

close.addEventListener("click", function (evt) {
wrapper.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (wrapper.classList.contains("modal-show"))  {
  wrapper.classList.remove("modal-show");
}
}
});
