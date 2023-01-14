let menuBtn = document.querySelector(".menu-btn");
let navBtns = document.querySelectorAll(".nav-btns");
let navCat = document.querySelectorAll(".nav-btns li");
let navText = document.querySelectorAll(".nav-btns li a");
let content = document.querySelectorAll(".content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navBtns.forEach((btn) => btn.classList.toggle("active"));
  navCat.forEach((cat) => cat.classList.toggle("active"));
  navText.forEach((a) => a.classList.toggle("active"));
});

navText.forEach((btn) => {
  btn.addEventListener("click", () => {
    content.forEach((sec) => {
      sec.classList.remove("active");
      if (btn.getAttribute("href").replace("#", "") === sec.id) {
        sec.classList.add("active");
        localStorage.setItem("href", sec.id);
      }
    });
  });
});

content.forEach((sec) => {
  if (localStorage.href) {
    sec.classList.remove("active");
  }
  if (sec.id === localStorage.href) {
    sec.classList.add("active");
  }
});
