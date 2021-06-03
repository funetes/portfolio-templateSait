const wrap = document.querySelector(".presentation");
const open = document.querySelector(".presentMain");
const close = document.querySelector(".closeButtonWrap");

open.onclick = function() {
  wrap.classList.add("open");
}
close.onclick = function() {
  wrap.classList.remove("open");
}