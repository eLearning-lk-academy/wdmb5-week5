const menuBtn = document.getElementById("menuBtn");
const mmCloseBtn = document.getElementById("mmCloseBtn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    overlay.classList.remove("d-none");
    mobileMenu.classList.remove("d-none");
})

mmCloseBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
    mobileMenu.classList.add("d-none");
})


