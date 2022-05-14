let star = document.querySelectorAll(".star");
let points = "";
star.forEach((s) => {
  s.addEventListener("click", () => {
    star.forEach((s) => {
      s.classList.remove("selected");
    });
    s.classList.toggle("selected");
    points = s.innerHTML;
  });
});
let button = document.querySelector("button");
button.addEventListener("click", () => {
  if (points !== "") {
    front = document.querySelector("#front");
    back = document.querySelector("#back");
    front.style.display = "none";
    back.style.display = "flex";
    let rating = document.querySelector("#rating");
    rating.innerHTML = `You selected ${points} out of 5`;
  }
});
