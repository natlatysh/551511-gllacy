var btn = document.querySelector(".btn-feedback");
var wrapper = document.querySelector(".feedback-wrapper");
var close = wrapper.querySelector(".delete");
var name = wrapper.querySelector(".name");
var form = wrapper.querySelector("form");
var email = wrapper.querySelector(".email");
var textarea = wrapper.querySelector(".textarea");
btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    wrapper.classList.add("modal-show");
    name.focus();
});
close.addEventListener("click", function(evt) {
    wrapper.classList.remove("modal-show");
    wrapper.classList.remove("modal-error");
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (wrapper.classList.contains("modal-show")) {
            wrapper.classList.remove("modal-show");
            wrapper.classList.remove("modal-error");
        }
    }
});
form.addEventListener("submit", function (evt) {
    if (!textarea.value || !email.value) {
        evt.preventDefault();
        wrapper.classList.remove("modal-error");
        wrapper.offsetWidth = wrapper.offsetWidth;
        wrapper.classList.add("modal-error");
}   else {
        localStorage.setItem("email", email.value);
}
  });
