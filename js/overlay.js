var overlay = document.querySelector(".overlay");

btn.addEventListener("click", function (evt) {
overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
 evt.preventDefault();
 overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (modal.classList.contains("modal-show")) {
    overlay.classList.remove("modal-show");
}
}
});
