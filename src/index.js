const btn = document.getElementById("button");
const share = document.getElementById("showShare");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  share.classList.toggle("active");
});
